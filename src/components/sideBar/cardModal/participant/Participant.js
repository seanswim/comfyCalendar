import { ParticipantContainer, Text, Icon } from "../../../../styles/sideBarStyles/cardModalStyles/participantStyles/ParticipantStyles";
import { FaTimes } from "react-icons/fa";

const Participant = ({ index, name, deleteParticipant }) => {
  return (
    <ParticipantContainer>
      <Text>
        {name}
      </Text>
      <Icon onClick={(event) => deleteParticipant(event, index)}>
        <FaTimes size={15}/>
      </Icon>
    </ParticipantContainer>
  )
}

export default Participant;