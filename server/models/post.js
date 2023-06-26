const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title : String,
    description : String,
    creater: String,
    tags: [String],
    slectedFile: String,
    likeCount: {
        type : Number,
        default : 0
    },
    createdAt: {
        type : Date,
        default : new Date()
    }
});

module.exports = mongoose.model('Post', PostSchema);
