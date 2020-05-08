import Post from '../models/Post'

const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body);
    let post = {}
    if(req.body.title) post.title = req.body.title;
    if(req.body.subtitle) post.subtitle = req.body.subtitle;
    if(req.body.date) post.date = req.body.date;
    if(req.body.author) post.author = req.body.author;
    if(req.body.tags) post.tags = req.body.tags;
    if(req.body.article) post.article = req.body.article;

    Post.create(post, (err, post) => {
        if(err) res.status(404).json({success: false, message: err})
        else res.status(200).json({success: true});
    });
})

router.get('/', (req, res) => {
    Post.find({}, (err, posts) => {
        if(err) res.status(404).json({success: false, message: err})
        else {
            let postArray = []
            posts.forEach(post => postArray.push(post));
            res.status(200).json({success: true, posts: postArray})
        }
    });
})

export default router;