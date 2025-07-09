import { Navigate, Outlet } from  'react-router-dom'

export default function PrivateComponent() {
    const auth = localStorage.getItem('user');
  return (
    <div>
      {
        auth? <Outlet/>:<Navigate to='/registration' />
      } 
    </div>
  )
}
