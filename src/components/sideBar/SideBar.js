import { SideBarContainer, SideBarWrapper, SideBarText, SideBarDay, AddCardButton } from "../../styles/sideBarStyles/SideBarStyles";
import AddCard from "./AddCard";
import AddEditCardModal from "./cardModal/AddEditCardModal";
import TaskCard from "./TaskCard";
import { useState } from "react";
import { useSelector } from "react-redux";

const SideBar = () => {

  const [openCardModal, setOpenCardModal] = useState(false);
  const openAddCardModal = (event) => {
    setOpenCardModal(!openCardModal);
    if (event) event.stopPropagation();
  }
  const states = useSelector((state) => state.reducer.states);
  const [targetYearm, targetMonth, targetDay] = states.targetDate.split(' ');

  //Filter out plans
  const targetDateForm = new Date (states.targetDate.replaceAll(' ','-')).getTime()/1000;
  const todoList = states.plans.filter((item) => {
    if (item.startDate.seconds <= targetDateForm && targetDateForm <= item.endDate.seconds) {
      return item;
    }
  });

  return (
    <SideBarContainer>
      <SideBarWrapper>
        <SideBarText>To Do</SideBarText>
        <SideBarDay>{`${targetMonth}.${targetDay}`}</SideBarDay>
        {todoList.map((item, index) => <TaskCard key={index} data={item}/>)}
        <AddCardButton onClick={openAddCardModal}><AddCard/></AddCardButton>
        {openCardModal ? <AddEditCardModal openAddCardModal={openAddCardModal} action='add'/> : null}
      </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar;