import { useState } from "react";
import { incomeData } from "../../Pojos/dataPojos";
import { updateObject } from "../Services/CommonFunctions";
import DatePicker from "react-datepicker";
import { categories } from "../../utils/categories";
import { useGlobalContext } from "../context/globalContext";
import styled from "styled-components";
import Button from "../Button/Button";
import { plus } from "../../utils/Icons";


const Form: React.FC = () => {
    const [inputState, setInputState] = useState<incomeData>({ title: '', amount: 0, date: null, category: '', description: '' });
    const { addIncome } = useGlobalContext();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addIncome(inputState);
    };

    return (
        <>
            <FormStyled onSubmit={handleSubmit}>
                <div className="input-control">
                    <input type="text" value={inputState.title} name="title" placeholder="Salary Title" onChange={(e) => updateObject(setInputState, 'title', e.target.value)} />
                </div>
                <div className="input-control">
                    <input type='number' value={inputState.amount} name="amount" placeholder="Salary Amount" onChange={(e) => updateObject(setInputState, 'amount', Number(e.target.value) || 0)} />
                </div>
                <div className="input-control">
                    <DatePicker id='date' placeholderText="Enter a date" selected={inputState.date} dateFormat="dd/MM/yyyy" onChange={(date) => updateObject(setInputState, 'date', date)} />
                </div>
                <div className="selects input-control">
                    <select required value={inputState.category} name="category" id="category" onChange={(e) => updateObject(setInputState, 'category', e.target.value)}>
                        {categories.map((item, index) => (
                            <option value={item.value} key={index}>{item.label}</option>
                        ))}
                    </select>
                </div>
                <div className="input-control">
                    <textarea value={inputState.description} name="description" placeholder="Salary Description" onChange={(e) => updateObject(setInputState, 'description', e.target.value)} />
                </div>

                <div className="submit-btn">
                    <Button name="Add Income" icon={plus} bPad={".8rem 1.6rem"} radius="30px" bg="var(--color-accent)" type='submit' />
                </div>

            </FormStyled>
        </>
    )
}

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input, textarea, select {
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        color: rgba(34,34,96,0.9);
        &::placeholder {
            color: rgba(34,34,96,0.4);
        }
    }

    .input-control {
        input {
            width: 100%;
        }
    }
    
    .selects {
        display: flex;
        justify-content: flex-end;
        select {
            color: rgba(34,34,96,0.4);
            &:focus, &:active {
                color: rgba(34,34,96,1);
            }
        }

        .submit-btn {
            button {
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                &:hover {
                    background: var(--color-green) !important;
                }
            }
        }
    }
`

export default Form;