import axios from "axios";
import { Host, ApiEndpoints } from "../common/apiEndPoint";

const config = {
  Headers: {
    "Content-Type": "application/json",
  },
};

const SignupAuth = async (data) => {
  return await axios.post(
    `${Host.BACKEND}${ApiEndpoints.UserEndpoints.route}${ApiEndpoints.UserEndpoints.signup}`,
    data,
    config
  );
};
const LoginAuth = async (data) => {
  return await axios.post(
    `${Host.BACKEND}${ApiEndpoints.UserEndpoints.route}${ApiEndpoints.UserEndpoints.login}`,
    data,
    config
  );
};
const CvAuth = async (data) => {
  return await axios.post(
    `${Host.BACKEND}${ApiEndpoints.cvUserEndpoints.route}${ApiEndpoints.cvUserEndpoints.createCv}`,
    data,
    config
  );
};

export { LoginAuth, SignupAuth , CvAuth };
