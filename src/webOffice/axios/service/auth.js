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

const Confirmemail = async (id) => {
  return await axios.put(
    `${Host.BACKEND}${ApiEndpoints.UserEndpoints.route}${ApiEndpoints.UserEndpoints.confirmEmail}/${id}`,
    { headers: { ...config.headers } }
  );
};

const ForgotAuth = async (data) => {
  return await axios.put(
    `${Host.BACKEND}${ApiEndpoints.AuthEndpoints.route}${ApiEndpoints.AuthEndpoints.forgot}`,
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
const Me = async (token) => {
  return await axios.get(
    `${Host.BACKEND}${ApiEndpoints.UserEndpoints.route}${ApiEndpoints.UserEndpoints.me}`,
    { headers: { ...config.headers, ...token } }
  );
};

export { LoginAuth, SignupAuth, CvAuth, Confirmemail, Me,ForgotAuth };
