import { SideBarContainer, SideBarWrapper, SideBarText, SideBarDay, AddCardButton } from "../../styles/sideBarStyles/SideBarStyles";
import AddCard from "./AddCard";
import AddCardModal from "./AddCardModal";
import TaskCard from "./TaskCard";
import { useState } from "react";


const SideBar = () => {

  const [openCardModal, setOpenCardModal] = useState(false);
  const openAddCardModal = (event) => {
    setOpenCardModal(!openCardModal);
    if (event) event.stopPropagation();
  }

  return (
    <SideBarContainer>
      <SideBarWrapper>
        <SideBarText>To Do</SideBarText>
        <SideBarDay>04.19</SideBarDay>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        <AddCardButton onClick={openAddCardModal}><AddCard/></AddCardButton>
        {openCardModal ? <AddCardModal openAddCardModal={openAddCardModal}/> : null}
      </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar;