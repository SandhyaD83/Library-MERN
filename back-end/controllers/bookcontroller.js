const Book = require('../models/book.js')
const Author = require('../models/author.js')
exports.getBooks = async (req, res) => {
    Book.find({}, (error, allBooks) => {
        res.send({
            allBooks
        })
    })
}
exports.createAuthor = async (req, res) => {
    Author.create([{
        firstName: 'Philip',
        lastName: 'Roth'
    },
    {
        firstName: 'Elwyn Brooks',
        lastName: 'White'
    },
    {
        firstName: 'Peter ',
        lastName: 'S. Beagle'
    },
    ])
}
exports.createBooks = async (req, res) => {
    Book.create([
        {
            name: 'Letting Go',
            author: 'Philip Roth',
            image: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Letting_Go_%28novel%29_1st_edition_cover.jpg',
            desc: `The first full-length novel from one of the most renowned writers of the twentieth century, the Pulitzer Prize winning author of American Pastoral, tells the story of a mid-century America and offers “further proof of Mr. Roth's astonishing talent…. Letting Go seethes with life” (The New York Times).`,
            price: '$12.00',
            available: true
        },
        {
            name: "Charlotte's Web",
            author: 'E. B. White',
            image: 'https://embed.cdn.pais.scholastic.com/v1/channels/tso/products/identifiers/isbn/9780590302715/primary/renditions/700',
            desc: `This is the story of a little girl named Fern who loved a little pig named Wilbur and of Wilbur's dear friend, Charlotte A. Cavatica, a beautiful large grey spider. With the unlikely help of Templeton the rat, and a wonderfully clever plan of her own, Charlotte saves the life of Wilbur, who by this time has grown up to be quite a pig. A time-honoured classic favourite.`,
            price: '$10.00',
            available: true
        },
        {
            name: 'The Last Unicorn',
            author: 'Peter S. Beagle',
            image: 'https://epiloguebookcafe.com/wp-content/uploads/2020/03/last-unicorns.jpg',
            desc: `The unicorn had lived since before memory in a forest where death could touch nothing. Maidens who caught a glimpse of her glory were blessed by enchantment they would never forget. But outside her wondrous realm, dark whispers and rumours carried a message she could not ignore: "Unicorns are gone from the world."`,
            price: '$15.00',
            available: false
        }
    ], (err, data) => {
        res.redirect('/books');
    })
}
