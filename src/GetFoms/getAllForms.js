const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const pathUsers = path.resolve(__dirname, '..', 'talker.json');

const getAllTalkers = async () => {
  const response = await readFile(pathUsers, 'utf8');
  const users = JSON.parse(response);

  return users;
};

const getById = async (talkerId) => {
  const getByAllId = await getAllTalkers();

  const foundTalkersId = getByAllId.find((talker) => talker.id === Number(talkerId));
  // console.log('talkerId do parametro da func', talkerId);
  // const foundTalkersId = getByAllId.find((talker) => console.log('talkerId do find', talker.id === Number(talkerId)));
  return foundTalkersId;
};

const addTalker = async (request, response) => {
    const talkers = await getAllTalkers();
    const newTalkerId = talkers[talkers.length - 1].id + 1;

    talkers.push({ id: newTalkerId, ...request.body });

    await writeFile(pathUsers, JSON.stringify(talkers));
    return response.status(201).json({ id: newTalkerId, ...request.body });
};

module.exports = { getAllTalkers, getById, addTalker };