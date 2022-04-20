import { Input, ModalBackground, ModalContainer, TitleContainer, ButtonContainer, Button, StartAt, EndAt, DayPicker, TimePicker } from "../../../styles/sideBarStyles/addCardModalStyles/AddCardModalStyles";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { doc, collection, setDoc } from "firebase/firestore";
import { db, auth } from "../../../firebase";

const AddCardModal = ({openAddCardModal}) => {

  const states = useSelector((state) => state.reducer.states);
  const [startMonth, setSatrtMonth] = useState(states.targetDate.replaceAll(' ', '-'));
  const [startTime, setSatrtTime] = useState("00:00");
  const [endMonth, setEndMonth] = useState(states.targetDate.replaceAll(' ', '-'));
  const [endTime, setEndTime] = useState("00:00");
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [participants, setParticipants] = useState([null]);


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

  //Input handlers
  const handleLocationInput = (event) => setLocation(event.target.value);
  const handleDescriptionInput = (event) => setDescription(event.target.value);
  const handleStartMonthInput = (event) => {
    setSatrtMonth(event.target.value);
    if (new Date(startMonth) > new Date(endMonth)) setEndMonth(event.target.value);
  }
  const handleStartTimeInput = (event) => {
    setSatrtTime(event.target.value);
    setEndTime(event.target.value);
  }
  const handleEndMonthInput = (event) => setEndMonth(event.target.value);
  const handleEndTimeInput = (event) => setEndTime(event.target.value);

  //Submit
  const submit = async () => {
    const newPlan = doc(collection(db, `users/${states.user.id}/plans`));
    await setDoc(newPlan, {
      id: newPlan.id,
      description: description,
      startAt: startMonth + ' ' + startTime,
      endAt: endMonth + ' ' + endTime,
      location: location,
      createdBy: states.user.name,
      updatedAt: new Date(),
      createdAt: new Date(),
    });
    openAddCardModal();
  }

  return (
    <ModalBackground>
      <ModalContainer ref={ref}>
        Starts at*
        <StartAt>
          <DayPicker type="date" value={startMonth} onChange={handleStartMonthInput} />
          <TimePicker type="time" value={startTime} onChange={handleStartTimeInput}/>
        </StartAt>
        Ends at*
        <EndAt>
          <DayPicker type="date" value={endMonth} onChange={handleEndMonthInput} min={startMonth}/>
          <TimePicker type="time" value={endTime} onChange={handleEndTimeInput} />
        </EndAt>
        <TitleContainer>Description *</TitleContainer>
        <Input maxLength="250" value={description} onChange={handleDescriptionInput} />
        <TitleContainer>Location</TitleContainer>
        <Input placeholder="Optional" maxLength="80" value={location} onChange={handleLocationInput} />
        <TitleContainer>Participants</TitleContainer>
        <Input placeholder="Optional" maxLength="50" />
        <ButtonContainer>
          <Button disabled={description.length > 0 ? null : 'disabled'} onClick={submit}>Save</Button>
          <Button onClick={openAddCardModal}>Cancle</Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  )
}

export default AddCardModal;