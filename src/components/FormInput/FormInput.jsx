import {
  Group,
  Input,
  InputLabel,
} from './FormInputStyles';


const FormInput = ({ label, inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />
      {label && <InputLabel shrink={inputOptions.value.lengt }>{label}</InputLabel>}
    </Group>
  )
}

export default FormInput;
