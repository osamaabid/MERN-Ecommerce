let JWT_TOKEN = "";

export const setToken = (token) => {
  JWT_TOKEN = token;
};

export const getToken = () => {
  return JWT_TOKEN;
};
