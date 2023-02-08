import React, { useContext } from 'react'
import { UserContext, UserProvider } from './UserContext'
import UserList from './UserList'

const User = () => {
    // const [state,dispatch] = useContext(UserContext);
    return (
        <UserProvider>
            <UserList />
        </UserProvider>
    )
}

export default User
