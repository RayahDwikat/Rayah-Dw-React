import styled from "styled-components";

const StyledButton = styled.button`
color: var(--body-text);
font-weight: 400;
font-size: 14.5px;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid var(--lines-color);
border-radius: 5px;
padding: 6px 9px;
background-color: var(--bg_default);
cursor: pointer;
`;
export function IconButton({ text, iconName, onClick }) {
    return ( 
        <StyledButton click={onClick}>
            <ion-icon name={iconName}></ion-icon>
            {text}
        </StyledButton>

    );



};