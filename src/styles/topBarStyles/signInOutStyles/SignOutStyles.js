import styled from "styled-components";

export const SignOutBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const SignOutContainer = styled.div`
  background-color: white;
  width: 100%auto;
  border-radius: 15px;
  padding: 3rem 3rem 1rem 3rem;

  display: flex;
  flex-direction: column;
`;

export const Button = styled.div`
  border-radius: 15px;
  background-color: purple;
  font-size: 2rem;
  border: none;
  color: white;
  width: 5remauto;
  margin: 2rem 1rem 1rem 1rem;
  cursor: pointer;
  text-align: center;
  
  :disabled {
    opacity: 0.5;
  }
`;