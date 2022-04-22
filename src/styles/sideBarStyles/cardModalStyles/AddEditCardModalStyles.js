import styled from "styled-components";

export const ModalBackground = styled.div`
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

export const ModalContainer = styled.div`
  background-color: white;
  width: 25%;
  border-radius: 15px;
  padding: 3rem 3rem 1rem 3rem;

  display: flex;
  flex-direction: column;
`;


export const TitleContainer = styled.div`
  margin: 1rem 0;
  font-size: 1.2rem;
`;

export const Input = styled.textarea`
  margin: 0 0 0 1rem;
  padding: 0 0 0 1rem;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid purple;
  resize: none;
  :focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  border-radius: 15px;
  background-color: purple;
  font-size: 1.5rem;
  border: none;
  color: white;
  width: 5remauto;
  margin: 2rem 1rem 1rem 1rem;
  cursor: pointer;
  
  :disabled {
    opacity: 0.5;
  }
`;

export const StartAt = styled.div`
  display: flex;
  margin: 0 0 1rem 0;
`;

export const EndAt = styled.div`
  padding: 0 0 1rem 0;
  border-bottom: 2px dotted black;
`;

export const DayPicker = styled.input`
  border: none;
  margin: 0.2rem;
  border-radius: 10px;
  background-color: lightblue;
`;

export const TimePicker = styled.input`
  border: none;
  margin: 0.2rem;
  border-radius: 10px;
  background-color: lightcoral;
`;

export const Participants = styled.div`
  display: flex;
  flex-wrap: wrap;
`;