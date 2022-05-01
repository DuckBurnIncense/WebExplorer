<?php 
/*
post
{
	file: 'root/2333.png'
}

return
{
	"name": "2333.png",
	"isDir": true,
	"path": "root/2333.png",
	"size": 35,
	"ctime": 1111111111
	"mtime": 1111111111
}
*/

requireJson($JSON, ['file']);
$filePath = __FILES_ROOT_DIR__ . '/' . filterPath($JSON['file']);

if (!file_exists($filePath)) return 0;

$a = [];

$name = basename($filePath);
$isDir = is_dir($filePath);
$size = $isDir ? false : filesize($filePath);

$a['name'] = $name;
$a['isDir'] = $isDir;
$a['size'] = $size;
$a['ctime'] = filectime($filePath);
$a['mtime'] = filemtime($filePath);

return $a;