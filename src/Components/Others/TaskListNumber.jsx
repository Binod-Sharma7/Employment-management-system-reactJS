import React from 'react'

export default function TaskListNumber({task}) {
   const activeCount = task.filter(t => t.active).length
  const newCount = task.filter(t => t.newTask).length
  const completedCount = task.filter(t => t.completed).length
  const failedCount = task.filter(t => t.failed).length
  
  
  return (
    <div className='flex screen justify-between text-white gap-5 mt-5'>
      <div className="h-40 w-[45%] py-6 px-9 rounded-2xl bg-green-400">
        <h1 className='text-5xl text-center font-medium'>{newCount}</h1>
        <h1 className='text-4xl text-center'>NEW TASK</h1>
      </div>
      <div className="h-40 w-[45%] py-6 px-9 rounded-2xl bg-yellow-400">
        <h1 className='text-5xl text-center font-medium'>{activeCount}</h1>
        <h1 className='text-4xl text-center'>ACTIVE TASK</h1>
      </div>
      <div className="h-40 w-[50%] py-6 px-9 rounded-2xl bg-blue-400">
        <h1 className='text-5xl text-center font-medium'>{completedCount}</h1>
        <h1 className='text-4xl text-center'>COMPLETED TASK</h1>
      </div>
      <div className="h-40 w-[45%] py-6 px-9 rounded-2xl bg-red-400">
        <h1 className='text-5xl text-center font-medium'>{failedCount}</h1>
        <h1 className='text-4xl text-center'>FAILED TASK</h1>
      </div>
      
    </div>
  )
}
