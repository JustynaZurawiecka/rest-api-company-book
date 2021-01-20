const express = require('express');
const router = express.Router();
const db = require('./../db');
const  { v1 : uuidv1 } = require('uuid');

router.route('/concerts').get((req, res) => {
    res.json(db.concerts);
});

router.route('/concerts/:id').get((req, res) => {
    let id = db.concerts.find(entry => entry.id == req.params.id);
    res.json(id);
});

router.route('/concerts').post((req, res) => {
    let newEntry = {
        id: uuidv1(),
        performer: req.body.performer,
        genre: req.body.genre,
        price: req.body.price,
        day: req.body.day,
        image: req.body.image,

    }
    db.concerts.push(newEntry);
    res.json( { message: 'OK' });
});

router.route('/concerts/:id').delete((req, res) => {
    db.seats.splice(db.seats.findIndex(id => id == req.params.id),1);
    res.json( { message: 'OK' });
});


router.route('/concerts/:id').put((req, res) => {
    const selectedEntry = db.concerts.find(entry => entry.id == req.params.id);
    const selectedIndex = db.concerts.indexOf(selectedEntry);

    db.concerts[selectedIndex] = {
        ...selectedEntry,
        performer: req.body.performer,
        genre: req.body.genre,
        price: req.body.price,
        day: req.body.day,
        image: req.body.image
    }

    res.json( { message: 'OK' });
});

module.exports = router;
