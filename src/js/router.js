const express = require('express');
const router = express.Router();
const { getAllUsers, getOneUser, createNewUser, updateOneUser, deleteOneUser } = require('./index');

router.get('/', getAllUsers)
     .get('/:id', getOneUser)
     .post('/', createNewUser)
     .put('/:id', updateOneUser)
     .delete('/:id', deleteOneUser);

module.exports = router;
