import axios from 'axios';

export const API_KEY: string = "GGV5wVKM0Cw3DyRCTK2unA4pcLX9EESxZA6riQdgqOM";
export const apiRequest = axios.create({
    baseURL: "https://api.unsplash.com/photos",
    withCredentials: true
})