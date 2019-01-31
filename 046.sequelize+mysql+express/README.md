  express app名

  mysql.server start
  mysql -u root < config/db.sql

  +-----------+--------------+------+-----+---------+----------------+
  | Field     | Type         | Null | Key | Default | Extra          |
  +-----------+--------------+------+-----+---------+----------------+
  | id        | int(11)      | NO   | PRI | NULL    | auto_increment |
  | name      | varchar(255) | YES  |     | NULL    |                |
  | createdAt | datetime     | NO   |     | NULL    |                |
  | updatedAt | datetime     | NO   |     | NULL    |                |
  +-----------+--------------+------+-----+---------+----------------+

  mysql -u root -p
  password

  sequelize
  https://qiita.com/y4u0t2a1r0/items/fb7a879cdd2a187bad29
