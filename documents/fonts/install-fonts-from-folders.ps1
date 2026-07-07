param(
    [string]$RootPath = "g:\Ciszu Network\documents\fonts"
)

$fontExtensions = @('.ttf', '.otf', '.otc', '.ttc')
$systemFontsFolder = Join-Path $env:windir 'Fonts'
$userFontsFolder = Join-Path $env:LOCALAPPDATA 'Microsoft\Windows\Fonts'

$destinationFolder = $systemFontsFolder

New-Item -ItemType Directory -Path $destinationFolder -Force | Out-Null
New-Item -ItemType Directory -Path $userFontsFolder -Force | Out-Null

function Test-CanWriteToFolder {
    param([string]$Path)

    try {
        $testFile = Join-Path $Path '.write-test.tmp'
        Set-Content -Path $testFile -Value 'test' -ErrorAction Stop
        Remove-Item -Path $testFile -Force -ErrorAction SilentlyContinue
        return $true
    }
    catch {
        return $false
    }
}

function Test-FontRegistered {
    param([string]$FontFileName)

    $registryPaths = @(
        'HKCU:\Software\Microsoft\Windows NT\CurrentVersion\Fonts',
        'HKLM:\Software\Microsoft\Windows NT\CurrentVersion\Fonts'
    )

    foreach ($registryPath in $registryPaths) {
        if (-not (Test-Path $registryPath)) {
            continue
        }

        $props = Get-ItemProperty -Path $registryPath -ErrorAction SilentlyContinue
        foreach ($prop in $props.PSObject.Properties) {
            if ($prop.Name -in @('PSPath', 'PSParentPath', 'PSChildName', 'PSDrive', 'PSProvider')) {
                continue
            }

            if ($prop.Value -eq $FontFileName) {
                return $true
            }
        }
    }

    return $false
}

function Register-Font {
    param([string]$FontFileName)

    $extension = [System.IO.Path]::GetExtension($FontFileName).ToLowerInvariant()
    $fontType = if ($extension -eq '.otf') { 'OpenType' } else { 'TrueType' }
    $valueName = "$([System.IO.Path]::GetFileNameWithoutExtension($FontFileName)) ($fontType)"
    $registryPaths = @(
        'HKCU:\Software\Microsoft\Windows NT\CurrentVersion\Fonts',
        'HKLM:\Software\Microsoft\Windows NT\CurrentVersion\Fonts'
    )

    foreach ($registryPath in $registryPaths) {
        try {
            if (-not (Test-Path $registryPath)) {
                New-Item -Path $registryPath -Force | Out-Null
            }

            New-ItemProperty -Path $registryPath -Name $valueName -PropertyType String -Value $FontFileName -Force | Out-Null
            return $true
        }
        catch {
            continue
        }
    }

    return $false
}

if (-not (Test-Path $RootPath)) {
    Write-Host "No se encontró la ruta: $RootPath" -ForegroundColor Red
    exit 1
}

$fontFiles = Get-ChildItem -Path $RootPath -Recurse -File |
Where-Object {
    $_.Extension.ToLowerInvariant() -in $fontExtensions -and
    -not $_.Name.StartsWith('._')
}

if (-not $fontFiles) {
    Write-Host "No se encontraron fuentes con formato soportado en '$RootPath'." -ForegroundColor Yellow
    exit 0
}

$fontFiles = $fontFiles | Sort-Object FullName -Unique

if (-not (Test-CanWriteToFolder -Path $systemFontsFolder)) {
    Write-Host "No se tiene permiso de escritura en la carpeta de fuentes del sistema: $systemFontsFolder" -ForegroundColor Yellow
    Write-Host "Se usará la carpeta de usuario: $userFontsFolder" -ForegroundColor Yellow
    $destinationFolder = $userFontsFolder
}
else {
    $destinationFolder = $systemFontsFolder
}

Write-Host "Se revisarán $($fontFiles.Count) fuentes desde la carpeta raíz y todas sus subcarpetas." -ForegroundColor Cyan
Write-Host "Carpeta de destino: $destinationFolder" -ForegroundColor Cyan

$installedCount = 0
$skippedCount = 0
$failedCount = 0

foreach ($fontFile in $fontFiles) {
    $destPath = Join-Path $destinationFolder $fontFile.Name

    try {
        $relativePath = [System.IO.Path]::GetRelativePath($RootPath, $fontFile.FullName)
    }
    catch {
        $relativePath = $fontFile.FullName
    }

    if ((Test-Path $destPath) -and (Test-FontRegistered -FontFileName $fontFile.Name)) {
        Write-Host "✓ Ya instalada y registrada: $($fontFile.Name)" -ForegroundColor Green
        Write-Host "  Origen: $relativePath" -ForegroundColor DarkGray
        $skippedCount++
        continue
    }

    if (Test-Path $destPath) {
        Write-Host "⚠ Copiada en la carpeta de fuentes, pero no registrada: $($fontFile.Name)" -ForegroundColor Yellow
        Write-Host "  Origen: $relativePath" -ForegroundColor DarkGray

        try {
            $registered = Register-Font -FontFileName $fontFile.Name
            if ($registered) {
                Write-Host "✓ Registrada correctamente: $($fontFile.Name)" -ForegroundColor Green
                $installedCount++
            }
            else {
                Write-Host "✗ No se pudo registrar: $($fontFile.Name)" -ForegroundColor Red
                $failedCount++
            }
        }
        catch {
            Write-Host "✗ Error al registrar: $($fontFile.Name)" -ForegroundColor Red
            $failedCount++
        }

        continue
    }

    Write-Host "⏳ Instalando: $($fontFile.Name)" -ForegroundColor Blue
    Write-Host "  Origen: $relativePath" -ForegroundColor DarkGray

    try {
        Copy-Item -Path $fontFile.FullName -Destination $destPath -Force -ErrorAction Stop
        $registered = Register-Font -FontFileName $fontFile.Name

        if ($registered) {
            Write-Host "✓ Instalada correctamente: $($fontFile.Name)" -ForegroundColor Green
            $installedCount++
        }
        else {
            Write-Host "⚠ Copiada, pero no se pudo registrar: $($fontFile.Name)" -ForegroundColor Yellow
            $failedCount++
        }
    }
    catch {
        Write-Host "✗ No se pudo instalar: $($fontFile.Name)" -ForegroundColor Red
        if ($_.Exception.Message -match 'deneg') {
            Write-Host "  Parece que falta permiso de administrador o la carpeta de fuentes está protegida." -ForegroundColor Yellow
        }
        Write-Host "  $($_.Exception.Message)" -ForegroundColor Red
        $failedCount++
    }
}

Write-Host "Resumen: instaladas=$installedCount, ya existentes=$skippedCount, fallidas=$failedCount" -ForegroundColor Cyan
Write-Host "Proceso terminado. Revisa la carpeta de fuentes de Windows." -ForegroundColor Cyan

Write-Host "" 
$confirm = Read-Host "Presiona Enter para salir"
if ($confirm -ne $null) {
    Write-Host "Saliendo..." -ForegroundColor Gray
}
