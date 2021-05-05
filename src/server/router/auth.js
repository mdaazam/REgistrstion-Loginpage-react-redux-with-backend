const express = require('express');
const User = require('../model/userSchema');
const router = express.Router();
const cors=require("cors");

require('../db/conn');
//const Abc = require('../model/userSchema');
const Teachers = require("../model/teachersSchema");


router.use(cors());


router.get('/', (req, res) => {
    res.send(`Hello World from server router.js`);
});


// student registration

router.post('/register', async (req, res) => {

    const { name, password, cpassword, email, role} = req.body;
    if(!name || !password || !cpassword || !email || !role ){
        return res.status(422).json({ error: "Please filled the field properly"})
    }

    try {
        const userExist = await User.findOne({ email: email });

        if(userExist){
            return res.status(422).json({ error: "Email Already Exist"});
        } else if( password != cpassword ) {
            return res.status(422).json({ error: "Password are not matching"});
        } else {
            const user = new User({ name, password, cpassword, email, role });
            await user.save();
            res.status(201).json({message: "registered successfully"});
        }
    }catch (err) {
        console.log(err);
    }
});


//Login for student

router.get('/user',(req,res)=>{
    User.find().then(user=>{
        res.send(user)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});


//teacher Registration

router.post('/teacherRegister', async (req, res) => {

    const { name, password, cpassword, email, role} = req.body;
    if(!name || !password || !cpassword || !email || !role ){
        return res.status(422).send({ error: "Please filled the field properly"})
    }

    try {
        const userExist = await Teachers.findOne({ email: email });

        if(userExist){
            return res.status(422).send({ error: "Email Already Exist"});
        } else if( password != cpassword ) {
            return res.status(422).send({ error: "Password are not matching"});
        } else {
            const user = new Teachers({ name, password, cpassword, email, role });
            await user.save();
            res.status(201).send({message: "registered successfully"});
        }
    }catch (err) {
        console.log(err);
    }
});

//login for teacher

router.get('/teach',(req,res)=>{
    Teachers.find().then(user=>{
        res.send(user)
    }).catch((err)=>{
        res.send({
            message: "some error happened"
        })
    })
});





module.exports = router;