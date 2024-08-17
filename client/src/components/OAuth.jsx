// import React from 'react'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase';
import { signInSuccess,signInFailure } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
const OAuth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleOAuth = async ()=>{
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth,provider);
            // console.log(result);

            const res = await fetch ('/api/auth/google',{
                method : 'POST',
                headers :{
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({name : result?.user?.displayName , email : result?.user?.email, photo : result?.user?.photoURL}),
            })
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            dispatch(signInFailure(error.message));
            // console.error(error);
        }
    }
  return (
    <button onClick={handleGoogleOAuth} type="button" className="my-5 bg-red-700 p-3 rounded-sm uppercase hover:opacity-85 text-white w-full">
        Continue With Google
    </button>
  )
}

export default OAuth;