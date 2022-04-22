import { Input, ModalBackground, ModalContainer, TitleContainer, ButtonContainer, Button, StartAt, EndAt, DayPicker, TimePicker } from "../../../styles/sideBarStyles/cardModalStyles/AddEditCardModalStyles";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doc, collection, setDoc } from "firebase/firestore";
import { db, auth } from "../../../firebase";
import { setLastUpdate } from "../../../redux/Slice";

const AddEditCardModal = ({openAddCardModal, data, action}) => {

  const states = useSelector((state) => state.reducer.states);
  const dispatch = useDispatch();

  let startDateInit;
  let startTimeInit;
  let endDateInit;
  let endTimeInit;
  let locationInit;
  let descriptionInit;

  if (action === 'add') {
    startDateInit = states.targetDate.replaceAll(' ', '-');
    startTimeInit = "00:00";
    endDateInit = states.targetDate.replaceAll(' ', '-');
    endTimeInit = "00:00";
    locationInit = '';
    descriptionInit = '';
  }
  if (action === 'edit') {
    startDateInit = new Date(data.startDate.seconds*1000).toISOString().substring(0, 10);
    startTimeInit = data.startTime;
    endDateInit = new Date(data.endDate.seconds*1000).toISOString().substring(0, 10);
    endTimeInit = data.endTime;
    locationInit = data.location;
    descriptionInit = data.description;
  }

  const [startDate, setSatrtMonth] = useState(startDateInit);
  const [startTime, setSatrtTime] = useState(startTimeInit);
  const [endDate, setEndDate] = useState(endDateInit);
  const [endTime, setEndTime] = useState(endTimeInit);
  const [location, setLocation] = useState(locationInit);
  const [description, setDescription] = useState(descriptionInit);
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
  const handleStartDateInput = (event) => {
    setSatrtMonth(event.target.value);
    if (new Date(startDate) > new Date(endDate)) setEndDate(event.target.value);
  }
  const handleStartTimeInput = (event) => {
    setSatrtTime(event.target.value);
    setEndTime(event.target.value);
  }
  const handleEndDateInput = (event) => setEndDate(event.target.value);
  const handleEndTimeInput = (event) => setEndTime(event.target.value);

  //Submit
  const submit = async () => {
    const obj = {
      description: description,
      startDate: new Date(startDate),
      startMonth: new Date(startDate.slice(0,-3)),
      startTime: startTime,
      endDate: new Date(endDate),
      endMonth: new Date(endDate.slice(0,-3)),
      endTime: endTime,
      location: location,
      createdBy: states.user.name,
      updatedAt: new Date(),
      createdAt: new Date(),
    }

    if (action === 'add') {
      const newPlan = doc(collection(db, `users/${states.user.id}/plans`));
      obj.id = newPlan.id;
      await setDoc(newPlan, obj);
    }

    if (action === 'edit') {
      const editingPlan = doc(db, `users/${states.user.id}/plans/${data.id}`);
      obj.id = data.id;
      await setDoc(editingPlan, obj);
    }
    dispatch(setLastUpdate(new Date()));
    openAddCardModal();
  }

  return (
    <ModalBackground>
      <ModalContainer ref={ref}>
        Starts at*
        <StartAt>
          <DayPicker type="date" value={startDate} onChange={handleStartDateInput} />
          <TimePicker type="time" value={startTime} onChange={handleStartTimeInput}/>
        </StartAt>
        Ends at*
        <EndAt>
          <DayPicker type="date" value={endDate} onChange={handleEndDateInput} min={startDate}/>
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

export default AddEditCardModal;