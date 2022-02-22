const {Router} = require('express')
const router = Router ()

router.get('/hello', (req, res) => res.send('helloooo'))

module.exports = router