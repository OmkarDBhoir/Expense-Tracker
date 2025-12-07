import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/PrivateRoute';
import Signup from './components/Signup';
import { useAuth } from './hooks/useAuth';
import { useLoader } from './hooks/useLoader';

function App() {

  const { initializing } = useAuth();
  const { setLoading } = useLoader();

  useEffect(() => {
    setLoading(initializing);
  }, [initializing, setLoading])

  return (
    <>
      <div className='w-full min-w-screen min-h-screen flex flex-col'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
