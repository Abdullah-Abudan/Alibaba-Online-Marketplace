import ContainerLogSign from "../../Component/ContainerLogSign";
import FooterForm from "../../Component/FooterForm";
import Background from "../../Component/BackgroundLogSign";
import SignupForm from "./SignupForm";

function Signup() {


  return (
    <Background>
      
      <ContainerLogSign>
       <SignupForm/>
      </ContainerLogSign>

      <FooterForm />
    </Background>
  );
}
export default Signup;
