import React from 'react';
import { useHistory } from 'react-router';

export default function TeacherHomePage() {

    const history = useHistory();
        

    const handleLogout = () => {
        history.push('/signint')
    }
    
    return (
        <div>
           <center>
            <h1>Teacher HomePage</h1>
            <button onClick={handleLogout}>Logout</button>
           </center>
        </div>
    )
}
