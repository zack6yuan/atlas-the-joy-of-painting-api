# ETL: The Joy of Painting (Extract, Transform Load)

ETL is the process of taking data from multiple unique sources, modifying them in some way, and then storing them in a centralized database. This is a very common practice when collecting data from systems in order to utilize that data in another system. This data may come in the form of CSV, JSON, XML, API requests with other custom formats, etc - it might even be that you have direct access to several databases with different, but relatable data that you want to be merged into another database in order to gain insight from it in some way.

## Connect to MySQL

```bash
brew services start mysql (MacOS) // Start MySQL

mysql -u (username) -p // Connect to MySQL

USE ETL_JOY; // Select the database

SELECT * FROM (table_name) // Retrieve the needed data
```

## Usage

```javascript
// Enter server Directory
cd server

// Run NodeJS Scripts
server $ node getSubjectMatter.js
server $ node getBroadcasts.js
server $ node getColors.js

// Example output
[
   'color_id',
   'painting_index',
   'img_src',
   'painting_title'
],
[
   '1',
   '282',
   'https://www.twoinchbrush.com/images/painting282.png',
   'A Walk in the Woods'
],
```
### Built by Zack Yuan: [GitHub](https://www.github.com/zack6yuan)