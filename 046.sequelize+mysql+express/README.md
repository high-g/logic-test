  mysql.server start
  mysql -uroot < config/db.sql

  +-----------+--------------+------+-----+---------+----------------+
  | Field     | Type         | Null | Key | Default | Extra          |
  +-----------+--------------+------+-----+---------+----------------+
  | id        | int(11)      | NO   | PRI | NULL    | auto_increment |
  | name      | varchar(255) | YES  |     | NULL    |                |
  | createdAt | datetime     | NO   |     | NULL    |                |
  | updatedAt | datetime     | NO   |     | NULL    |                |
  +-----------+--------------+------+-----+---------+----------------+