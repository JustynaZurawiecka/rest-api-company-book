const express = require('express');
const router = express.Router();
const db = require('./../db');
const  { v1 : uuidv1 } = require('uuid');

router.route('/testimonials').get((req, res) => {
    res.json(db.testimonials);
});

router.route('/testimonials/:id').get((req, res) => {
    const id = db.testimonials.find(entry => entry.id == req.params.id);
    res.json(id);
});

router.route('/testimonials/random').get((req, res) => {
    let randomEntry = db.testimonials[Math.floor(Math.random()*db.testimonials.length)];
    res.json(randomEntry);
});

router.route('/testimonials').post((req, res) => {
    let newEntry = {
        id: uuidv1(),
        author: req.body.author,
        text: req.body.text,
    }
    db.testimonials.push(newEntry);
    res.json( { message: 'OK' });
});

router.route('/testimonials/:id').put((req, res) => {
    const selectedEntry = db.testimonials.find(entry => entry.id == req.params.id);
    const selectedIndex = db.testimonials.indexOf(selectedEntry);

    db.testimonials[selectedIndex] = {
        ...selectedEntry,
        author: req.body.author,
        text: req.body.text
    }

    res.json( { message: 'OK' });
});

router.route('/testimonials/:id').delete((req, res) => {
    db.seats.splice(db.seats.findIndex(id => id == req.params.id),1);
    res.json( { message: 'OK' });
});

module.exports = router;
