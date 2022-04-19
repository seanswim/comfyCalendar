import { SideBarContainer, SideBarWrapper, SideBarText, SideBarDay } from "../../styles/sideBarStyles/SideBarStyles";
import AddCard from "./AddCard";
import TaskCard from "./TaskCard";

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarWrapper>
        <SideBarText>To Do</SideBarText>
        <SideBarDay>04.19</SideBarDay>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        <TaskCard></TaskCard>
        <AddCard></AddCard>
      </SideBarWrapper>
    </SideBarContainer>
  )
}

export default SideBar;