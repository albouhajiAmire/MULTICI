import axios from "axios";
import { ApiEndpoints } from "../common/apiEndPoint";

const config = {
  Headers: {
    "Content-Type": "application/json",
  },
};

const Subscribe = async (data) => {
  return await axios.post(
    `${ApiEndpoints.subscribeEndpoints.route}${ApiEndpoints.subscribeEndpoints.createSubscribe}`,
    data,
    config
  );
};

export { Subscribe }