import { Input, ModalBackground, ModalContainer, TitleContainer, ButtonContainer, Button, StartAt, EndAt, DayPicker, TimePicker } from "../../styles/sideBarStyles/AddCardModalStyles";
import { useEffect, useRef } from "react";

const AddCardModal = ({openAddCardModal}) => {

  //Outside click detecting
  const ref = useRef();
  useEffect(()=>{
    const handleClickOutside=(event)=>{
      if (ref.current){
        if (!ref.current.contains(event.target)) {
          openAddCardModal();
        }
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])

  return (
    <ModalBackground>
      <ModalContainer ref={ref}>
        Starts at*
        <StartAt>
          <DayPicker type="date" value="2022-04-19" />
          <TimePicker type="time" value="00:00"/>
        </StartAt>
        Ends at*
        <EndAt>
          <DayPicker type="date" value="2022-04-19" />
          <TimePicker type="time" value="01:00"/>
        </EndAt>
        <TitleContainer>Location</TitleContainer>
        <Input placeholder="Optional" maxLength="80"></Input>
        <TitleContainer>Description</TitleContainer>
        <Input placeholder="Optional" maxLength="250"></Input>
        <TitleContainer>Participants</TitleContainer>
        <Input placeholder="Optional" maxLength="50"></Input>
        <ButtonContainer>
          <Button>Save</Button>
          <Button onClick={openAddCardModal}>Cancle</Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  )
}

export default AddCardModal;