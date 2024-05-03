// create & fetch post
const Post = require("../models/postModel");


// create a post
exports.createPost = async(req, res) =>{
    try{
        const { title, body } = req.body;
        // create a new post
        const newPost = new Post({
            title, body
        })
        // save that post in database
        const savedPost = await newPost.save();

        res.json({
            post: savedPost,
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Error while creating Post"
        })
    }
}

// fetch all posts
exports.getAllPosts = async(req, res) =>{
    try{
        const allPosts = await Post.find().populate("comments").populate("likes").exec(); 
        res.json({
            allPosts: allPosts
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message: "Error while fetching the posts"
        })
    }
}