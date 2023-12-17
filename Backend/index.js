import express from 'express'
import authRoutes from "./Routes/auth.js"
// import userRoutes from "./Routes/user.js"
const PORT = process.env.PORT || 8000
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
const app = express()


const url = `mongodb+srv://malikmurfad361:nB92DPE3VGXWB9Zp@cluster0.v4jtwiv.mongodb.net/`


app.use(cors());
dotenv.config()

const connect = () => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => {
            console.log(`connected to DB`);
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};


app.use(express.json())
app.use("/api/auth", authRoutes)
// app.use("/api/users", userRoutes)


app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success : false,
        status,
        message,
    })

})



// app.get('/api/user', (req, res) => {
//     const user = {
//         id: Date.now(),
//         name: 'murfad',
//         batch: '09',
//         course: 'web and app development',
//         shift: '9 to 11 (AM)'
//     }
//     res.send(user)
// })

app.listen(PORT, () => {
    connect()
    console.log(`server is running on port ${PORT}`);
})