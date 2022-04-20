import { SideBarContainer, SideBarWrapper, SideBarText, SideBarDay, AddCardButton } from "../../styles/sideBarStyles/SideBarStyles";
import AddCard from "./AddCard";
import AddCardModal from "./addCardModal/AddCardModal";
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

  return (
    <SideBarContainer>
      <SideBarWrapper>
        <SideBarText>To Do</SideBarText>
        <SideBarDay>{`${targetMonth}.${targetDay}`}</SideBarDay>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        <AddCardButton onClick={openAddCardModal}><AddCard/></AddCardButton>
        {openCardModal ? <AddCardModal openAddCardModal={openAddCardModal}/> : null}
      </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar;