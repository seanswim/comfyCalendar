import { Content, CreatedBy, MenuContainer, TaskCardContainer, TaskCardWrapper, DateContainer, TimeContainer, Title, DateAndTimeContainer, DateAndTimeWrapper } from "../../styles/sideBarStyles/TaskCardStyles";
import { FaEllipsisV } from "react-icons/fa";

const TaskCard = ({ data }) => {

  const startDate = new Date(data.startDate.seconds*1000).toISOString().substring(0, 10);
  const endDate = new Date(data.endDate.seconds*1000).toISOString().substring(0, 10);

  return (
    <TaskCardContainer>
      <TaskCardWrapper>
        <DateAndTimeContainer>
          <DateAndTimeWrapper>
            <DateContainer>{startDate}</DateContainer>
            <TimeContainer>{data.startTime}</TimeContainer>
          </DateAndTimeWrapper>
          <span>~</span>
          <DateAndTimeWrapper>
            <DateContainer>{endDate}</DateContainer>
            <TimeContainer>{data.endTime}</TimeContainer>
          </DateAndTimeWrapper>
        </DateAndTimeContainer>
        <CreatedBy>Created by {data.createdBy}</CreatedBy>
        <Title>Description</Title>
        <Content>{data.description}</Content>
        <Title>Location</Title>
        <Content>{data.location? data.location : '-'}</Content>
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