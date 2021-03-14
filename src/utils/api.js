import axios from "axios";

const AIServer = axios.create({
  baseURL: "https://zrp7d8y3q4.execute-api.us-east-2.amazonaws.com/dev/engine"
});

export default AIServer;
