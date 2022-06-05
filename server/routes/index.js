const Router = require('express');
const router = new Router()
const qual_t = require('./qual_t')
const main_t = require('./main_t')
const totalData = require('./totalData')



router.use('/qual_t', qual_t)
router.use('/main_t', main_t)
router.use('/totalData', totalData)


module.exports = router