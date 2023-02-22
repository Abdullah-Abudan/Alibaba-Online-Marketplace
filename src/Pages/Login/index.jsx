import ContainerLogSign from "../../Component/ContainerLogSign";
import FooterForm from "../../Component/FooterForm";
import Background from "../../Component/BackgroundLogSign";
import LoginForm from "./LoginForm";


function Login() {

  return (
    <Background>
      <ContainerLogSign>
       <LoginForm/>
      </ContainerLogSign>
      <FooterForm />
    </Background>
  );
}
export default Login;
