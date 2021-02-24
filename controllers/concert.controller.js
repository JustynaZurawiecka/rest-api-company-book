const Concert = require('../models/concert.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Concert.find());
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getOne = async (req, res) => {
    try {
        const con = await Concert.findById(req.params.id);
        if (!con) res.status(404).json({ message: 'Not found' });
        else res.json(con);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.insertOne = async (req, res) => {
    try {
        const { performer, genre, price, day, image } = req.body;
        const newConcert = new Concert({ performer: performer, genre: genre, price: price, day: day, image: image });
        await newConcert.save();
        res.json({ message: 'OK' });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.updateOne = async (req, res) => {
    const { performer, genre, price, day, image } = req.body;
    try {
        const con = await (Concert.findById(req.params.id));
        //below we check if element with the id from request exists and if yes server returns it and if not returns 404 Not found
        if (con) {
            await Concert.updateOne({ _id: req.params.id }, { $set: { performer: performer, genre: genre, price: price, day: day, image: image } });
            res.json({ message: 'OK' });
            res.json(con);
        }
        else res.status(404).json({ message: err });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.deleteOne = async (req, res) => {
    try {
        const con = await Concert.findById(req.params.id);
        if (con) {
            await Concert.deleteOne({ _id: req.params.id });
            res.json({ message: 'OK' });
            res.json(con)
        }
        else res.status(404).json({ message: 'Not found' });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};
