const { writeFile } = require('fs').promises;
const path = require('path');
const { getAllTalkers } = require('../GetFoms/getAllForms');

const pathUsers = path.resolve(__dirname, '..', 'talker.json');

const deleteTalker = async (request, response) => {
  const { id } = request.params;

  const talkers = await getAllTalkers();

  const talkerIndex = talkers.findIndex((talker) => Number(talker.id) === Number(id));

  // console.log(talkerIndex, 'talkerIndex');
  talkers.splice(talkerIndex, 1);

  // talkers.push({ id: talkerIndex, ...request.body });
  // console.log(talkers, 'depois do push');

  await writeFile(pathUsers, JSON.stringify(talkers));
  return response.status(204).end();
};

module.exports = { deleteTalker };