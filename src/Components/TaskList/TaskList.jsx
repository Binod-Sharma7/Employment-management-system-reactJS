import React from 'react'

export default function TaskList({ tasklist }) {
  const getTaskColor = (task) => {
    if (task.failed) return "bg-red-500"
    if (task.completed) return "bg-blue-500"
    if (task.active && task.newTask) return "bg-purple-500"
    if (task.active) return "bg-yellow-500"
    if (task.newTask) return "bg-green-400"
    return "bg-gray-400"
  }


  return (<>
    <div id="tasklist" className='h-[55%] w-full flex items-center gap-5  justify-start overflow-x-auto flex-nowrap  mt-5 px-2 text-white rounded-2xl'>

      {tasklist.map(task => (
        <div key={task.id} className={`h-[90%] flex-shrink-0 w-[300px] rounded-xl ${getTaskColor(task)}`}>
          <div className='m-4'>
            <div className='flex justify-between'>
              <h3 className="bg-cyan-700 px-3 py-1 rounded">{task.category}</h3>
              <h4>{task.date}</h4>
            </div>
            <h2 className='text-2xl mt-2'>{task.title}</h2>
            <p className='mt-2'>{task.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex gap-3 text-sm text-white  mt-2">
      <span className="bg-green-500 w-4 h-4 inline-block rounded-full ml-2"></span> New
      <span className="bg-yellow-400 w-4 h-4 inline-block rounded-full ml-2"></span> Active
      <span className="bg-blue-500 w-4 h-4 inline-block rounded-full"></span> Completed
      <span className="bg-red-500 w-4 h-4 inline-block rounded-full ml-2"></span> Failed
      <span className="bg-purple-500 w-4 h-4 inline-block rounded-full ml-2"></span> New & Active
      <span className="bg-gray-500 w-4 h-4 inline-block rounded-full ml-2"></span> Others
    </div>

  </>
  )
}
