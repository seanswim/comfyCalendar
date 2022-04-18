import styled from "styled-components";

export const DayOfWeekContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid black;
`;

export const DayOfWeekWrapper = styled.span`
  padding: 1rem 0;
  width: 100%;
  color: ${props => props.color}
`;