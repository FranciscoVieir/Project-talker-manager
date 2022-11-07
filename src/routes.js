const { Router } = require('express');
const { validationLogin } = require('./Middlewares/validationLogin');
const { getAllTalkers, getById } = require('./GetFoms/getAllForms');

const router = Router();

router.get('/talker', async (_request, response) => {
  const talkers = await getAllTalkers();
  if (talkers) {
    response.status(200).json(talkers);
  }
});

router.get('/talker/:id', async (request, response) => {
  const { id } = request.params;
  const talkers = await getById(id);

  if (!talkers) {
    response.status(404).send({ message: 'Pessoa palestrante não encontrada' });
    // console.log('nao encontrado');
  }
  response.status(200).json(talkers);
});

router.post('/login', validationLogin);

module.exports = router;