import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config'

import methodOverride from 'method-override';
import morgan from 'morgan';
import restful from 'node-restful';
const mongoose = restful.mongoose;

import { questionSchema, connect } from './model';

const port = process.env.PORT || 8081;


const app = express()

// 静态文件
app.use(express.static('./server/static/'))
app.use(express.static('./client/dist/'))

app.use(cors())

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());



mongoose.connect(config.dbUri);

var Question = app.question = restful.model('question', questionSchema)
    .methods(['get', 'post', 'put', 'delete']);

Question.register(app, '/api/questions');

app.listen(port)
console.log("server started on port " + port);








