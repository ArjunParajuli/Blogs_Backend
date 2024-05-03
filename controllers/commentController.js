const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

// NOTE: comment insert karneke baad uss comment ko posts mai vi dalna padega bcoz post contains title, body, likes array & comments array.
// i.e. comment ko comment collection mai vi dalna padega and posts collection mai vi dalna padega
const createComment = async (req, res) => {
    try {
        const { postId, user, body } = req.body;
        const comment = new Comment({
            postId, user, body
        });

        // save the comment object in the database
        const savedComment = await comment.save();
        console.log(savedComment);

        // Find the particular post in posts collection(find using postId) and add this comment to that post's comments array
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { $push: { comments: savedComment._id } },
            { new: true }
        ).populate("comments").exec();
        // new:true returns the updated post

        // Send the updated post in the response
        return res.json({ post: updatedPost });
    } catch (err) {
        // If an error occurs, return an error response
        console.error("Error creating comment:", err);
        return res.status(500).json({ error: "Error while creating comment" });
    }
};

module.exports = createComment;
