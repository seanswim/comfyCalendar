import { Input, ModalBackground, ModalContainer, TitleContainer, ButtonContainer, Button, StartAt, EndAt, DayPicker, TimePicker, Participants } from "../../../styles/sideBarStyles/cardModalStyles/AddEditCardModalStyles";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doc, collection, setDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { setLastUpdate } from "../../../redux/Slice";
import Participant from "./participant/Participant";

const AddEditCardModal = ({openAddCardModal, data, action}) => {

  const states = useSelector((state) => state.reducer.states);
  const dispatch = useDispatch();

  //Setting default values of states
  let startDateInit;
  let startTimeInit;
  let endDateInit;
  let endTimeInit;
  let locationInit;
  let descriptionInit;
  let participantListInit;
  if (action === 'add') {
    startDateInit = states.targetDate.replaceAll(' ', '-');
    startTimeInit = "00:00";
    endDateInit = states.targetDate.replaceAll(' ', '-');
    endTimeInit = "00:00";
    locationInit = '';
    descriptionInit = '';
    participantListInit = [states.user.name];
  }
  if (action === 'edit') {
    startDateInit = new Date(data.startDate.seconds*1000).toISOString().substring(0, 10);
    startTimeInit = data.startTime;
    endDateInit = new Date(data.endDate.seconds*1000).toISOString().substring(0, 10);
    endTimeInit = data.endTime;
    locationInit = data.location;
    descriptionInit = data.description;
    participantListInit = data.participants;
  }
  const [startDate, setSatrtMonth] = useState(startDateInit);
  const [startTime, setSatrtTime] = useState(startTimeInit);
  const [endDate, setEndDate] = useState(endDateInit);
  const [endTime, setEndTime] = useState(endTimeInit);
  const [location, setLocation] = useState(locationInit);
  const [description, setDescription] = useState(descriptionInit);
  const [participants, setParticipants] = useState('');
  const [participantList, setParticipantList] = useState(participantListInit);

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
      participants: participantList
    }

    if (action === 'add') {
      //Create a plan
      const newPlan = doc(collection(db, `users/${states.user.id}/plans`));
      obj.id = newPlan.id;
      await setDoc(newPlan, obj);
      //share a plan
      const usersRef = collection(db, "users");
      participantList.forEach( async (item) => {
        const q = query(usersRef, where("name", "==", item));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach( async (data) => {
          let sharePlan = doc(db, `users/${data.id}/plans/${obj.id}`);
          await setDoc(sharePlan, obj);
        });
      })
    }

    if (action === 'edit') {
      //Edit a plan
      const editingPlan = doc(db, `users/${states.user.id}/plans/${data.id}`);
      obj.id = data.id;
      await setDoc(editingPlan, obj);
      //share a edited plan
      const usersRef = collection(db, "users");
      participantList.forEach( async (item) => {
        const q = query(usersRef, where("name", "==", item));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach( async (data) => {
          let sharePlan = doc(db, `users/${data.id}/plans/${obj.id}`);
          await setDoc(sharePlan, obj);
        });
      })
    }
    dispatch(setLastUpdate(new Date()));
    openAddCardModal();
  }

  //Handling participants list
  const handleEnter = (event) => {
    let list = [...participantList] 
    if(event.keyCode === 13) {
      event.preventDefault();
      const duplicationCheck = participantList.filter((item) => item === participants);
      if (duplicationCheck.length === 0) {
        list.push(participants);
        setParticipantList(list);
      }
      setParticipants('')
    }
  }
  const handleParticipantsInput = (event) => {
    setParticipants(event.target.value);
  }
  const deleteParticipant = (event, key) => {
    let list = participantList.filter((item, index) => index !== key);
    setParticipantList(list);
    if (event) event.stopPropagation();
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
        <Input maxLength="80" value={location} onChange={handleLocationInput} />
        <TitleContainer>Participants</TitleContainer>
        <Input placeholder="Press Enter" maxLength="50" value={participants} onChange={handleParticipantsInput} onKeyDown={handleEnter}/>
        <Participants>
          {participantList.map((item, index) => <Participant key={index} index={index} name={item} deleteParticipant={deleteParticipant}></Participant>)}
        </Participants>
        <ButtonContainer>
          <Button disabled={description.length > 0 ? null : 'disabled'} onClick={submit}>Save</Button>
          <Button onClick={openAddCardModal}>Cancle</Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  )
}

export default AddEditCardModal;