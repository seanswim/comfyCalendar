import { DayRowContainer, DayRowWrapper } from "../../styles/calendarStyles/DayRowStyles";

const DayRow = () => {
  return (
    <DayRowContainer>
      <DayRowWrapper color={'red'}>Sun</DayRowWrapper>
      <DayRowWrapper>Mon</DayRowWrapper>
      <DayRowWrapper>Tue</DayRowWrapper>
      <DayRowWrapper>Wed</DayRowWrapper>
      <DayRowWrapper>Thu</DayRowWrapper>
      <DayRowWrapper color={'red'}>Sat</DayRowWrapper>
    </DayRowContainer>
  )
}

export default DayRow;