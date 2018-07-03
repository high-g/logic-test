<?php
require(__DIR__.'/lib/db.php');

$id = $_POST['data_id'];

$sql = 'delete from member where id="'.$id.'"';

$db = new DB();
$result = $db->query($sql);
$db->close();

header('Content-type: application/json; charset= UTF-8');
echo json_encode($result);
