import React, { useEffect, useState } from 'react';
import {fetchTeachers} from '../Redux/Action'
import './loginpage.css'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function TeacherLogin() {

    const history = useHistory();

    const state= useSelector((state)=>state)
    const {teachers}=state.teachers;
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchTeachers())
    },[])
    console.log(teachers)
    const [Iniuser,setUser]=useState({
        "email":"",
        "password": ""
    })
    let name,value
    const handleChange=(e)=>{
        name=e.target.name
        value=e.target.value
        setUser({
            ...Iniuser,
            [name]:value
        })

    }
    
     const handleClick= ()=>{
        let flag="false"
       teachers.map(item=>{
           if(item?.email===Iniuser.email && item?.cpassword===Iniuser.password){
               alert("Login Successfully");
               flag="true";
               resetForm();
              history.push('/homepaget') 
           }  
       })
       if(flag=="false"){
               alert("Invalid Credential")
       }
     }

     const resetForm=()=>{
         setUser({
             email:"",
             password:""
         })
     }
     const handleBack =() => {
         history.push('/front')
     }
    return (
        <div>
            <button style={{marginLeft:"10%", marginTop:"5%", backgroundColor:"#63BBF2", fontSize:"25px"}} onClick={handleBack}>BACK</button>

            <form className="LoginPage">
                <h1 className="loginHead">Log in</h1>
                <div className="form-group">
                    <label className="loginLabel">Email Id</label>
                    <input type="text" className="form-control" name="email" value={Iniuser.email} placeholder="Enter Your email id" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label className="loginLabel">Password</label>
                    <input type="password" className="form-control" name="password" value={Iniuser.password} placeholder="Enter your password" onChange={handleChange}/>
                </div>
                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={handleClick}>Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
                <p className="forgot-password text-right">
                    Don't have an account<Link to="/signupt">SignUp</Link>
                </p>
            </form>

        </div>
    )
}
