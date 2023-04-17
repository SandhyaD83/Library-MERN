const Book = require('../models/book.js')
const Author = require('../models/author.js');
const BookStatus = require('../models/bookInstance.js');

exports.getBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({})

        const books = allBooks.map(book => ({
            name: book.name,
            // author: book.author,
            image: book.image,
            desc: book.desc,
            price: book.price,
            // available: book.available
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
exports.createStatus = async (req, res) => {
    BookStatus.create([{
        name: "Letting Go",
        status: 2
    },
    {
        name: "Charlotte's Web",
        status: 3
    },
    {
        name: "The Last Unicorn",
        status: 0
    },
    ])
}
exports.createAuthor = async (req, res) => {
    Author.create([{
        firstName: 'Philip',
        lastName: 'Roth',
        books: ['Letting Go', 'The Counterlife']
    },
    {
        firstName: 'Elwyn Brooks',
        lastName: 'White',
        books: ['Stuart Little', "Charlotte's Web"]
    },
    {
        firstName: 'Peter ',
        lastName: 'S. Beagle',
        books: ['The Last Unicorn', 'The Way Home']
    },
    ], (err, data) => {
        res.redirect('/books/authors');
    })
}

exports.createBooks = async (req, res) => {
    console.log(req.body)
    const data = new Book(
        {
            name: req.body.name,
            image: req.body.image,
            desc: req.body.desc,
            price: req.body.price
        });
    console.log(data)
    const val = await data.save()
    res.json(val)
}
