import axios from "axios";
import { Host, ApiEndpoints } from "../common/apiEndPoint";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const create = async (data) => {
  return await axios.post(
    `${Host.BACKEND}${ApiEndpoints.contactEndpoints.route}${ApiEndpoints.contactEndpoints.create}`,
    data,
    { headers: { ...config.headers } }
  );
};

export { create };
