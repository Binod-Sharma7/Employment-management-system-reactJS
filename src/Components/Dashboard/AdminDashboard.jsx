import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

export default function AdminDashboard({user,logout,data}) {
      localStorage.setItem("loggedUser", JSON.stringify(user))
  
  return (
    <div className='bg-[#1c1c1c] h-full w-full '>
      <Header logout={logout} name={user.name}/>
      <CreateTask />
      <AllTask data={data} />
    </div>
  )
}
