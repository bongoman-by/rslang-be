const wordRepo = require('./word.db.repository');

const getForUpload = async conditions => wordRepo.getForUpload(conditions);

const getAll = async conditions => wordRepo.getAll(conditions);

const get = async wordId => {
  const word = await wordRepo.get(wordId);

  return word;
};

module.exports = { getAll, get, getForUpload };
