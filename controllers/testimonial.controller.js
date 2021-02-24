const Testimonial = require('../models/testimonial.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Testimonial.find());
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getOne = async (req, res) => {
    try {
        const tes = await Testimonial.findById(req.params.id);
        if (!tes) res.status(404).json({ message: 'Not found' });
        else res.json(tes);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getRandom = async (req, res) => {
    try {
        const count = await Testimonial.countDocuments();
        const rand = Math.floor(Math.random() * count);
        const tes = await Testimonial.findOne().skip(rand);
        if (!tes) res.status(404).json({ message: 'Not found' });
        else res.json(tes);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.insertOne = async (req, res) => {
    try {
        const { author, text } = req.body;
        const newTestimonial = new Testimonial({ author: author, text: text });
        await newTestimonial.save();
        res.json({ message: 'OK' });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.updateOne = async (req, res) => {
    const { author, text } = req.body;
    try {
        const tes = await (Testimonial.findById(req.params.id));
        //below we check if element with the id from request exists and if yes server returns it and if not returns 404 Not found
        if (tes) {
            await Testimonial.updateOne({ _id: req.params.id }, { $set: { author: author, text: text } });
            res.json({ message: 'OK' });
            res.json(tes);
        }
        else res.status(404).json({ message: err });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.deleteOne = async (req, res) => {
    try {
        const tes = await Testimonial.findById(req.params.id);
        if (tes) {
            await Testimonial.deleteOne({ _id: req.params.id });
            res.json({ message: 'OK' });
            res.json(tes)
        }
        else res.status(404).json({ message: 'Not found' });
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};