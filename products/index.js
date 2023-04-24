import express from "express";
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// routes
import productRoutes from './routes/productRoute.js'

app.use('/', productRoutes);

app.listen(process.env.PORT, () => {
    console.log('server is listening at the port 3001');
})