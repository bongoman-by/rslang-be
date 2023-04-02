const router = require('express').Router();
const { OK } = require('http-status-codes');

const userService = require('../users/user.service');

router.route('/').post(async (req, res) => {
  const auth = await userService.authenticate(req.body);

  res.status(OK).json({
    message: 'Authenticated',
    ...auth,
    user: auth.user.toResponse()
  });
});

module.exports = router;
