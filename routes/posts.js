import Post from '../models/Post';
import { verifyToken } from './verifytoken';

const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
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

router.get('/', verifyToken, (req, res) => {
    Post.find({}, (err, posts) => {
        if(err) res.status(404).json({success: false, message: err})
        else {
            let postArray = []
            posts.forEach(post => postArray.push(post));
            res.status(200).json({success: true, posts: postArray})
        }
    });
})

router.get('/:id', (req, res) => {
    Post.find({_id: req.params.id}, (err, post) => {
        if(err) res.status(404).json({success: false, message: err})
        else {
            res.status(200).json({success: true, post: post});
        }
    })
})

router.delete('/:id', (req, res) => {
    Post.deleteOne({_id: req.params.id}, (err) => {
        if(err) res.status(404).json({success: false, message: err})
        else res.status(200).json({success: true})
    })
})

router.patch('/:id', (req, res) => {
    let updatedInfo = {}
    if(req.body.title) updatedInfo.title = req.body.title;
    if(req.body.subtitle) updatedInfo.subtitle = req.body.subtitle;
    if(req.body.date) updatedInfo.date = req.body.date;
    if(req.body.author) updatedInfo.author = req.body.author;
    if(req.body.tags) updatedInfo.tags = req.body.tags;
    if(req.body.article) updatedInfo.article = req.body.article;

    Post.update({_id: req.params.id}, {$set: updatedInfo}, (err, post) => {
        if(err) res.status(404).json({success: false, message: err})
        else {
            res.status(200).json({success: true, post: post});
        }
    })
})

export default router;