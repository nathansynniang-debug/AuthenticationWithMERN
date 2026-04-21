import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
dotenv.config();
import connectDB from './config/db.js';
import cors from 'cors';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use("/api/users", authRoutes)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
    console.log("App is running on PORT", PORT);
});
})