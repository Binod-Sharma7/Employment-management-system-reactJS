import React, { useState } from 'react'
import {  setLocalEmployeesData } from '../../Utils/LocalStorage'

export default function AllTask({ data }) {

  const [selectedEmp, setSelectedEmp] = useState(null)

  return (
    <div className="space-y-4">

      {data.employees.map((emp) => {

        const ac = emp.tasks.filter(t => t.active).length
        const nc = emp.tasks.filter(t => t.newTask).length
        const cc = emp.tasks.filter(t => t.completed).length
        const fc = emp.tasks.filter(t => t.failed).length

        return (
          <div key={emp.id}>
            
            {/* Employee Card */}
            <div
              onClick={() => setSelectedEmp(emp)}
              className="bg-cyan-500 flex justify-between items-center text-2xl font-medium px-2 h-15 text-white cursor-pointer"
            >
              <h1>{emp.name}</h1>
              <div className="flex gap-4 text-lg">
                <span>Active: {ac}</span>
                <span>New: {nc}</span>
                <span>Completed: {cc}</span>
                <span>Failed: {fc}</span>
              </div>
            </div>

            {/* Show Tasks if selected */}
            {selectedEmp?.id === emp.id && (
              <div className="p-4 bg-gray-800 text-white rounded-lg m-4">
                <h2 className="text-2xl font-bold mb-2">{emp.name}'s Tasks</h2>

                {emp.tasks.length === 0 ? (
                  <p>No tasks assigned.</p>
                ) : (
                  <ol className="list-decimal list-inside">
                    

                    {emp.tasks.map((task) => (
                      <li key={task.id} className="mb-2 ">
                        
                       <div className='flex gap-10'>
                        <h3 className="text-xl font-semibold">{task.title}</h3>
                       <p onClick={()=>
                       {
                        const updatedTasks = emp.tasks.filter(t => t.id !== task.id)
                        const newData = data.employees.map(e => {
                          if (e.id === emp.id) {
                            return { ...e, tasks: updatedTasks }
                          }
                          return e
                        })
                        setLocalEmployeesData(newData)

                       }
                       } className='bg-red-600 rounded-2xl h-5 w-5 flex justify-center mt-2 items-center cursor-pointer'>X</p>
                       </div>
                        <p>- { task.description}</p>
                        <ul>
                          <li>Status: {task.active ? "Active" : task.newTask ? "New" : task.completed ? "Completed" : task.failed ? "Failed" : "Unknown"}</li>
                          <li>Category: {task.category}</li>
                        </ul>
                        <p className="text-sm text-gray-400">
                          Due Date: {task.date}
                        </p>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            )}

          </div>
        )
      })}

    </div>
  )
}
