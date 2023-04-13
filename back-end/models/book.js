const mongoose = require('mongoose');
// const mongodb = require('mongodb');
// const ObjectId = mongodb.ObjectId
const Schema = mongoose.Schema;
const bookSchema = new Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    // authorId: {
    //     type: ObjectId,
    //     ref: "Author",
    //     index: true,
    //     required: true,
    // },
    image: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: String, required: true },
    available: { type: Boolean }
});


const Book = mongoose.model("Book", bookSchema);

module.exports = Book;