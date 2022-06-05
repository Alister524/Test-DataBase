const Router = require('express');
const router = new Router()


router.post('/totalData')
router.get('/totalData', (req, res) => {res.json({message: 'All work!!!'})})

module.exports = router