import { useState } from 'react';
import { 
  createAunthUserWithEmailAndPassword, 
  createUserDocumentFromAuth, 
} from '../../utils/firebase/firebase';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './SignUpForm.scss';


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}


const SignUpForm = () => {

  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields; 

  const handleChange = e => {setFormFields({...formFields, [e.target.name]: e.target.value})};

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (confirmPassword !== password) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await createAunthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (err) {
      if (err.code === 'auth/email-is-already-in-use') {
        alert('Cannot create user, email already in use.')
      } else {
        console.warn('User ceation encountered an error.', err);
      }
    }
  
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <div>SignUpForm</div>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name" 
          inputOptions={{
            type: 'text', 
            onChange: handleChange, 
            name: 'displayName', 
            value: formFields.displayName, 
            required: true, 
          }}
        />

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

        <FormInput 
          label="Confirm password" 
          inputOptions={{
            type: 'password', 
            onChange: handleChange, 
            name: 'confirmPassword', 
            value: formFields.confirmPassword, 
            required: true, 
          }} 
        />

        <Button 
          btnOptions={{type: 'submit'}}
        >
          Sign up
        </Button>
      </form>
    </div>
  )
}

export default SignUpForm;
