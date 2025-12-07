import Home from "./Home";
import Sidebar from "./Sidebar";


const Dashboard: React.FC = () => {
    return (
        <>
            <div className="flex-1 w-full min-h-screen flex border-b-8">
                <Sidebar />
                {/* <button onClick={(logout)}>Logout</button> */}
            </div>
        </>
    )
}

export default Dashboard;