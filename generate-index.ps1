$BasePath = $PSScriptRoot
$ExcludeDirs = @('Git', '.git', 'node_modules', '.vscode')

$HtmlFiles = Get-ChildItem -Path $BasePath -Recurse -Filter *.html | Where-Object {
    $relativePath = $_.FullName.Substring($BasePath.Length + 1)
    $folder = $relativePath.Split('\')[0]
    
    # We only want files INSIDE subdirectories, not root files
    # And we exclude our hidden/system directories
    ($folder -notin $ExcludeDirs) -and ($relativePath.Contains('\'))
}

$IndexData = @()

foreach ($file in $HtmlFiles) {
    $relativePath = $file.FullName.Substring($BasePath.Length + 1)
    $folder = $relativePath.Split('\')[0]
    $fileName = $file.Name
    $slug = $fileName.Replace(".html", "")
    
    # Capitalize folder for Category
    $category = (Get-Culture).TextInfo.ToTitleCase($folder.ToLower())
    
    # Extract <title> from HTML
    $content = Get-Content -Path $file.FullName -Raw
    $title = "Unknown Title"
    if ($content -match '(?i)<title[^>]*>(.*?)</title>') {
        $title = $Matches[1].Trim()
    }
    
    $item = @{
        title = $title
        slug = $slug
        folder = $folder
        category = $category
    }
    
    $IndexData += $item
}

# Convert to JSON and explicitly formatting as array
$JsonOutput = ConvertTo-Json -InputObject $IndexData -Depth 2

# Force UTF8 without BOM
$Utf8NoBomEncoding = New-Object System.Text.UTF8Encoding $False
[System.IO.File]::WriteAllLines((Join-Path -Path $BasePath -ChildPath "index.json"), $JsonOutput, $Utf8NoBomEncoding)

Write-Host "✅ Successfully updated index.json with $($IndexData.Count) pages."
Write-Host "Press any key to exit..."
$Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") | Out-Null
