import styled from "styled-components";

export const SignInBackground = styled.div`
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

export const SignInContainer = styled.div`
  background-color: white;
  width: 100%auto;
  border-radius: 15px;
  padding: 3rem 3rem 1rem 3rem;

  display: flex;
  flex-direction: column;
`;

export const NormalSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const IdContainer = styled.div`
`;

export const PasswordContainer = styled.div`
`;

export const Input = styled.input`
  font-size: 1.5rem;
  border: none;
  border-bottom: 2px solid purple;
  padding: 0.3rem 0.8rem;
  margin: 0.5rem 0.5rem;
  :focus {
    outline: none;
  }
`;

export const Button = styled.button`
  border-radius: 15px;
  background-color: purple;
  font-size: 2rem;
  border: none;
  color: white;
  width: 5remauto;
  margin: 2rem 1rem 1rem 1rem;
  cursor: pointer;
  
  :disabled {
    opacity: 0.5;
  }
`;