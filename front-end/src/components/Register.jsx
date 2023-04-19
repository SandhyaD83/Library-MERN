import React, { useState } from 'react'
import axios from 'axios'
function Register() {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { name, password }
        axios.post('http://localhost:3000/users/post', data)
            .then((response) => {
                console.log(response);
                event.target.reset();
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                Name:  <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter User Name" name="uName" />
                Password: <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*****" name="pwd" />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register