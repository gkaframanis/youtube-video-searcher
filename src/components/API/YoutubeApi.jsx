import axios from "axios";

const API_KEY = "AIzaSyBLIOYRUYWtaT5eSsP4F5QRDdD-bVfFamQ";


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: API_KEY,
    }
});