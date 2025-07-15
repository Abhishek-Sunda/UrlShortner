const Express  = require('express')
const router   = Express.Router();
const {GnrtNewShortUrl} = require('../Controllers/UrlController');

router.post("/",GnrtNewShortUrl)

module.exports = router;