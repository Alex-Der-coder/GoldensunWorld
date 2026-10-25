# Récupère les MP3 du jukebox Golden Sun World depuis la Wayback Machine
# A lancer depuis la racine du projet : powershell -ExecutionPolicy Bypass -File recup_sons.ps1
# 1. Liste les captures site_juke.php?sd=N
# 2. Lit dans chaque capture le src du <bgsound>
# 3. Télécharge le MP3 archivé vers public\juke\audio\<N>.mp3

$out = "public\juke\audio"
New-Item -ItemType Directory -Force -Path $out | Out-Null
$map = @()

$cdx = "https://web.archive.org/cdx/search/cdx?url=goldensunworld.free.fr/v3/site_juke.php*&output=json&fl=timestamp,original&filter=statuscode:200&collapse=urlkey"
$rows = (curl.exe -fsSL $cdx | Out-String | ConvertFrom-Json) | Select-Object -Skip 1
"Captures trouvées : $($rows.Count)"

foreach ($r in $rows) {
  $ts = $r[0]; $url = $r[1]
  if ($url -notmatch 'sd=(\d+)') { continue }
  $sd = $Matches[1]

  $html = curl.exe -fsSL "https://web.archive.org/web/${ts}id_/$url" | Out-String
  if ($html -notmatch '<bgsound[^>]*src="?([^"\s>]+)') { "sd=$sd : pas de bgsound"; continue }
  $src = $Matches[1]
  if ($src -notmatch '^https?://') { $src = "http://goldensunworld.free.fr/v3/" + $src.TrimStart('/') }

  curl.exe -fsSL -o "$out\$sd.mp3" "https://web.archive.org/web/2005id_/$src"
  if ($LASTEXITCODE -eq 0) { $status = "OK" } else { $status = "MANQUANT"; Remove-Item "$out\$sd.mp3" -ErrorAction SilentlyContinue }
  "sd=$sd  $status  $src"
  $map += [pscustomobject]@{ sd = $sd; status = $status; src = $src }
}

$map | Sort-Object { [int]$_.sd } | Export-Csv "$out\_correspondance.csv" -NoTypeInformation -Encoding UTF8
"Terminé. Correspondance dans $out\_correspondance.csv"
