import React from 'react';
import usersArr from './Users';
import { useParams } from 'react-router-dom';


const Profile = () => {
  console.clear()
    
    let { userid } = useParams( usersArr )
    
  return (
    <div>
    user : {  usersArr.find((items)=> items.name == userid ? userid : 'not found' ) 

    }
    </div>
  )
}

export default Profile
