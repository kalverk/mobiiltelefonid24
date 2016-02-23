<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$email = $request->email;
$name = $request->name;
$query = $request->query;

$to = 'mobiiltelefonid24@gmail.com';
$subject = 'mobiiltelefonid24.ee ' . $name;
$txt = 'From: ' . $email . PHP_EOL . ' Name: ' . $name . PHP_EOL  . ' Text: ' . $query . PHP_EOL;
$headers = 'From: ' . $email;

if (mail($to, $subject, $txt, $headers)) {
  echo json_encode(array('message' => 'Kiri saadetud!'));
  http_response_code(200);
} else {
  echo json_encode(array('message' => 'Kirja saatmine nurjus!'));
  http_response_code(401);
}
