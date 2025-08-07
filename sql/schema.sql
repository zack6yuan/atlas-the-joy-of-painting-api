-- Connect to MySQL: mysql -u zackyuan -p ETL_JOY --socket=/opt/homebrew/var/mysql/mysql.sock

-- Make schema changes: mysql -u zackyuan -p ETL_JOY --socket=/opt/homebrew/var/mysql/mysql.sock < (FILE NAME)

CREATE DATABASE IF NOT EXISTS ETL_JOY;

USE ETL_JOY;

DROP TABLE IF EXISTS broadcasts;
DROP TABLE IF EXISTS subject_matter;
DROP TABLE IF EXISTS colors;

CREATE TABLE IF NOT EXISTS broadcasts (
    title VARCHAR(255) NOT NULL PRIMARY KEY,
    air_date DATE NOT NULL,
    air_year INT NOT NULL
);

CREATE TABLE IF NOT EXISTS subject_matter (
    episode VARCHAR(255) NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS colors (
    color_id INT NOT NULL AUTO INCREMENT PRIMARY KEY,
    painting_index INT NOT NULL,
    painting_title VARCHAR(255) NOT NULL,
    num_colors INT NOT NULL
);
