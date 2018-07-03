<?php
require(__DIR__.'/lib/db.php');

$name = $_POST['member_name'];
$address = $_POST['member_address'];
$birth = $_POST['member_birth'];

$sql = 'insert into member (name, address, birth, ins_date, upd_date) '
     . 'values("'.$name.'", "'.$address.'", "'.$birth.'", now(), now())';

$db = new DB();
$result = $db->query($sql);
$db->close();

header('Content-type: application/json; charset= UTF-8');
echo json_encode($result);
