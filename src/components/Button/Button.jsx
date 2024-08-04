import { 
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './ButtonStyles.jsx';

const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google',
  inverted: 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
  return {
           [BUTTON_TYPE_CLASSES.base]: BaseButton,
           [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
           [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
         }[buttonType];
}

const Button = ({ children, buttonType, btnOptions }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...btnOptions}>
      {children}
    </CustomButton>
  )
}

export default Button;

export { BUTTON_TYPE_CLASSES };
