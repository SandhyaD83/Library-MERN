const Author = require('../models/author.js');
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
exports.updateAuthor = async (req, res) => {

    let upfirstName = req.params.firstname;
    let uplastName = req.body.lastName;
    let upbooks = req.body.books;

    Author.findOneAndUpdate({ firstName: upfirstName }, {
        $set: {
            firstName: upfirstName
            , lastName: uplastName, books: upbooks
        }
    }, { new: true }, (err, data) => {
        if (err) {
            res.send(Error)
        } else {
            if (data == null) {
                res.send("This author is not available")
            } else {
                res.send(data)
            }
        }

    })
}
exports.deleteAuthor = async (req, res) => {
    let delname = req.params.firstname;
    Author.findOneAndDelete(({ firstname: delname }), function (err, data) {
        res.send(`${data} deleted`)
    })
}