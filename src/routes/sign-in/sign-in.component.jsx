import {createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>
        Sign in in with google popup
      </button>
    </div>
  );
};

export default SignIn;