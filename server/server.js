const express = require('express')
const app = express();

const connectDB = require('./configs/database_config');
const { authenticateToken } = require('./middleware/auth_middleware');
require('dotenv').config();

const authRouter = require('./routes/auth_route')
const predictionRouter = require('./routes/prediction_route')

app.use(express.json());

app.use('/auth', authRouter)
app.use('/predictions', predictionRouter)

app.get('/', authenticateToken, (req, res) => {
    const u = req.user;
    res.json(u);
})



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening on PORT ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Database connection failed. Exiting now...");
        console.log(error);
        process.exit(1);
    }
}
start()


