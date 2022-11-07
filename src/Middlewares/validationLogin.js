const crypto = require('crypto');

const MINIMUN_LENGTH = 6;

const generateCrypto = () => crypto.randomBytes(8).toString('hex');

const validationEmail = (email, response) => {
  const validadtion = /\S+@\S+\.\S+/.test(email);
  // console.log(email);
  if (!email || email === '') {
    return response.status(400).send({ message: 'O campo "email" é obrigatório' });
  }

  if (!validadtion) {
    return response.status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
};

const validationPassword = (password, response) => {
  // console.log(password.length);
  if (!password || password === '') {
    return response.status(400).send({ message: 'O campo "password" é obrigatório' });
  }

  if (password.length <= MINIMUN_LENGTH) {
    return response.status(400).send({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
};

const validationLogin = (request, response, next) => {
  try {
    const { email, password } = request.body;
    validationEmail(email, response);
    validationPassword(password, response);
    return response.status(200).json({ token: generateCrypto() });
  } catch (er) {
    next(er);
  }
};

module.exports = { validationLogin };