LOAD DATA LOCAL INFILE '/Users/zackyuan/atlas-the-joy-of-painting-api-3/data/colors.csv'
INTO TABLE colors
IGNORE 1 LINES
(color_id, painting_index, painting_title, num_colors);
