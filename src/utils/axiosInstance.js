import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://backend.idbookhotels.com/api/v1/"
  // Add other Axios configuration if needed
});
console.log('Base URL:', import.meta.env.VITE_BACKEND_URL);


export const resources = "org-resources"
export const hotels= "hotels"
export const holidays = "holiday-package"
export const customer = "customer"
export const coupons = "coupons"
export const booking = "booking"
export const administrator = "administrator"


export default axiosInstance;