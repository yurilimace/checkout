import axios from "axios";

const BASE_URL = axios.create({
  baseURL: "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com",
});

export { BASE_URL };
