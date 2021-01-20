const express = require('express');
const router = express.Router();
const db = require('./../db');
const  { v1 : uuidv1 } = require('uuid');

router.route('/seats').get((req, res) => {
    res.json(db.seats);
});

router.route('/seats/:id').get((req, res) => {
    let id = db.seats.find(entry => entry.id == req.params.id);
    res.json(id);
});

router.route('/seats').post((req, res) => {
    let newEntry = {
        id: uuidv1(),
        day: req.body.day,
        seat: req.body.seat,
        client: req.body.client,
        email: req.body.email,
    }
    db.seats.push(newEntry);
    res.json( { message: 'OK' });
});

router.route('/seats/:id').delete((req, res) => {
    db.seats.splice(db.seats.findIndex(id => id == req.params.id),1);
    res.json( { message: 'OK' });
});

router.route('/seats/:id').put((req, res) => {
    const selectedEntry = db.seats.find(entry => entry.id == req.params.id);
    const selectedIndex = db.seats.indexOf(selectedEntry);

    db.seats[selectedIndex] = {
        ...selectedEntry,
        day: req.body.day,
        seat: req.body.seat,
        client: req.body.client,
        email: req.body.email,
    }

    res.json( { message: 'OK' });
});

module.exports = router;
