import defaultProfile from "../../img/profile.png";
import user1 from "../../img/user1.jpg";
import user2 from "../../img/user2.jpg";
import { ProfileIconContainer, ProfileIconImg } from '../../styles/topBarStyles/ProfileIconStyles';
import { useState } from "react";
import SignIn from "./signInOut/SignIn";
import { useSelector } from "react-redux";
import SignOut from "./signInOut/SignOut";
import { useEffect } from "react";

const ProfileIcon = () => {

  const [openInModal, setOpenInModal] = useState(false);
  const [openOutModal, setOpenOutModal] = useState(false);
  const openSignInModal = (event) => {
    setOpenInModal(!openInModal);
    if (event) event.stopPropagation();
  }
  const openSignOutModal = (event) => {
    setOpenOutModal(!openOutModal);
    if (event) event.stopPropagation();
  }
  const states = useSelector((state) => state.reducer.states);
  let profile = defaultProfile;
  if (states.signin) {
    if (states.user.name === 'user1') profile = user1;
    if (states.user.name === 'user2') profile = user2;
  }

  return (
    <ProfileIconContainer>
      {states.signin ? <ProfileIconImg src={profile} onClick={openSignOutModal}/> : <ProfileIconImg src={profile} onClick={openSignInModal}/>}
      {openInModal ? <SignIn openSignInModal={openSignInModal}/>: null}
      {openOutModal ? <SignOut openSignOutModal={openSignOutModal}/> : null}
    </ProfileIconContainer>
  )
}

export default ProfileIcon;