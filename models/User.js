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
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    username: {
        type: String,
        required: true,
        min: 6
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },

});

export default mongoose.model('User', UserSchema);