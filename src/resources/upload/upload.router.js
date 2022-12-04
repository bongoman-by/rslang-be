const { OK } = require('http-status-codes');
const router = require('express').Router();

const uploadService = require('./upload.service');

router.route('/').post(async (_req, res) => {
  uploadService.post();
  res.status(OK).send('Files are uploading...');
});

router.route('/').get(async (_req, res) => {
  uploadService.get();
  res.status(OK).send('Files are checking...');
});

module.exports = router;
