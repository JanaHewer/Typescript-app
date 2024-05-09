
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { LoginformName, InputsContainer, LoginFormComponent,} from "./styles";
import { useFormik } from "formik";
import { LoginformValue } from "./types";

function LoginForm() {

  const formik =useFormik({
    initialValues:{
      email: '',
      password: '',
    } as LoginformValue,
    onSubmit: (values: LoginformValue)=>{
      console.log(values);
      
    }
  });
  console.log(formik);
  
  return (
    <LoginFormComponent onSubmit={formik.handleSubmit}>
      <LoginformName>Login form</LoginformName>
      <InputsContainer>
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email" 
          onInputChange={formik.handleChange}
          value ={formik.values.email}
          />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          onInputChange={formik.handleChange} 
          value={formik.values.password}/>
      </InputsContainer>
      <Button type="submit" name="Login" />
    </LoginFormComponent>
  )
}

export default LoginForm;