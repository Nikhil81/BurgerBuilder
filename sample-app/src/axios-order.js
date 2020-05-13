import axios from "axios";

const instance = axios.create({
  baseURL: "https://kitchen-app-26fff.firebaseio.com/",
});

export default instance;
