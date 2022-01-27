import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 10, type: "video", key: API_KEY },
});
