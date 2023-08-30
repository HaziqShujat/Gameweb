import axios from "axios";

const key = "e490dc6dae8c417f9b63a916e664ca0f";
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io",
});

const getGenreApi = () => {
  return axiosInstance.get("/api/genres?key=" + key);
};

const getAllGames = () => {
  return axiosInstance.get(`/api/games?key=${key}`);
};
const getgerelistid = (id) => {
  return axiosInstance.get(`/api/games?key=${key}&genres=${id}`);
};
export default {
  getGenreApi,
  getAllGames,
  getgerelistid
};
