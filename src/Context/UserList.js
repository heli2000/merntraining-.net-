import React,{useContext, useEffect, useState} from 'react';
import { UserContext, UserProvider } from './UserContext';

const UserList = () => {
    const [state,dispatch] = useContext(UserContext);
    const [statedata,setstatedata] = useState({});

    // useEffect(()=>{
    //   setstatedata(state);
    // },[state]);


  return (
    <div>
      {dispatch({
        'type':"delete",
        'payload': null
      })}
      {JSON.stringify(statedata)}
    </div>
  )
}

export default UserList
