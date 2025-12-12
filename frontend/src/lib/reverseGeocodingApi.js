import axios from "axios";
const reverseGeocodingApi = axios.create({
    baseURL:"https://api.geoapify.com/v1/geocode"
})
export default reverseGeocodingApi;