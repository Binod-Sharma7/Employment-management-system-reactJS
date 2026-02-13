import React from 'react'

export default function Header({name,logout}) {
  
  return (
    <div className='flex  text-white items-end justify-between'>
      <h1 className='text-xl font-medium m-2'>Hello <br/> <span className='text-3xl font-bold'>{name} 👋</span> </h1>
      <button onClick={logout} className='bg-red-400 text-lg font-medium cursor-pointer active:scale-95 px-5 py-2 rounded-[5px] m-2'>Log Out</button>
    </div>
  )
}
