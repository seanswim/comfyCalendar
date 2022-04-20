import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import { SignOutBackground, SignOutContainer, Button } from "../../../styles/topBarStyles/signInOutStyles/SignOutStyles";
import { useEffect, useRef } from "react";
import { resetUserState } from "../../../redux/Slice";
import { useDispatch } from "react-redux";

const SignOut = ({ openSignOutModal }) => {

  //Outside click detecting
  const ref = useRef();
  useEffect(()=>{
    const handleClickOutside=(event)=>{
      if (ref.current){
        if (!ref.current.contains(event.target)) {
          openSignOutModal();
        }
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])

  const dispatch = useDispatch();
  const initiateSignOut = () => {
    signOut(auth).then(() => {
      dispatch(resetUserState())
      openSignOutModal()
    }).catch((error) => {
      console.error(error)
    });
  }

  return (
    <SignOutBackground>
      <SignOutContainer ref={ref}>
        Do you really wish to leave? :(
        <Button onClick={initiateSignOut}>Sign Out</Button>
      </SignOutContainer>
    </SignOutBackground>
  )
}

export default SignOut;