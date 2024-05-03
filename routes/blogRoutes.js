const express = require("express");
const router = express.Router();

// import controller
const createComment  = require("../controllers/commentCOntroller")
const { createPost, getAllPosts } = require("../controllers/postController")
const { addLike, removeLike } = require("../controllers/likeController")

// create mapping
router.post('/comments/create', createComment);
router.post('/posts/create', createPost);
router.get('/posts/show', getAllPosts);
router.post('/likes/like', addLike);
router.post('/likes/unlike', removeLike);


module.exports = router;