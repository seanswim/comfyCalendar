import { Content, CreatedBy, MenuContainer, TaskCardContainer, TaskCardWrapper, Time, Title } from "../../styles/sideBarStyles/TaskCardStyles";
import { FaEllipsisV } from "react-icons/fa";

const TaskCard = () => {
  return (
    <TaskCardContainer>
      <TaskCardWrapper>
        <Time>00:00 ~ 24:00</Time>
        <CreatedBy>Created by</CreatedBy>
        <Title>Description</Title>
        <Content>Let's go jeju with friends</Content>
        <Title>Location</Title>
        <Content>palisadias park</Content>
        <Title>Participants</Title>
        <Content>palisadias park</Content>
      </TaskCardWrapper>
      <MenuContainer>
        <FaEllipsisV size={20}/>
      </MenuContainer>
    </TaskCardContainer>
  )
} 

export default TaskCard;