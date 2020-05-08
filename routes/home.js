const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Welcome to the blog post API :)")
});

router.get('/post', (req, res) => {
    res.send("You are now on the post page")
});

export default router;