import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import Post from './api/models/Post';
import routes from './api/routes/postRoutes';

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cream');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);

console.log(`Cream RESTful API server started on: ${port}`);