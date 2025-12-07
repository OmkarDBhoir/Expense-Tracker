import styled from "styled-components";
import { InnerLayout } from "../../Styles/Layout";
import Form from "../Form/Form";
import { useGlobalContext } from "../context/globalContext";
import { useEffect } from "react";


const Incomes: React.FC = () => {

    const { incomes, getIncome } = useGlobalContext();

    useEffect(() => {
        getIncome();
    }, [])


    return (
        <>
            <IncomeStyled>
                <InnerLayout>
                    <h1>Incomes</h1>
                    <div className="income-content">
                        <div className="form-container">
                            <Form />
                        </div>
                        <div className="incomes">
                            
                        </div>
                    </div>
                </InnerLayout>
            </IncomeStyled>
        </>
    )
}

const IncomeStyled = styled.div`
    
`

export default Incomes;