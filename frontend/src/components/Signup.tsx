
const Signup: React.FC = () => {
    return (
        <>
            <div className="flex-1 w-full min-h-screen grid place-items-center">
                <div className="w-[400px] h-[450px] backdrop-blur-md bg-white/10 border border-white/10 rounded-sm shadow flex flex-col">
                    <div className="w-full h-[25%] grid place-items-center text-2xl font-bold">Signup</div>
                    <div className="w-full flex-1 flex flex-col items-center justify-center gap-4">
                        <div className="w-[90%] h-10 flex items-center justify-between gap-2">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" className="h-8 w-[70%] border-2 border-white/10 focus:outline-0 p-2" />
                        </div>
                        <div className="w-[90%] h-10 flex items-center justify-between gap-2">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" className="h-8 w-[70%] border-2 border-white/10 focus:outline-0 p-2" />
                        </div>
                        <div className="w-[90%] h-10 flex items-center justify-between gap-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="h-8 w-[70%] border-2 border-white/10 focus:outline-0 p-2" />
                        </div>
                        <div className="w-full h-10">
                            <button className="w-25 h-8 border-2 border-white/10 rounded-sm bg-(--success) hover:bg-(--success-hover) text-white">Signup</button>
                        </div>
                        <div>
                            <p>Already have an account? <a className="text-(--primary) border-0 bg-transparent" href="/login">Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;