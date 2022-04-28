<?php 
require_once __DIR__ . '/../api/function.php';

header('Content-type: application/json; charset=utf-8');
header('X-Powered-By: DBI/1.0.0');

$P = __DIR__ . '/../api/' . $_GET['p'] . '.php';
if (file_exists($P)) {
	$JSON = file_get_contents('php://input');
	isJSON($JSON) ? $JSON = json_decode($JSON, true) : _die('JSON ERROR');
	$R = require $P;
	echo json_encode([
		'ok'=> 1,
		'data'=> $R
	], JSON_UNESCAPED_UNICODE);
} else {
	echo _die('api page not found');
}