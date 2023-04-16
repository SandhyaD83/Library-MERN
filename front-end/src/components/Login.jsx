import React, { useState } from 'react'

function Login(props) {
    const [name, setName] = useState('')
    const [pwd, setPwd] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onClick(name)
    }
    return (
        <div><form onSubmit={handleSubmit}>
            Name:  <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter User Name" name="uName" />
            Password: <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" placeholder="*****" name="pwd" />
            <button type="submit">Log in</button>
        </form>

        </div>
    )
}

export default Login