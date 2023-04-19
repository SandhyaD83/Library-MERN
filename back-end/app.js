require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bookrouter = require("./routes/bookrouter.js")
const authorrouter = require("./routes/authorrouter.js")
const userrouter = require("./routes/userrouter.js")
const app = express();
const cors = require('cors');

app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = 3000
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
app.use("/books", bookrouter)
app.use("/users", userrouter)
app.use("/authors", authorrouter)

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