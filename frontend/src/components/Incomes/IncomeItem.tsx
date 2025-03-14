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
            <IncomeItemStyled>
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

const IncomeItemStyled = styled.div`
    background: #fcf6f9;
    border: 2px solid #fff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    margin-bottom: 1rem;
`

export default IncomeItem;