import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function SignUp() {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })

    const collectData = async () => {
        console.warn(name, gender, password);
        let result = await fetch('http://localhost:3000/register', { method: 'post', body: JSON.stringify({ name, gender, password }), headers: { 'Content-Type': 'application/json' } })
        return await result.json();
        console.warn(result);
        localStorage.setItem('user', JSON.stringify(result));
        navigate('/');
    }

    return (
        <div>
            <h1>Register</h1>
            <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Name'
            />
            <input
                type='text'
                value={gender}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Name'
            />
            <input
                type='password'
                value={password}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Name'
            />
            <button type='button' onClick={collectData} >Submit</button>
        </div>
    )
}
