import {createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up/sign-up-form.component';

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

      <SignUpForm />
    </div>
  );
};

export default SignIn;