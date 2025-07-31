-- CREATES A DATABASE TO FILTER EPISODES BY COLOR, THEME, AND LENGTH
CREATE DATABASE IF NOT EXISTS ETL_JOY

USE ETL_JOY

CREATE TABLE colors (
    painting_index INT,
    img_src VARCHAR(100),
    painting_title VARCHAR(50),
    season INT,
    episode INT,
    num_colors INT,
    youtube_src VARCHAR(100),
    colors
)

CREATE TABLE subject_matter (
    episode VARCHAR(10),
    title VARCHAR(50)
)

CREATE TABLE broadcasts (
    title VARCHAR(100),
    air_date VARCHAR(50)
)

