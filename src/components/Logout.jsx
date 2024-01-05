import React, { useContext, useState } from 'react'
import { AuthContext } from '../contacts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logOut } = useContext(AuthContext);
    const { error, setError } = useState("error");
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogout = () => {
        logOut().then(() => {
            // Sign-out successful.
            alert("Logged Out!!");
            navigate(from, { replace: true })
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button className='bg-blue-600 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout
