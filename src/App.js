import React, { useState } from 'react'
import TodoList from './components/TodoList'
import "./App.css"
import Login from './components/Login'
import { useStateValue } from './StateProvider'
import Logout from './components/Logout'
import "./components/Logout.css"

function App() {
    const [{user}, dispatch] = useStateValue()

    return (
        <div className="App">
             {!user ? (
                <Login/>
            ): (
                <div className="todoApp">

                    <div className="logout">
                    <Logout/>
                    </div>

                    <TodoList />
                </div> 
            )}
            
        </div>
        
    )
}

export default App
