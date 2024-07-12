/* eslint-disable no-unsafe-optional-chaining */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
//import { getPropertyList } from '../redux/hotel/actions';
import { toast } from "react-toastify";
 import { getHotelRooms, getHotelsList, getHotelReviews, getPropertyList, getPropertiesImages } from '../redux/hotel/actions';
import axiosInstance from '../utils/axiosInstance';

const useHotels = () => {
    const dispatch = useDispatch();
    const getData = localStorage.getItem("token");
    const token = JSON.parse(getData)
    const { hotelList, propertiesList, hotelsReviews, hotelsRooms, propertiesImages} = useSelector((state) => state.hotelReducer)

    const getHotelData = async() => {
        dispatch(getHotelsList())
      }
 
      const getPropertyData = async() => {
        dispatch(getPropertyList())
      }

      // const getProperty = async() => {
      //   dispatch(getProperty())
      // }
      
       const getAmenities = async(setAmenitiesData) =>{
        try {
          const response = await axiosInstance.get("org-resources/amenities/")
          setAmenitiesData(response?.data.data)
        } catch (error) {
          throw new Error
        }
       
         }
       const getAmenitiesCategory = async(setAmenitiesCategoryData) => {
        try {
          const response = await axiosInstance.get("org-resources/amenity-categories/")
          setAmenitiesCategoryData(response?.data.data)
        } catch (error) {
          throw new Error
        }
      }
      

      const getHotelReviewsData = async() => {
        dispatch(getHotelReviews())
      }
      
      const getHotelRoomsData = async(params) => {
        dispatch(getHotelRooms(params))
      }


      const getPropertiesImagesData = async(params) => {
        dispatch(getPropertiesImages(params))
      }
      const setPropertyData = async(data) => {
      try {
      const response = await axios.post("https://backend.idbookhotels.com/api/v1/hotels/properties/", data, {
       headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token[1].access}`,
      },
     })
     console.log("Success",response.data);
     toast.success(response?.data?.message);
    return response?.data.data?.id;
   } catch (error) {
    const { mobile_number, password } = error?.response?.data.message;
    toast.error(mobile_number || password);
    }
       
      }
       
  

      const setHotelRoomsData = async(data) => {

        const response = await axios.post("https://backend.idbookhotels.com/api/v1/hotels/rooms/", data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token[1].access}`,

          },
        })
        return response?.data.data?.id;

       
      }
      const reFetchData = () => {
        getHotelData();
        getPropertyData();
        getProperty();
        getHotelReviewsData();
        getHotelRoomsData();
        getPropertiesImagesData();
      }
    // eslint-disable-next-line consistent-return
    return {hotelList, propertiesList, hotelsReviews,hotelsRooms, propertiesImages,getAmenities,getAmenitiesCategory, reFetchData ,setHotelRoomsData, getHotelRoomsData, getPropertyData , setPropertyData, getPropertiesImagesData}
    //return { reFetchData  }
  }


export default useHotels