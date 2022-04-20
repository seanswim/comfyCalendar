import { Button, IdContainer, Input, NormalSignInContainer, PasswordContainer, SignInBackground, SignInContainer } from "../../../styles/topBarStyles/signInStyles/SignInStyles";
import { useState, useRef, useEffect } from "react"; 
import { FaUserCircle, FaKey } from "react-icons/fa";
import sha256 from 'crypto-js/sha256';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

const SignIn = ({ openSginInModal }) => {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('')

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

  //Sign in with Email and password
  const handleSignin = () => {
    signInWithEmailAndPassword(auth, id, sha256(password).toString()).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  const handleIdChange = (e) => setId(e.target.value)
  const handlePWChange = (e) => setPassword(e.target.value)

  return (
    <SignInBackground>
      <SignInContainer ref={ref}>
        <NormalSignInContainer>
          <IdContainer>
            <FaUserCircle />
            <Input value={id} onChange={handleIdChange}/>
          </IdContainer>
          <PasswordContainer>
            <FaKey />
            <Input value={password} onChange={handlePWChange} type='password'/>
          </PasswordContainer>
          <Button onClick={handleSignin}>Sign In</Button>
        </NormalSignInContainer>
      </SignInContainer>
    </SignInBackground>
  )
}

export default SignIn;