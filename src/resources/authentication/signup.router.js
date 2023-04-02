const router = require('express').Router();
const { OK } = require('http-status-codes');

const userService = require('../users/user.service');
const tokenService = require('../token/token.service');

router.route('/').post(async (req, res) => {
  const userEntity = await userService.save(req.body);
  const tokens = await tokenService.getTokens(userEntity._id);

  res.status(OK).json({
    message: 'Created user',
    user: userEntity.toResponse(),
    ...tokens
  });
});

module.exports = router;
