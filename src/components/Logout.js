import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import { actionTypes } from '../reducer'
import { useStateValue } from '../StateProvider'
import "./Logout.css"

function Logout() {
    const [{user}, dispatch] = useStateValue()


    const logOut = () => {
        
            dispatch({
                type: actionTypes.SET_USER,
                user: null
            })
            
       
    }


    return (
        <div className="logout__container">
            <div className="avatar">
                <Avatar alt="Profile pcc" src={user?.photoURL} />
            </div>
            <h2>{user?.displayName}</h2>
             <Button onClick={logOut}>Logout</Button>
        </div>
    )
}

export default Logout
