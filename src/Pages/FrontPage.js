import React from 'react';
import { useHistory } from 'react-router-dom'


export default function FrontPage() {


    const history = useHistory();
    const handleTeacher = () => {
       history.push('/signint')
    }
    const handleStudent = () => {
        history.push('/signin')
    }
    return (
        
            <div style={{marginTop: "25%"}}>
                <center>
                    <h1 style={{marginBottom:"30px"}}>Click the button</h1>
                    <button style={{marginRight:"16px", backgroundColor: "#0BA6FF", textAlign:"center", padding:"15px 32px"}} onClick={handleTeacher}> Teacher </button>
                    <button style={{marginLeft:"16px", backgroundColor: "#0BA6FF", textAlign:"center", padding:"15px 32px"}} onClick={handleStudent}> Student </button>
                </center>
            </div>
        
    )
}
