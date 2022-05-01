<?php 
/*
post
{
	file: 'Root/2333.png'
}

return
//file

*/
requireJson($JSON, ['file']);
$filePath = __FILES_ROOT_DIR__ . '/' . filterPath($JSON['file']);
if (!file_exists($filePath) or !is_file($filePath)) return 0;

$f = fopen($filePath, "rb");
$fSize = filesize($filePath);
Header("Content-type: application/octet-stream");
Header("Accept-Ranges: bytes");
Header("Accept-Length: " . $fSize);
Header("Content-Disposition: attachment; filename=" . basename($filePath));
echo $fSize ? fread($f, $fSize) : null;
fclose($f);
exit();