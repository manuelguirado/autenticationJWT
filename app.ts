
import express from 'express';
import bodyParser from 'body-parser';
import authRouter from './routes/auth';
import profileRouter from './routes/profile';

import path from 'path';
//create a express app
const app = express();
app.use(express.static(path.join(__dirname, '/pages')));
//set the middleware
app.use(bodyParser.json());
//set the routes 
app.use('/login', authRouter);
app.use('/profile', profileRouter);

//listen the port 3000
app.listen(3000, () => {
    console.log('Server started on port http://localhost:3000');
});
