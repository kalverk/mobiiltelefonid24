<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$type = $request->type;

switch ($type) {
    case 'findByName':
        echo 'findByName';
        break;
    case 'findAllUsedPhones':
        echo 'findAllUsedPhones';
        break;
    case 'findAllNewPhones':
        echo 'findAllNewPhones';
        break;
}
