const Book = require('../models/book.js')
const Author = require('../models/author.js')
exports.getBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({}).populate('author').exec();
        const books = allBooks.map(book => ({
            name: book.name,
            author: book.author,
            image: book.image,
            desc: book.desc,
            price: book.price,
            available: book.available
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
    const authors = await Author.find({})
    authors.find(author => author.books.includes('Letting Go'));
    Book.create([
        {
            name: 'Letting Go',
            author: authors.find(author => author.books.includes('Letting Go'))._id,
            image: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Letting_Go_%28novel%29_1st_edition_cover.jpg',
            desc: `The first full-length novel from one of the most renowned writers of the twentieth century, the Pulitzer Prize winning author of American Pastoral, tells the story of a mid-century America and offers “further proof of Mr. Roth's astonishing talent…. Letting Go seethes with life” (The New York Times).`,
            price: '$12.00',
            available: true
        },
        {
            name: "Charlotte's Web",
            author: authors.find(author => author.books.includes("Charlotte's Web"))._id,
            image: 'https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9780590302715/primary/renditions/700',
            desc: `This is the story of a little girl named Fern who loved a little pig named Wilbur and of Wilbur's dear friend, Charlotte A. Cavatica, a beautiful large grey spider. With the unlikely help of Templeton the rat, and a wonderfully clever plan of her own, Charlotte saves the life of Wilbur, who by this time has grown up to be quite a pig. A time-honoured classic favourite.`,
            price: '$10.00',
            available: true
        },
        {
            name: 'The Last Unicorn',
            author: authors.find(author => author.books.includes('The Last Unicorn'))._id,
            image: 'https://epiloguebookcafe.com/wp-content/uploads/2020/03/last-unicorns.jpg',
            desc: `The unicorn had lived since before memory in a forest where death could touch nothing. Maidens who caught a glimpse of her glory were blessed by enchantment they would never forget. But outside her wondrous realm, dark whispers and rumours carried a message she could not ignore: "Unicorns are gone from the world."`,
            price: '$15.00',
            available: false
        }
    ], (err, data) => {
        res.redirect('/books');
    })
}
