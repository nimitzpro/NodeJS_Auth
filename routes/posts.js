const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/User');

router.get('/', verify, async (req,res)=>{
    // res.json({posts:{title:"My first post", description:"Random data you shouldn't access"}});

    const user = await User.findById(req.user._id);
    res.send(user);
    console.log(req.user);
});

module.exports = router;