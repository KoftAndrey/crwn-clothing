import { styled } from 'styled-components';
import { BaseButton } from '../Button/ButtonStyles';

const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`

const PaymentButton = styled(BaseButton)`
  margin: 30px 0 0 auto; 
`

export {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
};
