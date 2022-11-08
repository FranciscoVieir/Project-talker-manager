const { Router } = require('express');
const { validationLogin } = require('./Middlewares/validationLogin');
const { vadalitonAuthorization, validationName,
  validationAge,
  validationTalk,
  validationWatchedAt,
  validationRate } = require('./Middlewares/talker');
const { getAllTalkers, getById, addTalker } = require('./GetFoms/getAllForms');

const router = Router();

router.get('/talker', async (_request, response) => {
  const talkers = await getAllTalkers();
  if (talkers) {
    return response.status(200).json(talkers);
  }
});

router.get('/talker/:id', async (request, response) => {
  const { id } = request.params;
  const talkers = await getById(id);

  if (!talkers) {
    return response.status(404).send({ message: 'Pessoa palestrante não encontrada' });
    // console.log('nao encontrado');
  }
  return response.status(200).json(talkers);
});

router.post('/login', validationLogin);

router.post('/talker', vadalitonAuthorization,
  validationName,
  validationAge,
  validationTalk,
  validationWatchedAt,
  validationRate, addTalker);

module.exports = router;