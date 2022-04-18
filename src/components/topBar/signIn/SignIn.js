import { Button, IdContainer, Input, NormalSignInContainer, PasswordContainer, SignInBackground, SignInContainer } from "../../../styles/topBarStyles/signInStyles/SignInStyles";
import { useState, useRef, useEffect } from "react"; 
import { FaUserCircle, FaKey } from "react-icons/fa";

const SignIn = ({ openSginInModal }) => {

  //Outside click detecting
  const ref = useRef();
  useEffect(()=>{
    const handleClickOutside=(event)=>{
      if (ref.current){
        if (!ref.current.contains(event.target)) {
          openSginInModal();
        }
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [])

  return (
    <SignInBackground>
      <SignInContainer ref={ref}>
        <NormalSignInContainer>
          <IdContainer>
            <FaUserCircle />
            <Input />
          </IdContainer>
          <PasswordContainer>
            <FaKey />
            <Input type='password'/>
          </PasswordContainer>
          <Button>Sign In</Button>
        </NormalSignInContainer>
      </SignInContainer>
    </SignInBackground>
  )
}

export default SignIn;