const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bookInstanceSchema = new Schema({
    name: { type: String, required: true },
    status: { type: String, required: true }
});


const BookStatus = mongoose.model("BookStatus", bookInstanceSchema);

module.exports = BookStatus;