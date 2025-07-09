import { Link, useNavigate } from 'react-router-dom';

// const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }
// }

export default function Navs() {
    return (
        <div>
            <li>
                {auth? <Link onClick={logout} to='/registration'>Logout</Link>:<Link to='/login'>SignUp</Link>}
            </li> 

        </div>
    )
}
