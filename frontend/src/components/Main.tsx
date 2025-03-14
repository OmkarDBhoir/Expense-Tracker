import styled from 'styled-components';
import '../static/main.css';
import bg from '../assets/bg.png';
import { MainLayout } from '../Styles/Layout';
import Orb from './Orb/Orb';
import Navigation from './Navigation/Navigation';
import { useMemo, useState } from 'react';
import Dashboard from './Dashboard/Dashboard';
import Incomes from './Incomes/Incomes';
import Expenses from './Expenses/Expenses';
import { menuItems } from '../utils/menuitems';


const Main: React.FC = () => {
    const [active, setActive] = useState<number>(menuItems[0].id);

    const displayData = () => {
        switch (active) {
            case 1:
            return <Dashboard />
            case 2:
                return <Dashboard />
            case 3:
                return <Incomes />
            case 4:
                return <Expenses />
            default:
                return <Dashboard />

        }
    }

    const orbMemo = useMemo(() => {
        return <Orb />
    }, [])
    return (
        <>
            <MainStyled className='App'>
                {orbMemo}
                <MainLayout>
                    <Navigation active={active} setActive={setActive} />
                    <main>
                        {displayData()}
                    </main>
                </MainLayout>
            </MainStyled>
        </>
    )
}

const MainStyled = styled.div`
    height:100vh;
    background-image: url(${bg});
    position:relative;

    main{
        flex: 1;
        background-color: rgba(252, 246, 249, 0.78);
        border: 3px solid #ffffff;
        backdrop-filter: blur(4.5px);
        border-radius: 32px;
        overflow: auto;
        overflow-x: hidded;
        &::-webkit-scrollbar{
            width: 0px; 
        }
    }
`

export default Main;