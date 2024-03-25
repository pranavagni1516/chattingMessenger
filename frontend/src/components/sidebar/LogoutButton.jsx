import React from 'react'
import {BiLogOut} from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'
const LogoutButton = () => {
  const {loading,logout} = useLogout();
  return (
    <div className='mt-auto pt-2'>
        {loading ? (<span className='loading loading-spinner'></span>)

        :

        (<BiLogOut className='w-6 h-6 text-white cursor-pointer hover:scale-150' onClick={logout}/>)}
    </div>
  )
}

export default LogoutButton