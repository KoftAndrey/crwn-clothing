import { useState } from 'react';
import { 
  signInAunthUserWithEmailAndPassword,  
  signInWithGooglePopup,
} from '../../utils/firebase/firebase';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './SignInForm.scss';


const defaultFormFields = {
  email: '',
  password: '',
}


const SignInForm = () => {

  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields; 

  const handleChange = e => {setFormFields({...formFields, [e.target.name]: e.target.value})};

  const signInWithGoogle =  async () => await signInWithGooglePopup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAunthUserWithEmailAndPassword(email, password);
      setFormFields(defaultFormFields);
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
      
        default:
          console.warn(err);
      }
    }
  
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <div>SignUpForm</div>
      <form onSubmit={handleSubmit}>

        <FormInput 
          label="Email" 
          inputOptions={{
            type: 'email', 
            onChange: handleChange, 
            name: 'email', 
            value: formFields.email, 
            required: true, 
          }} 
        />

        <FormInput 
          label="Password" 
          inputOptions={{
            type: 'password', 
            onChange: handleChange, 
            name: 'password', 
            value: formFields.password, 
            required: true, 
          }}  
        />

        <div className="buttons-container">
          <Button 
            btnOptions={{type: 'submit'}}
          >
            Sign in
          </Button>
          
          <Button 
            buttonType="google"
            btnOptions={{type: 'button', onClick: signInWithGoogle}}
          >
            Google sign in
          </Button>
        </div>

      </form>
    </div>
  )
}

export default SignInForm;
