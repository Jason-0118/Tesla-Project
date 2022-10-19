const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        res.json({
            status: 200,
            message: 'Get data has successfully'
        });
    }catch (err) {
        console.log(err)
        return res.status(500).send("server error")
    }
})