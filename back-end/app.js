require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const router = require("./routes/router.js")
const app = express();
const cors = require('cors');

app.use(cors());

const port = 3000
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use("/books", router)
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});
app.listen(port, () => {
    console.log(`listening to port ${port}`);
})