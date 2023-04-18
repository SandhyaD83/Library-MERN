const Book = require('../models/book.js')
const Author = require('../models/author.js');
const User = require('../models/user.js');
const { request } = require('express');

exports.getBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({}).populate('author').exec();

        const books = allBooks.map(book => ({
            name: book.name,
            author: book.author,
            image: book.image,
            desc: book.desc,
            price: book.price,
            copies: book.copies
        }));

        res.send({
            books
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ error: 'Error fetching books.' });
    }
}


exports.getAuthors = async (req, res) => {
    Author.find({}, (error, allauthors) => {
        res.send({
            allauthors
        })
    })
}

exports.createAuthor = async (req, res) => {
    Author.create(req.body,
        (err, data) => {
            res.json(data);
        })
}
exports.createUser = async (req, res) => {
    User.create(req.body,
        (err, data) => {
            res.json(data);
        })
}
exports.getUsers = async (req, res) => {
    User.find({}, (error, allusers) => {
        const users = allusers.map(user => ({
            name: user.name,
            email: user.email,
            password: user.password
        }));

        res.send({
            users
        });
    })
}

exports.createBooks = async (req, res) => {
    const authors = await Author.find({})
    Book.create({
        name: req.body.name,
        author: authors.find(author => author.books.includes(req.body.name))._id,
        image: req.body.image,
        desc: req.body.desc,
        price: req.body.price,
        copies: req.body.copies
    }, (err, data) => {
        res.json(data);
    })
    // const data = new Book(
    //     {
    //         name: req.body.name,
    //         author: authors.find(author => author.books.includes(req.body.name))._id,
    //         image: req.body.image,
    //         desc: req.body.desc,
    //         price: req.body.price,
    //         copies: req.body.copies
    //     },
    // );
    // const val = await data.save()



}
exports.updateBook = async (req, res) => {

    let upname = req.params.name;
    let upauthor = req.body.author;
    let updesc = req.body.desc;
    let upprice = req.body.price;
    let upcopies = req.body.copies;
    Book.findOneAndUpdate({ name: upname }, {
        $set: {
            name: upname
            , author: upauthor, desc: updesc, price: upprice, copies: upcopies
        }
    }, { new: true }, (err, data) => {
        if (err) {
            res.send(Error)
        } else {
            if (data == null) {
                res.send("This book is not available")
            } else {
                res.send(data)
            }
        }

    })
}
exports.deleteBook = async (req, res) => {
    let delname = req.params.name;
    Book.findOneAndDelete(({ name: delname }), function (err, data) {
        res.send(`${data} deleted`)
    })
}