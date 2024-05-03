const mongoose = require("mongoose");


// title, content, array of likes on this post, array of comments on this post
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like", // refer to Like model
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment", // refer to Comment model
    }],
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;