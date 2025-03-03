import styled from 'styled-components';
import '../static/main.css';
import bg from '../assets/bg.png';
import { MainLayout } from '../Styles/Layout';
import Orb from './Orb/Orb';
import Navigation from './Navigation/Navigation';
import { useMemo, useState } from 'react';


const Main: React.FC = () => {
    const [active, setActive] = useState<number>(0);

    const orbMemo = useMemo(() => {
        return <Orb />
    }, [])
    return (
        <>
            <MainStyled className='App'>
                {orbMemo}
                <MainLayout>
                    <Navigation active={active} setActive={setActive} />
                </MainLayout>
            </MainStyled>
        </>
    )
}

const MainStyled = styled.div`
    height:100vh;
    background-image: url(${bg});
    position:relative;
`

export default Main;