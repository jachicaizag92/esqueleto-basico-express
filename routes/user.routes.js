const { Router } = require('express');
const { usrGet, usrPut, usrPost, usrDelete } = require('../controllers/user.controllers');

const router = Router();

router.get('/rest', usrGet)

router.put('/rest', usrPut)

router.post('/rest', usrPost)

router.delete('/rest', usrDelete)




module.exports = router;