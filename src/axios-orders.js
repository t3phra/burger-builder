import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-51040.firebaseio.com",
});

export default instance;
