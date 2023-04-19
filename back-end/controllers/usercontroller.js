const User = require('../models/user.js');
exports.createUser = async (req, res) => {
    User.create(req.body,
        (err, data) => {
            console.log(data)
            res.json(data);
        })
}

exports.getUsers = async (req, res) => {
    User.find({}, (error, allusers) => {
        const users = allusers.map(user => ({
            name: user.name,

            password: user.password
        }));

        res.send({
            users
        });
    })
}
exports.updateUser = async (req, res) => {

    let upname = req.params.name;

    let uppwd = req.body.password;

    User.findOneAndUpdate({ name: upname }, {
        $set: {
            name: upname
            , password: uppwd
        }
    }, { new: true }, (err, data) => {
        if (err) {
            res.send(Error)
        } else {
            if (data == null) {
                res.send("This user is not available")
            } else {
                res.send(data)
            }
        }

    })
}
exports.deleteUser = async (req, res) => {
    let delname = req.params.name;
    User.findOneAndDelete(({ name: delname }), function (err, data) {
        res.send(`${data} deleted`)
    })
}