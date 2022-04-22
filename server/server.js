const express = require('express')


const app = express();
const connectDB = require('./configs/database_config')
require('dotenv').config();
app.use(express.json());

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