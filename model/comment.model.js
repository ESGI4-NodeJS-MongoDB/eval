const  { Schema } = require("mongoose");
const mongoose = require("mongoose");

const comment = new Schema({
    text: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

const Comment = mongoose.model('Comment', comment);

module.exports = Comment;