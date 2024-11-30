import { express } from 'express';
import bodyParser from 'body-parser';
import authRouter from './routes/auth';
import profileRouter from './routes/profile';
//create a express app
const app = express();
//set the middleware
app.use(bodyParser.json());
//set the routes 
app.use('/auth', authRouter);
app.use('/profile', profileRouter);
//listen the port 3000
app.listen(3000, () => {
    console.log('Server started on port http://localhost:3000');
});
