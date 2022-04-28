<?php 
$f = scandir(__FILES_ROOT_DIR__);
$a = array();
foreach($f as $k => $v){
    if ($v == "." || $v == "..") continue;
	$file = __FILES_ROOT_DIR__ . '/' . $v;

	$name = $v;
    $isDir = is_dir($file);
	$size = $isDir ? false : filesize($file);
	array_push($a, [
		'name'=> $name,
		'isDir'=> $isDir,
		'size'=> $size
	]);
}

return $a;