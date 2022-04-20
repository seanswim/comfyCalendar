import { Button, IdContainer, Input, NormalSignInContainer, PasswordContainer, SignInBackground, SignInContainer, InvalidRequest } from "../../../styles/topBarStyles/signInStyles/SignInStyles";
import { useState, useRef, useEffect } from "react"; 
import { useDispatch } from "react-redux";
import { FaUserCircle, FaKey } from "react-icons/fa";
import { auth, db } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import sha256 from 'crypto-js/sha256';
import { setUserState } from "../../../redux/Slice";


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

  //Sign in and update states
  const handleSignin = () => {
    let submitId = id;
    if (!id.includes('@')) submitId = `${id}@comfy.com` 
    signInWithEmailAndPassword(auth, submitId, sha256(password).toString()).then( async (userCredential) => {
      const userId = userCredential.user.uid;
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      let payload = { 
        user: { id: docSnap.data().id, email: docSnap.data().email, img: docSnap.data().img, name: docSnap.data().name },
        signin: true
      }
      dispatch(setUserState(payload))
      openSginInModal();
    })
    .catch((error) => {
      console.log(error);
      setInvalidRequest(true);
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
          {invalidRequest ? <InvalidRequest>Invalid email/password</InvalidRequest> : null}
          <Button onClick={handleSignin}>Sign In</Button>
        </NormalSignInContainer>
      </SignInContainer>
    </SignInBackground>
  )
}

export default SignIn;