const ObjectId = require('mongoose').Types.ObjectId;

const Word = require('../words/word.model');
const initialData = require('../../../words/words');

const seed = async () => {
  const words = initialData.words.map(item => {
    item._id = ObjectId.createFromHexString(item._id.$oid);
    return item;
  });
  await Word.deleteMany();
  return Word.insertMany(words);
};

module.exports = { seed };
