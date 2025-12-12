import axios from "axios";
const geocodingApi = axios.create(
    {
        baseURL:"https://api.geoapify.com/v1/geocode"
    }
)
export default geocodingApi;