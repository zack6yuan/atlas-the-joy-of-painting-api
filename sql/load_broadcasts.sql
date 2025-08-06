INSERT IGNORE INTO broadcasts (title, air_date)
VALUES
    ("A Walk in the Woods", STR_TO_DATE('January 11, 1983', '%M %d, %Y')),
    ("Mount McKinley", STR_TO_DATE('January 11, 1983',  '%M %d, %Y')),
    ("Ebony Sunset", STR_TO_DATE('January 18, 1983',  '%M %d, %Y'));