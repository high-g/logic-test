<?php
require(__DIR__.'/lib/db.php');

$sql = 'SELECT * FROM member';

$db = new DB();
$result = $db->query($sql);
$db->close();

$return_array = [];
if($result){
  while($row = $result->fetch_assoc()) {
    $return_array[] = $row;
  }
}

header('Content-type: application/json; charset= UTF-8');
echo json_encode($return_array);

