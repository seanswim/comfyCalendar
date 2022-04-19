import styled from "styled-components";

export const TaskCardContainer = styled.div`
  border-radius: 10px;
  color: black;
  padding: 0.3rem;
  background-color: white;
  box-shadow: 2px 2px 5px grey;
  margin: 1rem 0;

  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TaskCardWrapper = styled.div`
  margin: 0.5rem;
  font-size: 1rem;
  font-weight: 300;
`;

export const MenuContainer = styled.div`
  opacity: 0.5;
  margin: 0.5rem;
  cursor: pointer;
  right: -10px;
  :hover {
    opacity: 1;
  }

  position: absolute;
  right: 5%;
`;

export const Time = styled.div`
  font-size: 1.5rem;
`;

export const CreatedBy = styled.div`
  color: grey;
  font-size: 0.8rem;
  margin: 0 0 1rem 0;
`;

export const Title = styled.div`
  margin: 0 0 0.5rem 0;
`;

export const Content = styled.div`
  margin: 0 0 0.5rem 0.5rem;
  opacity: 0.7;
`;



