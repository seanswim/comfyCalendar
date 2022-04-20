import { Button, IdContainer, Input, NormalSignInContainer, PasswordContainer, SignInBackground, SignInContainer } from "../../../styles/topBarStyles/signInStyles/SignInStyles";
import { useState, useRef, useEffect } from "react"; 
import { FaUserCircle, FaKey } from "react-icons/fa";
import sha256 from 'crypto-js/sha256';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = ({ openSginInModal }) => {

  const passwordHash = sha256('1q2w3e4r').toString();

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
    const auth = getAuth();
    signInWithEmailAndPassword(auth, )
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