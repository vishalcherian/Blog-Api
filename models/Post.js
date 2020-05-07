const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

export default mongoose.model('Post', PostSchema);