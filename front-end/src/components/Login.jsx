import React, { useState } from 'react'
import axios from 'axios'
function Login(props) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = name + ' ' + password
        props.onLogin(user)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                Name:  <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter User Name" name="uName" />
                Password: <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*****" name="pwd" />
                <button type="submit" value="login" name="action">Log in </button><br />

            </form>

        </div>
    )
}

export default Login