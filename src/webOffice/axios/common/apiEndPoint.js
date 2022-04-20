const Host = {
  ROOT: "http://localhost:3000",
  BACKEND:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "http://localhost:3002"
      : "https://api.compareprime.com",
  PREFIX: "/v1/api",
};
const ApiEndpoints = {
  contactEndpoints: {
    route: `${Host.PREFIX}/contact`,
    create: `/create`,
  },
  subscribeEndpoints: {
    route: `${Host.BACKEND}${Host.PREFIX}/subscribe`,
    createSubscribe: `/create`,
  },
  cvUserEndpoints: {
    route: `${Host.PREFIX}/cv`,
    createCv: `/create`,
  },
  UserEndpoints: {
    route: `${Host.PREFIX}/user`,
    list: `/list`,
    login: `/login`,
    create: `/create`,  
    delete: `/delete`,  
    me: `/me`,  
    edit: `/edit`,
    update: `/update`,
    image: `/image`,
    forgotPassword: `/forgot-password`,
    count: `/count`,
    signup: `/signup`,
    confirmEmail: `/confirm-email`,
  },
};
export { ApiEndpoints, Host };
