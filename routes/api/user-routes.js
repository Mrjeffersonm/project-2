const router = require('express').Router();
const userController = require('../../controllers/user-controller')
// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  userController.getUser(req, res)
});

router.get('/:id', async (req, res) => {
  userController.getUserId(req, res)
});

router.post('/', async (req, res) => {
  userController.createUser(req, res)
});

router.put('/:id', async (req, res) => {
  userController.updateUser(req, res)
});

router.delete('/:id', async (req, res) => {
  userController.deleteUser(req, res)
});

module.exports = router;
