const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bookInstanceSchema = new Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    status: { type: String, required: true }
});


const BookStatus = mongoose.model("BookStatus", bookInstanceSchema);

module.exports = BookStatus;