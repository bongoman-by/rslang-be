/* eslint-disable prettier/prettier */
const Statistics = require('./statistic.model');
const { NOT_FOUND_ERROR, ENTITY_EXISTS } = require('../../errors/appErrors');
const ENTITY_NAME = 'user word';
const MONGO_ENTITY_EXISTS_ERROR_CODE = 11000;

const getAll = async userId => Statistics.find({ userId });

const get = async userId => {
  const statistic = await Statistics.findOne({ userId });
  console.dir({ statistic });
  if (!statistic) {
    throw new NOT_FOUND_ERROR('statistic', `userId: ${userId}`);
  }
  return statistic;
};

const upsert = async (userId, statistic) =>
  Statistics.findOneAndUpdate(
    { userId },
    { $set: statistic },
    { upsert: true, new: true }
  );

const save = async (statistic) => {
  try {
    return await Statistics.create(statistic);
  } catch (err) {
    if (err.code === MONGO_ENTITY_EXISTS_ERROR_CODE) {
      throw new ENTITY_EXISTS(`such ${ENTITY_NAME} already exists`);
    } else {
      throw err;
    }
  }
};

const remove = async userId => Statistics.deleteMany({ userId });

module.exports = { get, upsert, save, remove, getAll };
