<?php 
/*
post
{
	path: '/'
}

return
[
	{
		"name": "2333folder",
		"isDir": true
	},
	{
		"name": "index.html",
		"isDir": false
	},
	{
		"name": "tttttxt.txt",
		"isDir": false
	}
]
*/
requireJson($JSON, ['path']);
$filePath = __FILES_ROOT_DIR__ . '/' . filterPath($JSON['path']);
if (!file_exists($filePath)) return 0;
$f = scandir($filePath);
$a = array();
foreach($f as $k => $v){
    if ($v == "." || $v == "..") continue;
	$file = $filePath . '/' . $v;

	$name = $v;
    $isDir = is_dir($file);
	$size = $isDir ? false : filesize($file);
	array_push($a, [
		'name'=> $name,
		'isDir'=> $isDir,
		// 'size'=> $size
	]);
}

return $a;