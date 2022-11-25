import axios from "axios";

const api = () => {
   console.log('caiu aqui')
    return axios.create({
  baseURL: "https://api.github.com",
});
}

export default api;
