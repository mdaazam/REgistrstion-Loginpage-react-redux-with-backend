const mongoose = require('mongoose');


const TeachersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
    	type:String,
    	required: true
    }
});

const Teachers = mongoose.model('faculty', TeachersSchema);
module.exports = Teachers