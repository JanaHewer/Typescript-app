import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ButtonPropsStyled {
    mainButton?: boolean;
}

const commonBoxStyles = css`
display:flex;
align-items: center;
justify-content: center;
width:250px;
height: 250px;
`;

export const Lesson08Component = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 30px;
 padding: 40px;
`;

export const BoxComponent = styled.div`
${commonBoxStyles};
background-color: #4FB9E0;
`;

export const InfoBoxComponent = styled.div`
  ${commonBoxStyles}
  background: #C22BEB;
  font-size: 45px;
`


export const ButtonComponent = styled.button<ButtonPropsStyled>`
width: 200px;
height: 70px;
border: none;
/* background: #4FE0D9; */
background: ${({ mainButton }) => mainButton ? "#E84162" : "#93E47B"};
border-radius: 6px;
font-size: 24px;
padding: 10px;
cursor: pointer;
`;