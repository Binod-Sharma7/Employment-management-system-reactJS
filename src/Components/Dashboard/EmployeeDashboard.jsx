import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

export default function EmployeeDashboard({ user, logout }) {
  localStorage.setItem("loggedUser", JSON.stringify(user))

  return (
    <div className='p-10 bg-[#1c1c1c] h-screen'>
      <Header logout={logout} name={user.name} />
      <TaskListNumber task={user.tasks} />
      <TaskList tasklist={user.tasks} />
    </div>
  )
}
