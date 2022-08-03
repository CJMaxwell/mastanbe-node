import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
})


app.listen(process.env.PORT || 4000, () => console.log(`Server started on port ${process.env.PORT}`))