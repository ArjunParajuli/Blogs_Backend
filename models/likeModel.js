const mongoose = require("mongoose");

// kis post ka like hai, ksika like hai
const likeSchema = new mongoose.Schema({
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "postModel", // refering to this model 
    },
    user:{
        type: String,
        required: true,
    }
})

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;