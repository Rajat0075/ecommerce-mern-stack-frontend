import { Outlet } from "react-router-dom";

export default function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            <div className="container">
                <h3>Your Product</h3>
            </div>
            <Outlet/>
        </div>
    )
}