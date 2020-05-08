const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
   date: {
        type: Date,
        required: true,
        default: Date.now()
   },
   tags: {
        type: [{type: String}],
   },
   article: {
       type: String,
       required: true
   }
});

export default mongoose.model('Post', PostSchema);