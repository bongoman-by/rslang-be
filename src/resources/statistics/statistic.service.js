const statisticRepo = require('./statistic.db.repository');

const getAll = async userId => statisticRepo.getAll(userId);

const get = async userId => statisticRepo.get(userId);

const upsert = async (userId, statistic) =>
  statisticRepo.upsert(userId, { ...statistic, userId });

const save = async (userId, statistic) =>
  statisticRepo.save({ ...statistic, userId });

const remove = async userId => statisticRepo.remove(userId);

module.exports = { getAll, get, upsert, save, remove };
