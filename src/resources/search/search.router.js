const { OK } = require('http-status-codes');
const router = require('express').Router();

const searchService = require('./search.service');

router.route('/:term').get(async (req, res) => {
  const words = await searchService.search(req.params.term);
  res.status(OK).send(words.map(word => word.toResponse()));
});

module.exports = router;
