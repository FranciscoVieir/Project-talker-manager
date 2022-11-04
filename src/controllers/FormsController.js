const FormsRepository = require('../app/repositories/FormsRepository');

class FormsController {
  async index(request, response) {
    const contacts = await FormsRepository.findAll();
    return response.status(200).json(contacts);
  }
}

module.exports = new FormsController();