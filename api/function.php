<?php 

define('__FILES_ROOT_DIR__', __DIR__ . '/../Files/');

function isJSON($string) {
	if (is_string($string)) {
		@json_decode($string);
		return (json_last_error() === JSON_ERROR_NONE);
	} else {
		return false;
	}
}

function _die($m = '') {
	die(json_encode([
		'ok'=> 0,
		'message'=> $m
	], JSON_UNESCAPED_UNICODE));
}

function requireJson($JSON, $arr) {
	foreach ($arr as $item) {
		if (!isset($JSON[$item])) {
			_die('Require JSON data: ' . $item);
		}
	}
	return true;
}