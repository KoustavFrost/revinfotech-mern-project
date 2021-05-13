const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { Data } = require('../model/Data');

router.post(
    '/',
    (req, res) => {
        console.log('req --> ', req.body);

        let newData = new Data({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
            bio: req.body.bio,
            book: req.body.book,
        });

        newData.save((err, docs) => {
            if (!err) res.send(docs);
            else {
                res.status(500).json(err);
            }
        });
    });

router.get('/', (req, res) => {
    Data.find((err, docs) => {
        if (!err) res.send(docs);
        else res.status(500).json(err);
    });
});

module.exports = router;