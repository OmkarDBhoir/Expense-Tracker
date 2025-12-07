import { JSX } from "react";
import styled from "styled-components"

interface ButtonPros {
    name?: string;
    icon?: JSX.Element;
    onClick?: () => void;
    bg?: string;
    bPad?: string;
    color?: string;
    radius?: string;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonPros> = ({ name, icon, onClick, bg, bPad, color, radius, type }) => {
    return (
        <>
            <ButtonStyled type={type ? type : 'button'} style={{ background: bg, padding: bPad, borderRadius: radius, color: color }} onClick={onClick}>
                {icon}
                {name}
            </ButtonStyled>
        </>
    )
}


const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: initial;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: 2rem;
`

export default Button;