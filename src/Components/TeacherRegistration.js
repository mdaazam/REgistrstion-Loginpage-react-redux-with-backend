import React, { useState } from 'react';
import axios from 'axios';
import './loginpage.css';
import { Link, useHistory } from 'react-router-dom';

export default function TeacherRegistration() {

    const [user, setUser] = useState({
        "name":"",
        "password":"",
        "cpassword":"",
        "email":"",
        "role":""
    })
    const history = useHistory();
    const param=new URLSearchParams();
    let name, value;
    const handleInput=(e)=>{
        name=e.target.name
        value=e.target.value
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleClk = async () => {
        param.append("name", user.name);
        param.append("password", user.password);
        param.append("cpassword", user.cpassword);
        param.append("email", user.email);
        param.append("role", user.role);
        axios.post("http://localhost:4000/teacherRegister", param, {
           headers: {
               "Content-Type": 'application/x-www-form-urlencoded'
           },
        }).then(res => {
            alert('Registration Successful')
            history.push('/signint')
            if(res.status === 422){
                alert('Password doest match')
            }
        },resetForm()).catch(err =>{
                alert("Fill all the fields Again")
            
        })
    }

    const resetForm=()=>{
        setUser({
            name:"",
            password:"",
            cpassword:"",
            email:""
        })
    }

    return (
        <div>
                <form className="RegisterPage">

                    <h1 className="RegisterHead">Register</h1>

                    <div className="form-group">
                        <label className="RegisterLabel">Name</label>
                        <input type="text" className="form-control" placeholder="Enter Your Name" name="name" value={user.name} onChange={handleInput}/>
                    </div>

                    <div className="form-group">
                        <label className="RegisterLabel">Password</label>
                        <input type="password" className="form-control" placeholder="Enter Your password" name="password" value={user.password} onChange={handleInput}/>
                    </div>

                    <div className="form-group">
                        <label className="RegisterLabel">Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password again." name="cpassword" value={user.cpassword} onChange={handleInput}/>
                    </div>
                    <div className="form-group">
                        <label className="RegisterLabel">Email</label>
                        <input type="email" className="form-control" placeholder="Enter your Email." name="email" value={user.email} onChange={handleInput}/>
                    </div>
                    <div className="form-group">
                        <label className="RegisterLabel">Role</label>
                        <input type="text" className="form-control" placeholder="Enter your Role." name="role" value={user.role} onChange={handleInput}/>
                    </div>

                    <button type="button" className="btn btn-dark btn-lg btn-block" onClick={handleClk}>Sign Up</button>
                    <p className="forgot-password text-right">
                    Already have an account?<Link to="/signint">SignIn</Link> 
                    </p>
                </form>
        </div>
    )
}
