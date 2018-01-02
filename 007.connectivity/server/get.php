<?php
$host = 'localhost';
$user = 'root';
$password = 'root';
$db = 'test_db';
$port = 3306;

// DB接続
$mysqli = new mysqli($host, $user, $password, $db);
if ($mysqli->connect_error) {
  echo $mysqli->connect_error;
  exit();
} else {
  $mysqli->set_charset("utf8");
}

// ここにDB処理いろいろ書く（後述）
$sql = "SELECT * FROM member";
$return_array = [];
if($result = $mysqli->query($sql)){
  while($row = $result->fetch_assoc()) {
    $return_array[] = $row;
  }
}

header('Content-type: application/json; charset= UTF-8');
echo json_encode($return_array);

// DB接続を閉じる
$mysqli->close();
