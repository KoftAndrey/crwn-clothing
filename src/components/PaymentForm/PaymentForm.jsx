import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '../Button/Button';
import { BUTTON_TYPE_CLASSES } from '../Button/Button';
import { PaymentFormContainer, FormContainer } from './PaymentFormStyles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    
  }

  return (
    <PaymentFormContainer>
      <FormContainer>  
        <h2>Credit Card Payment: </h2>  
        <CardElement/>
        <Button btnOptions={{buttonType: BUTTON_TYPE_CLASSES.inverted}}>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
