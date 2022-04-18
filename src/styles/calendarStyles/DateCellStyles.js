import styled from "styled-components";

export const DateCellContainer = styled.span`
  background-color: beige;
  border-radius: 15px;
  width: 100%;
  height: 5rem;
  margin: 1rem;
  cursor: pointer;
  
  transition: all 0.4s ease-in-out;
  :hover {
    transform: scale(1.5);
    box-shadow: 2px 2px 5px grey;
  }
`;