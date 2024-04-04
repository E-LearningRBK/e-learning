const express = require('express')
const router = express.Router()



const {add} = require('../controllers/payment')


const isUserAuthenticated = require('../middlewares/isUserAuthenticated');

router.post('/add',add)


module.exports = router