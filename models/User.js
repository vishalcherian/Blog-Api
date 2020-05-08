const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
});

export default mongoose.model('User', UserSchema);