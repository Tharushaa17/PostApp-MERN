const Post = require('../models/post');

const getAllPost =async (req, res) => {
    try {
        const viewPost = await Post.find();
        res.status(200).json({ viewPost })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createPost = async (req, res) => {
    const post = req.body;
    const newPost = Post(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ msg:error });
        console.log(error);
    }
}

module.exports = {
  getAllPost,
  createPost
}
    