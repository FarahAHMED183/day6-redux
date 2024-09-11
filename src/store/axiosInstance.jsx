// axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // Set the base URL for the Movie DB API
  headers: {
    "Content-Type": "application/json",
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjk2MmM4OGE4MjgyZDlmZDRkNjQwODQwM2FiZmQ5ZiIsIm5iZiI6MTcyNTg5MzM4Ni42MTE4NTcsInN1YiI6IjY2ZGVkM2E2NWZiZmQ5YzQ4ODc4YTI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tHW0Qe35JpmQctzndQL6QHmfez5gd8O1llRUnWbOqg4'
  },
});

export default axiosInstance;
