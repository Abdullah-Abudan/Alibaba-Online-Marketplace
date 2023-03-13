import { Navigate } from "react-router-dom";
const Protected = (props) => {
  if (!props.isLoggedIn) {
    return <Navigate to="/" />;
  }
  return props.children;
};
export default Protected;
