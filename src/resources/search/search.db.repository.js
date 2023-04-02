const Word = require('../words/word.model');

const search = async term => {
  const words = await Word.find({ $text: { $search: term } });
  return words;
};

module.exports = { search };
