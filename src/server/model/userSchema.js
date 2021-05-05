const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
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
        type: String,
        required: true
    }

});

//hashing the password

userSchema.pre('save', async function(next) {
    console.log(`hi from inside`)
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cPassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});


const User = mongoose.model('USER', userSchema);

module.exports = User;

