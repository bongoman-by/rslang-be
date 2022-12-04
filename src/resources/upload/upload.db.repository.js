const wordService = require('../words/word.service');

const post = async conditions => {
  return await wordService.getForUpload(conditions);
};

module.exports = { post };
