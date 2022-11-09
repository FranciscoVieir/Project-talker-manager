const vadalitonAuthorization = (request, response, next) => {
  try {
    const { authorization } = request.headers;
    if (!authorization) {
      return response.status(401).json({ message: 'Token não encontrado' });
    }

    if (authorization === '' || authorization.length < 16) {
      return response.status(401).json({ message: 'Token inválido' });
    }
  } catch (err) {
    return err;
  }
  next();
};

const validationName = (request, response, next) => {
  const { name } = request.body;

  if (!name || name === '') {
    return response.status(400).json({ message: 'O campo "name" é obrigatório' });
  }

  if (name.length < 3) {
    return response.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const validationAge = (request, response, next) => {
  const { age } = request.body;
  if (!age || age === '') {
    return response.status(400).json({ message: 'O campo "age" é obrigatório' });
  }

  if (Number(age) <= 18) {
    return response.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const validationTalk = (request, response, next) => {
  const { talk } = request.body;
  if (!talk || talk === '') {
    return response.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  next();
};

const validationWatchedAt = (request, response, next) => {
  const { talk } = request.body;
  const { watchedAt } = talk;
  const dateTest = /^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\d{4}$/.test(watchedAt);

  if (!watchedAt) {
    return response.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }

  if (!dateTest) {
   return response
   .status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const validationRate = (request, response, next) => {
  const { talk } = request.body;
  const { rate } = talk;
  if (typeof rate === 'undefined') {
    return response.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }

  if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
    return response.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  
  next();
};

module.exports = {
  vadalitonAuthorization,
  validationName,
  validationAge,
  validationTalk,
  validationWatchedAt,
  validationRate };