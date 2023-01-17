import {ChangeEvent, FormEvent, useState} from 'react';
import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import './sign-in-form.styles';
import {ButtonContainer, SignUpContainer} from './sign-in-form.styles';
import {useDispatch} from 'react-redux';
import {googleSignInStart, emailSignInStart} from '../../store/user/user.action';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));

      resetFormFields();
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})
  }

  return (
    <SignUpContainer>
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          name='email'
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label='Password'
          type='password'
          required
          name='password'
          value={password}
          onChange={handleChange}
        />

        <ButtonContainer>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
        </ButtonContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;