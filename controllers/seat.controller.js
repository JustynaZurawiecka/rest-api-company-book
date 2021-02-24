const Seat = require('../models/seat.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Seat.find());
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getOne = async (req, res) => {
    try {
        const seat = await Seat.findById(req.params.id);
        if (!seat) res.status(404).json({ message: 'Not found' });
        else res.json(seat);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.insertOne = async (req, res) => {
    try {
        const { day, seat, client, email } = req.body;
        const newSeat = new Seat({ day: day, seat: seat, client: client, email: email });
        await newSeat.save();
        res.json({ message: 'OK' });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.updateOne = async (req, res) => {
    try {
        const { performer, genre, price, day, image } = req.body;
        //below we check if element with the id from request exists and if yes server returns it and if not returns 404 Not found
        if (seat) {
            await Seat.updateOne({ _id: req.params.id }, { $set: { day: day, seat: seat, client: client, email: email } });
            res.json({ message: 'OK' });
            res.json(seat);
        }
        else res.status(404).json({ message: err });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.deleteOne = async (req, res) => {
    try {
        const seat = await Seat.findById(req.params.id);
        if (seat) {
            await Seat.deleteOne({ _id: req.params.id });
            res.json({ message: 'OK' });
            res.json(seat)
        }
        else res.status(404).json({ message: 'Not found' });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};
