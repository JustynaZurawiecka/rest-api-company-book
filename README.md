Create new project 

Install express and create package.json
yarn add express@4.17.1
yarn init

add file server.js with the content:
const express = require('express');

const app = express();

const express = require('express');

const app = express();

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});

Install Nodemon
yarn global add nodemon