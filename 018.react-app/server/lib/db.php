<?php

class DB {
  private $host = 'localhost';
  private $user = 'root';
  private $password = 'root';
  private $db = 'test_db';
  private $port = 3306;
  private $mysqli;

  public function __construct() {
    $this->mysqli = new mysqli(
      $this->host,
      $this->user,
      $this->password,
      $this->db
    );

    if ($this->mysqli->connect_error) {
      echo $this->mysqli->connect_error;
      exit();
    } else {
      $this->mysqli->set_charset("utf8");
    }
  }

  public function query($sql) {
    return $this->mysqli->query($sql);
  }

  public function close() {
    $this->mysqli->close();
  }
}