const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bookSchema = new Schema({
    name: { type: String, required: true },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    image: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: String, required: true },
    copies: { type: Number, required: true }
});


const Book = mongoose.model("Book", bookSchema);

module.exports = Book;