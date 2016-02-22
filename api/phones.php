<?php

header("Content-Type: application/json; charset='utf-8'");

$type = isset($_GET['type']) ? $_GET['type'] : '';

if (!$type) {
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);
  $type = $request->type;
}

$data = (array)json_decode(file_get_contents('phones.json'), true);

//require 'meekrodb.2.3.class.php';
//$requestURL = $_SERVER['REQUEST_URI'];
//connect();

$result = [];

switch ($type) {
    case 'findTop10':
      $result = findTop10();
      break;
    case 'findById':
      $result = findById();
      break;
    case 'findByName':
      $result = findByName();
      break;
    case 'findAllUsedPhones':
      $result = findAllPhones(1);
      break;
    case 'findAllNewPhones':
      $result = findAllPhones(0);
      break;
    case 'findAllPhones':
      $result = findAllPhones(null);
      break;
    case 'deleteById':
      $result = deleteById($request);
      break;
    case 'activateById':
      $result = activateById($request);
      break;
    case 'savePhone':
      $result = savePhone($request);
      break;
    default:
      header("HTTP/1.0 400 Bad Request");
}

function findTop10 () {
  $data = $GLOBALS['data'];

  $result = array();
  for ($i = 0; $i < 10; $i += 1) {
    $result[] = $data[$i];
  }

  return $result;

  /*try {
    $sql = "SELECT * FROM phones where visible=1 ORDER BY views DESC LIMIT 10";
    $result = DB::query($sql);
    return $result;
  } catch(MeekroDBException $e) {
    return 'Error ' . $e;
  }*/

}

function findByName () {
  $name = isset($_GET['name']) ? $_GET['name'] : '';

  if ($name === '') {
    header("HTTP/1.0 400 Bad Request");
    return 'No mobile found';
  }

  $data = $GLOBALS['data'];
  for ($i = 0; $i < count($data); $i += 1) {
    $row = $data[$i];

    if (strpos(strtolower($row['name']), strtolower($name)) !== false) {
      return $row;
    }
  }

  //try {
  //  $sql = "SELECT * FROM phones where name = " . mysql_escape_string($name);
  //  $result = DB::query($sql);
  //  return $result;
  //} catch(MeekroDBException $e) {
  //  header("HTTP/1.0 400 Bad Request");
  //  return 'Error ' . $e;
  //}

}

function findById () {
  $id = isset($_GET['id']) ? $_GET['id'] : '';

  if ($id === '') {
    header("HTTP/1.0 400 Bad Request");
    return 'No mobile found';
  }

  $data = $GLOBALS['data'];
  for ($i = 0; $i < count($data); $i += 1) {
    $row = $data[$i];

    if ($row['id'] === intval($id)) {
      return $row;
    }
  }

  //try {
  //  $sql = "SELECT * FROM phones where id = " . intval($id);
  //  $result = DB::query($sql);
  //  return $result;
  //} catch(MeekroDBException $e) {
  //  header("HTTP/1.0 400 Bad Request");
  //  return 'Error ' . $e;
  //}

}

function findAllPhones ($used) {
  $result = [];

  $data = $GLOBALS['data'];

  if (!isset($used)) {
    return $data;

    //try {
    //  $sql = "SELECT * FROM phones;"
    //  $result = DB::query($sql);
    //  return $result;
    //} catch(MeekroDBException $e) {
    //  header("HTTP/1.0 400 Bad Request");
    //  return 'Error ' . $e;
    //}
  }

  for ($i = 0; $i < count($data); $i += 1) {
    $row = $data[$i];
    if ($row['used'] === $used && $row['visible'] === 1) {
      $result[] = $row;
    }
  }

  return $result;

  //try {
  //  $sql = "SELECT * FROM phones where visible = " . intval($used);
  //  $result = DB::query($sql);
  //  return $result;
  //} catch(MeekroDBException $e) {
  //  header("HTTP/1.0 400 Bad Request");
  //  return 'Error ' . $e;
  //}

}

function deleteById ($request) {
  $id = $request->id;
  return 'Deleted ' . $id;

//  try{
//		$sql = 'UPDATE `phones` SET `visible` = 0 WHERE id=' . intval($id);
//		$result = DB::query($sql);
//		return 'Deleted ' . $id;
//	} catch(MeekroDBException $e) {
//    header("HTTP/1.0 400 Bad Request");
//    return 'Error ' . $e;
//  }

}

function activateById ($request) {
  $id = $request->id;

  return 'Activated ' . $id;

//  try{
//		$sql = 'UPDATE `phones` SET `visible` = 1 WHERE id=' . intval($id);
//		$result = DB::query($sql);
//		return 'Activated ' . $id;
//	} catch(MeekroDBException $e) {
//    header("HTTP/1.0 400 Bad Request");
//    return 'Error ' . $e;
//  }

}

function savePhone ($request) {
  $phone = $request->phone;

  $model = $phone->name;
  $desc = $phone->description;
  $price = $phone->price;
  $sim = $phone->sim;
  $size = $phone->size;
  $weight = $phone->weight;
  $cardSlot = $phone->cardSlot;
  $nfc = $phone->nfc;
  $cameraF = $phone->cameraF;
  $cameraB = $phone->cameraB;
  $video = $phone->video;
  $os = $phone->os;
  $cpu = $phone->cpu;
  $gps = $phone->gps;
  $internal = $phone->internal;
  $gprs = $phone->gprs;
  $wlan = $phone->wlan;
  $used = (($phone->used === 'true') ? 1 : 0);
  $pictures = $phone->pictures;
  $pictureNames = array();

  for ($i = 0, $len = count($pictures); $i < $len; $i += 1) {
    $src = $pictures[$i]->src;
    $pictureName = $pictures[$i]->name;
    $pictureNames[] = $pictureName;

    if (strpos(strtolower($src), 'uploads') !== false) {
      continue;
    }

    list($type, $src) = explode(';', $src);
    list(, $src)      = explode(',', $src);
    $src = base64_decode($src);
    $srcPath = '../app/uploads/' . $pictureName;
    $srcPathSmall = '../app/uploads/small/' . $pictureName;

    file_put_contents($srcPath, $src);

    $tmp = resize(1366, $srcPath);
		$tmp_small = resize(250, $srcPath);

    imagejpeg($tmp, $srcPath, 100);
		imagejpeg($tmp_small, $srcPathSmall, 100);
  }

  if (isset($phone->id)) {
    $id = $phone->id;
    //TODO update
  //  DB::update('phones', array(
  //		'name' => $model,
  //		'description' => $desc,
  //		'price' => $price,
  //		'views' => 0,
  //		'used' => $used,
  //		'sim' => $sim,
  //		'size' => $size,
  //		'weight' => $weight,
  //		'cardSlot' => $cardSlot,
  //		'nfc' => $nfc,
  //		'cameraF' => $cameraF,
  //		'cameraB' => $cameraB,
  //		'video' => $video,
  //		'os' => $os,
  //		'cpu' => $cpu,
  //		'gps' => $gps,
  //		'internal' => $internal,
  //		'gprs' => $gprs,
  //		'wlan' => $wlan,
  //		'pictures' => join(';', $pictureNames)
  //	), "id=%i", $id);
  } else {
    $id = 'just added id';
  //TODO insert new
  //	try{
  //    DB::insert('phones', array(
  //        'name' => $model,
  //        'description' => $desc,
  //        'price' => $price,
  //        'views' => 0,
  //        'used' => $used,
  //        'sim' => $sim,
  //        'size' => $size,
  //        'weight' => $weight,
  //        'cardSlot' => $cardSlot,
  //        'nfc' => $nfc,
  //        'cameraF' => $cameraF,
  //        'cameraB' => $cameraB,
  //        'video' => $video,
  //        'os' => $os,
  //        'cpu' => $cpu,
  //        'gps' => $gps,
  //        'internal' => $internal,
  //        'gprs' => $gprs,
  //        'wlan' => $wlan,
  //        'pictures' => join(';', $pictureNames)
  //    ));
  //    return 'Saved ' . $id;
  //	} catch(MeekroDBException $e) {
  //    header("HTTP/1.0 400 Bad Request");
  //    return 'Error ' . $e;
  //  }
  }

  return 'Updated ' . $id;
}

function resize($newWidth, $uploadedfile){
	$src = imagecreatefromjpeg($uploadedfile);
	list($width, $height) = getimagesize($uploadedfile);
	$optimalWidth = $newWidth;
	$ratio = $height / $width;
  $optimalHeight = $newWidth * $ratio;
  $tmp = imagecreatetruecolor($optimalWidth, $optimalHeight);
  imagecopyresampled($tmp, $src, 0, 0, 0, 0, $optimalWidth, $optimalHeight, $width, $height);
  return $tmp;
}

function connect() {
	DB::$host = '';
	DB::$user = '';
	DB::$password = '';
	DB::$dbName = '';
}

echo json_encode($result);
