Add-Type -AssemblyName System.Drawing

$srcPath = "C:/Users/luism/.gemini/antigravity/brain/b26de86c-9290-4f72-a235-4c9889c2c477/.user_uploaded/media_1787509551451.jpg"
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

# Crops
Crop-Asset "my_melody_mascot" 0 170 300 400
Crop-Asset "flat_mouse" 20 550 160 165
Crop-Asset "easel_canvas" 790 190 200 230
Crop-Asset "picnic_decor" 670 420 340 230
Crop-Asset "ribbon_bienvenidos" 340 100 340 80
Crop-Asset "title_charofest" 260 160 500 230
Crop-Asset "spotify_widget" 690 620 310 85
Crop-Asset "header_logo" 15 10 220 65

$img.Dispose()
