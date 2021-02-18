1) Database: Postgres - A relational database as data is structured. Run following command to create database
   a) create database assignment;
   b) create user assignment with encrypted password 'password';
   grant all privileges on database assignment to assignment;
2) Run npm install from root folder.
   
3) Run "npm start" to run the server. This will create tables Users and Post in Database if tables are not present.
4) Run node scripts/typecode.js from root folder. This will fetch users and posts data from typecode and save in the User and Post table.
5) Type "http://localhost:3000/users/" in browser to view user list.
6) Type "http://localhost:3000/users/<user-id>/posts" to load posts related to user. 
7) Example to see all the post by user id 7 type - "http://localhost:3000/users/7/posts"