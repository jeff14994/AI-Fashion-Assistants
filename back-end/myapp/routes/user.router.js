const router = require('express').Router();

const {
  create, getAllUser, getUserByID, modifyUserInfo, deleteUser,
} = require('./user.service');
const { verificationCode, resetPassword } = require('./user.controller');

router.get('/', getAllUser);
router.get('/:id', getUserByID);
router.post('/', create);
router.patch('/', modifyUserInfo);
router.delete('/', deleteUser);
router.post('/sms', verificationCode);
router.post('/email', resetPassword);

module.exports = router;