import React, { useState, useEffect } from 'react';
import { setLocalEmployeesData, getLocalEmployeesData, employees } from '../../Utils/LocalStorage';

export default function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssingTo] = useState("");
  const [category, setCategory] = useState("");
  const [allEmployees, setAllEmployees] = useState([]);


  useEffect(() => {
    const employees = getLocalEmployeesData();
    setAllEmployees(employees)
  }, [])



  const submitHandlerr = (e) => {
    e.preventDefault();
    if (!employees.length) return alert("No employees found to assign task ❌")

    const newTask = {
      id: Date.now(),
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    };
    let foundEmployee = allEmployees.find(emp => emp.name === assignTo);
    if (!foundEmployee) return alert("Employee not found ❌")

    let newData = allEmployees.map(emp => {
      if (emp.name === assignTo) {
        emp.tasks.push(newTask)
      }
      return emp;
    })
    console.log(newData)

    setLocalEmployeesData(newData)

    // Clear form
    setTitle("");
    setDescription("");
    setDate("");
    setAssingTo("");
    setCategory("");
  };


  return (
    <div className='text-white m-2'>
      <form onSubmit={submitHandlerr} className='mt-5'>

        <h1 className='font-medium text-3xl mb-2'>Task Title</h1>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          className='bg-black w-full outline-none cursor p-3 rounded-2xl placeholder:text-gray-600 mb-2'
          type="text"
          placeholder='Make a UI design'
        />

        <h1 className='font-medium text-3xl mb-2'>Description</h1>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder='Detailed description of task'
          className='w-full bg-black rounded-2xl p-3 outline-none'
          rows={2}
        />

        <h1 className='font-medium text-3xl mb-2'>Date</h1>
        <input
          value={date}
          onChange={e => setDate(e.target.value)}
          required
          className='mb-2 bg-black rounded-xl p-2'
          type="date"
        />

        <h1 id='assignTo' className='font-medium text-3xl mb-2'>Assign To</h1>
        <input
          value={assignTo}
          onChange={e => setAssingTo(e.target.value)}
          required
          className='bg-black w-full outline-none p-3 rounded-2xl'
          type="text"
        />
        <div className="flex flex-row gap-2 items-center my-4">
          {assignTo.length ? allEmployees.filter(emp => emp.name.toLowerCase().includes(assignTo.toLowerCase())).map(emp => (
            <p key={emp.id} className='text-sm rounded-2xl bg-green-500 text-white p-2 cursor-pointer' onClick={() => setAssingTo(emp.name)}>{emp.name}</p>
          )) : null}

          {!assignTo ? null : <button className='bg-red-500 text-white rounded-full p-1 w-10 h-10 cursor-pointer' onClick={() => setAssingTo("")}>X</button>}


        </div>

        <h1 className='font-medium text-3xl mb-2'>Category</h1>
        <input
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
          className='bg-black w-full outline-none p-3 rounded-2xl mb-5'
          type="text"
        />

        <div className='flex justify-center'>
          <button
            type="submit"
            className='bg-cyan-900 cursor-pointer active:scale-95 font-medium text-2xl p-3 rounded-2xl w-[50%]'
          >
            Create Task
          </button>
        </div>

      </form>
    </div>
  );
}
