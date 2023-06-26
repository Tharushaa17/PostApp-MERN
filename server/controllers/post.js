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
    try {
        const newPost = await Post.create(req.body);
        res.status(201).json({newPost});
    } catch (error) {
        res.status(500).json({ msg:error });
    }
}

module.exports = {
  getAllPost,
  createPost
}
    