const { Router } = require('express');
const FormsController = require('./controllers/FormsController');

const router = Router();

router.get('/talker', FormsController.index);

module.exports = router;