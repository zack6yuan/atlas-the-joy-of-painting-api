-- CREATES A DATABASE TO FILTER EPISODES BY COLOR, THEME, AND LENGTH
CREATE DATABASE IF NOT EXISTS ETL_JOY

CREATE TABLE IF NOT EXISTS colors (
    painting_index INT PRIMARY KEY,
    img_src VARCHAR(100),
    painting_title VARCHAR(50),
    season INT,
    episode INT,
    num_colors INT,
    youtube_src VARCHAR(100),
    colors
)

CREATE TABLE subject_matter (

)

CREATE TABLE broadcasts (
    
)
