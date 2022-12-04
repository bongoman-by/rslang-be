const { OK } = require('http-status-codes');
const router = require('express').Router();

const seedService = require('./seed.service');

router.route('/').get(async (_req, res) => {
  const words = await seedService.seed();
  res.status(OK).send(`${words.length} words uploaded to mongo DB`);
});

module.exports = router;
