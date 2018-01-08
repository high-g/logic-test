<?php
$host = 'localhost';
$user = 'root';
$password = 'root';
$db = 'test_db';
$port = 3306;

$id = $_POST['data_id'];

// DB接続
$mysqli = new mysqli($host, $user, $password, $db);
if ($mysqli->connect_error) {
  echo $mysqli->connect_error;
  exit();
} else {
  $mysqli->set_charset("utf8");
}

// DB処理
$sql = 'delete from member where ';

$res = $mysqli->query($sql);

$mysqli->close();

header('Content-type: application/json; charset= UTF-8');
echo json_encode($res);
