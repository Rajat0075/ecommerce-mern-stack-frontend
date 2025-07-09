import React, { useState } from 'react'

export default function Login() {

    let [uname, setuname] = useState('')
    let [upassword, setpassword] = useState('')

    let handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <form action="" onSubmit={handleSubmit}>
                            <div className='text-start my-3'>
                                <label htmlFor="">Username</label>
                                <input type="text" onChange={(event) => setuname(event.target.value)} className='form-control' value={uname} />
                            </div>
                            <div className='text-start my-3'>
                                <label htmlFor="">Password</label>
                                <input type='password' onChange={(event) => setpassword(event.target.value)} className='form-control' value={upassword} />
                            </div>
                            <div className='text-start my-3'>
                                <button className='btn btn-primary'>Login</button>
                            </div>
                        </form>
                        <p><a href='/registration'>Create a New Account</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}