const express = require('express');
const router = express.Router();

const SeatController = require('../controllers/seat.controller');

router.get('/seats', SeatController.getAll);
router.get('/seats/:id', SeatController.getOne);
router.post('/seats', SeatController.insertOne);
router.put('/seats/:id', SeatController.updateOne);
router.delete('/seats/:id', SeatController.deleteOne);

module.exports = router;
