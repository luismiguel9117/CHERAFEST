Add-Type -AssemblyName System.Drawing

$srcPath = "G:/Descargas/Calendario My Melody Charo Fest/hero-elementos.png"
$outDir = "G:/Escritorio/Charo/public/assets"

$img = [System.Drawing.Bitmap]::FromFile($srcPath)

function Crop-Asset($name, $x, $y, $w, $h) {
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $crop = $img.Clone($rect, $img.PixelFormat)
    $savePath = Join-Path $outDir "$name.png"
    $crop.Save($savePath, [System.Drawing.Imaging.ImageFormat]::Png)
    $crop.Dispose()
    Write-Host "Saved $name.png ($w x $h)"
}

# High resolution crops
Crop-Asset "my_melody_mascot_hd" 0 245 435 580
Crop-Asset "flat_mouse_hd" 30 800 235 240
Crop-Asset "easel_canvas_hd" 1150 275 290 335
Crop-Asset "picnic_decor_hd" 975 610 495 335
Crop-Asset "ribbon_bienvenidos_hd" 495 145 495 115
Crop-Asset "title_charofest_hd" 380 230 730 335
Crop-Asset "spotify_widget_hd" 1005 900 450 125

$img.Dispose()
