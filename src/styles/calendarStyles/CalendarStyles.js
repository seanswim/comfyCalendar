import styled from "styled-components";

export const CalendarContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;

  background-color: white;
  border-radius: 15px;
  margin: 1rem;
  box-shadow: 2px 2px 5px grey;

  width: 60%;
`;

export const MonthYearContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: 1rem;
`;

export const YearContainer = styled.div`
  font-size: 1rem;
  font-weight: 300;
`;

export const MonthContainer = styled.div`
  font-size: 3em;
  font-weight: 500;

  ::selection {
    color: none;
    background: none;
  }
`;

export const Table = styled.div`
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Arrow = styled.span`
  color: grey;
  padding: 0 1.5rem;
  cursor: pointer;

  :hover {
    color: black;
  }
`;