import { useEffect, useState } from 'react'
import './App.css'
import Auth from './components/Auth'
import { DecodedToken, UserData } from './Pojos/UserPojo'
import { jwtDecode } from 'jwt-decode';
import Main from './components/Main';

function App() {
  const [userData, setUserData] = useState<UserData | undefined>(undefined);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decode: DecodedToken = jwtDecode(token);
        if (decode.exp * 1000 > Date.now()) {
          setUserData(decode);
        } else {
          localStorage.removeItem('token');
          setUserData(undefined);
        }
      } catch (error) {
        console.error('Error decoding token: ', error);
        setUserData(undefined);
      }
    }
  }, [])

  return (
    <>
      <div className='main'>
        {(!userData || !userData.isAuthenticated) && <Auth />}
        {(userData && userData.isAuthenticated) && <><Main /></>}
      </div>
    </>
  )
}

export default App
