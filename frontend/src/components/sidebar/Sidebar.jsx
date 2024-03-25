import React from 'react'
import Searchinput from "./Searchinput"
import Conversations from './Conversations'
import LogoutButton from '../sidebar/LogoutButton'
const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <Searchinput/>
        <div className='divider px-3'></div>
        <Conversations/>
        <div className='w-full h-6 bg-transparent'></div>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar