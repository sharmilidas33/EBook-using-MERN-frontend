import React, { useContext } from 'react'
import { AuthContext } from '../contacts/AuthProvider';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
    console.log(user)
  return (
    <div className='px-4 lg:px-24 flex items-center flex-col justify-center mt-[-30px] mx-auto'>
      <h1  className="text-6xl font-bold mb-4 text-pink-800">Welcome,</h1>
      <p className="text-3xl text-amber-900 font-bold">{user.displayName}</p>
    </div>
  )
}

export default Dashboard
