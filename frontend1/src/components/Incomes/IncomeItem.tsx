import styled from "styled-components"
import { calender, comment, dollar, trash } from "../../utils/Icons";
import Button from "../Button/Button";

interface IncomeItemProps {
    id?: string;
    title?: string;
    amount?: number;
    date?: Date;
    category?: string;
    description?: string;
    deleteItem?: any;
    indicatorColor?: string;
    type?: string;
}

const IncomeItem: React.FC<IncomeItemProps> = ({ id, title, amount, date, category, description, deleteItem, indicatorColor, type }) => {
    return (
        <>
            <IncomeItemStyled indicatorColor={indicatorColor}>
                <div className="icon"></div>
                <div className="content">
                    <h5>{title}</h5>
                    <div className="inner-content">
                        <div className="text">
                            <p>{dollar} 45</p>
                            <p>{calender} {date?.toDateString()}</p>
                            <p>{comment} {description}</p>
                        </div>
                        <div className="btn-container">
                            <Button icon={trash} bPad="1rem" radius="50%" bg={"var(--primary-color"} color="#fff" />
                        </div>
                    </div>
                </div>
            </IncomeItemStyled>
        </>
    )
}

const IncomeItemStyled = styled.div<{indicatorColor?: string}>`
    background: #fcf6f9;
    border: 2px solid #fff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    margin-bottom: 1rem;

    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;

    .icon {
        width: 80px;
        height: 80px;
        border-radius: 20px;
        background-color: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #ffffff;
        
        i {
            font-size: 2.6rem;
        }
    }
    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        h5 {
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before {
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background-color: ${props => props.indicatorColor};
            }
        }
    }
`

export default IncomeItem;