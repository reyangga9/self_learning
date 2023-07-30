const express = require('express')


const router = express.Router()


router.get('/api',(req,res)=>{
    res.json({"users":["UserOne","UserTwo","UserThree","UserFour"]})
})



module.exports = router