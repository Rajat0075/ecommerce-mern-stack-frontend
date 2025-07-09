import React, { useState } from 'react'
import axios from 'axios'

export default function Registeration() {
    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            phone: '',
            password: '',
            index: ''
        }
    );

    const handleChange = (e) => {

        // const { name, value } = e.target;
        // setFormData({ ...formData, [name]: value });

        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }

    // const handleValidPassword = (e) => {
    //     const {password, value} = e.target;
    //     setFormData({
    //         ...formData,
    //         [password]:value,
    //     })
    //     console.log(formData)
    // }

    // //Form Validation
    // const validationForm = () => {
    //     const errors = {}
    //     if (formData.password) {
    //         errors.password="Password Required"
    //     }else if(!/^[A-Za-z0-9_]{3,5}$/.test(formData.password)){
    //         errors.password="Password should be 3 - 5 character long"
    //     }

    //     if(formData.phone){
    //         errors.phone="phone Required"
    //     }else if(!/^[0-9]{3,5}$/.test(formData.phone)){
    //         errors.phone="phone not valid"
    //     }
    //     return errors
    // };

    // const handleValidSubmit = async (e) => {
    //     e.preventDefault();
    //     const errors = validationForm()
    //     console.log(errors)        
    // }

    //Handle Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // try {
        //       await axios.post('http://localhost:3000/api/form/register', formData);
        //      alert('Form Submitted Successfully')
        // } catch (error) {
        //     alert('Error Submitting Form');
        // }
        try {
            //await axios.post('http://localhost:3000/api/submit', formData);
            await axios.post('http://localhost:3000/api/form', formData);
            alert('Form Submitted Successfully')
        } catch (error) {
            alert('Error Submitting Form');
        }
    };

    return (
        <>

            <div className='container' style={{ margin: '5%', textAlign: 'center' }}>
                <h1>Registration</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={formData.name}
                        onChange={handleChange}
                        name='name'
                        placeholder='Enter Your Username'
                        required
                        pattern='^[A-Z-a-z]$'
                    />
                    <br /><br />
                    <input
                        //type='text'
                        value={formData.email}
                        onChange={handleChange}
                        name='email'
                        placeholder='Email'
                    />
                    <br /><br />
                    <input
                        type='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        //onChange={handleValidPassword}
                        name='phone'
                        placeholder='PhoneNo.'
                    //value={formData.phone}
                    // required 
                    //pattern='^[0-9_]{10}$' 
                    /> <br /> <br />
                    <input
                        type='password'
                        value={formData.password}
                        onChange={handleChange}
                        //onChange={handleValidPassword}
                        name='password'
                        placeholder='Password'

                    /> <br /> <br />
                    <button type='submit'>
                        {
                            formData.index !== "" ? 'Update' : 'Save'
                        }
                    </button>
                </form>
                <p><a href='/login'>Already have a Account?</a></p>
            </div>
        </>
    )
} 