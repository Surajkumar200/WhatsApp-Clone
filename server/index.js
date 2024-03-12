import express from 'express';
import dotenv from 'dotenv'
import Connection from './database/db.js';
import Route from './routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
dotenv.config();


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/',Route);

const PORT = process.env.port;
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT,() => console.log(`server is running successfully on PORT ${PORT} `)); 