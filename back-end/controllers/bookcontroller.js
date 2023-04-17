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

    const data = new Book(
        {
            name: req.body.name,
            image: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Letting_Go_%28novel%29_1st_edition_cover.jpg',
            desc: `The first full-length novel from one of the most renowned writers of the twentieth century, the Pulitzer Prize winning author of American Pastoral, tells the story of a mid-century America and offers “further proof of Mr. Roth's astonishing talent…. Letting Go seethes with life” (The New York Times).`,
            price: '$12.00',
            copies: 4
        },
    );
    console.log(data)
    const val = await data.save()
    res.json(val)
}
