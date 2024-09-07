import React from 'react'
import PostJob from './PostJob';
import User from './User';
import Admin from './Admin';
import SideBar from './Components/SideBar';

const Dashbord = () => {
  return (
    <div>
      <SideBar />
      <div>
        <User />
      </div>
      <div>
        Job List
      </div>

      <Admin />
      <button></button> <PostJob />
    </div>
  )
}

export default Dashbord;
