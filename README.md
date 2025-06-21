

## Development server

To start a local development server, run:


### FOR API SERVER 
```bash

cd Back-End

node server.js
```

### FOR UI


```bash

cd Back-End

ng serve

```

To connect into UI Home pages you need to setup my sql in you system and also create databases in mysql and create username and password because sign up functionality is not handled


Set Up MySQl in Your system and connect it through a terminal

CREATE DATABASE canabil_games;

USE canabil_games;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);


INSERT INTO users (username, password) VALUES ('admin', 'admin');


 host: 'localhost',
user: 'root',
password: 'your_password',
database: 'canabil_games'

update password in the Back-End/src/server.js
