import '../App.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'

    // const auth = localStorage.getItem('user');
    // const navigate = useNavigate();
    // const logout = () => {
    //     localStorage.clear();
    //     navigate('/login')
    // }

export default function Header() {
    return (
        <div className='Header headerBar'>
            <p id='logo-title'>
                <h1 className='title' style={{ textDecoration: 'none', fontSize: 'larger' }}>Shoppily</h1>
            </p>  
            {/* <Navs/> */}
        </div>
    )
}

function Navs() {
    return (
        <div>
            <li>
                {/* {auth? <Link onClick={logout} to='/registration'>Logout</Link>:<Link to='/login'>SignUp</Link>} */}
            </li> 

        </div>
    )
}
