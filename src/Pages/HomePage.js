import React from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function HomePage() {

    const history = useHistory();
    const handleClick = () => {
        history.push('/signin')
    }
    return (
        <div>
            <center><h1>Student HomePage</h1>
            <button onClick={handleClick}> <Link to="/logout" > Logout </Link> </button></center>
        </div>
    )
}
