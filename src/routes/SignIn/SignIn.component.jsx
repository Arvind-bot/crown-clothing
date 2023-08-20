import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const userAuth = await signInWithGooglePopup();
      if(!userAuth?.error){
        const { user } = userAuth || {};
        const userDocRef = await createUserDocumentFromAuth(user);
      }
    } catch (error) {
      console.error('error',error.message || 'Sorry, something went wrong.');
    }
  };

  return (
    <div>
      <h1>Sign In Page</h1> 
      <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  );
};

export default SignIn;
