const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("You are on the home page")
});

router.get('/post', (req, res) => {
    res.send("You are now on the post page")
});

export default router;