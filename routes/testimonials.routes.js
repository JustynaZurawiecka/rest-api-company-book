const express = require('express');
const router = express.Router();

const TestimonialController = require('../controllers/testimonial.controller');

router.get('/testimonials', TestimonialController.getAll);
router.get('/testimonials/random', TestimonialController.getRandom);
router.get('/testimonials/:id', TestimonialController.getOne);
router.post('/testimonials', TestimonialController.insertOne);
router.put('/testimonials/:id', TestimonialController.updateOne);
router.delete('/testimonials/:id', TestimonialController.deleteOne);


module.exports = router;
