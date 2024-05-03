const Like = require("../models/likeModel");
const Post = require("../models/postModel");

// creates new like obj and pushes in db & then finds the post for that like(using postId) & updates that post's likes array
exports.addLike = async(req, res) =>{
    try{
        const { postId, user } = req.body;
        // create the new like obj
        const newLike = new Like({
            postId, user
        })
        // save like in database
        const savedLike = await newLike.save();

        // find the post whose like this is(using postId) and update that post's likes array
        const updatedPost = await Post.findByIdAndUpdate(postId, 
            {$push: {likes: savedLike._id}},
            {new: true}
        ).populate("likes").exec(); 

        res.json({
            updatedPosts: updatedPost
        })
    }catch(err){
        console.log(err)
        res.json({message: "Error while adding like"})
    }
} 


exports.removeLike = async(req, res) =>{
    try{
        const { postId, likeId } = req.body;  // delete in post collection using postId, in like collection using likeId

        // like collection mai delete karo
        const updatedLike = await Like.findOneAndDelete({ postId: postId, _id: likeId }); // wo doc delete karo jisme parameters match karte hai

        // post collection mai delete karo
        const updatedPost = await Post.findByIdAndUpdate(postId, {$pull: {likes: updatedLike._id}}, {new: true }) // delete the post whose likes array has matching likeid 

        res.json({updatedPost: updatedPost})
    }catch(err){
        console.log(err)
        res.json({message: "Error while removing like"})
    }
}