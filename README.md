Heroku app
https://new-wave-concert.herokuapp.com/

Instructions
Create new project 

Install express and create package.json
```
yarn add express@4.17.1
yarn init
```

add file server.js with the content:
```
const express = require('express');

const app = express();

const express = require('express');

const app = express();

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
```
Install Nodemon
```
yarn global add nodemon
```
Run react frontend app and server

path.../client$ yarn start

path.../rest-api-company-book/client$ yarn start
path.../rest-api-company-book$ start (alias) or nodemon server.js

Import json data to mongo 

```
mongoimport --db NewWaveDB --collection testimonials --drop  --file testimonials.json --jsonArray
```

Import json data to mongodbAtlas 

```
mongoimport --uri "mongodb+srv://justa7:S2foQTFSXdw31UdY@cluster0.kir6w.mongodb.net/NewWaveDB?retryWrites=true&w=majority" --collection seats --drop --file seats.json --jsonArray
```