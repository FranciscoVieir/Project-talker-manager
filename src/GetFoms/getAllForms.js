const { readFile } = require('fs').promises;
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

module.exports = { getAllTalkers, getById };