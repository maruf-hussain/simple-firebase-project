
import app from '../../Firebase/Firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';



const Login = () => {
    const [user, setUser] = useState();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();



    const handleGoogleSignIn = () =>{
       
    signInWithPopup(auth,provider)
    .then(result =>{
        const logedUser = result.user;
        setUser(logedUser);
    })
    .catch(error =>{
        console.log('error',error.massege)
    })
    }

    const SignOut = () =>{
        signOut(auth)
        .then(result => {
           
         setUser(null);
        })
        .then(error => {
            console.log('efljf', error.massege)
        })
    }
    return (
        <div>
            {user ? <button onClick={SignOut}>Sign Out</button> : <button onClick={handleGoogleSignIn}>Google Login</button>
            
}
            
            {user  && 
        <div>
            <img src={user.photoURL} alt=''/>
        <h2>User Name: {user.displayName}</h2>
        <h4>User Email: {user.email}</h4>
    </div>} 
        </div>

     
    );
};

export default Login;