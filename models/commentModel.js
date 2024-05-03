const mongoose = require("mongoose");


// this collection stores info about which post's comment is this, author of comment & the content of comment 
const commentSchema = new mongoose.Schema({
    postId:{
        type: mongoose.Schema.Types.ObjectId, // reference type, using the id of the post
        ref: "Post",  // refering to this model 
    },
    user:{
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    }
})

// create & export comment model 
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;