import profile from "../../img/profile.png";
import { ProfileIconContainer, ProfileIconImg } from '../../styles/topBarStyles/ProfileIconStyles';
import { useState } from "react";
import SignIn from "./signIn/SignIn";

const ProfileIcon = () => {

  const [openModal, setOpenModal] = useState(false);
  const openSginInModal = (event) => {
    setOpenModal(!openModal);
    if (event) event.stopPropagation();
  }

  return (
    <ProfileIconContainer>
      <ProfileIconImg src={profile} onClick={openSginInModal}/>
      {openModal ? <SignIn openSginInModal={openSginInModal}/>: null}
    </ProfileIconContainer>
  )
}

export default ProfileIcon;