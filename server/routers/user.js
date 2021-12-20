const express = require('express');
var router = express.Router();
const User = require('../dbs/user')

router.get('/userinfo', (req, res) => {
        res.status(200).json({
            code:1
        })
})



module.exports = router