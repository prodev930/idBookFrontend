// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

import * as HotelType from "./types";

export const getHotelsList = () => async(dispatch) => {
    const response = await axios.get("https://backend.idbookhotels.com/api/v1/hotels/galleries/")
    if(response){
      dispatch({
        type: HotelType.GET_HOTEL_LIST,
        payload: response?.data
      });
    }

}

export const getPropertyList = () => async(dispatch) => {
  const response = await axios.get("https://backend.idbookhotels.com/api/v1/hotels/properties/")
  if(response){
    dispatch({
      type: HotelType.GET_PROPERTIES_LIST,
      payload: response?.data?.data || []
    });
  }

}

export const getProperty = (custom_id) => async(dispatch) => {
  const response = await axios.get("https://backend.idbookhotels.com/api/v1/hotels/properties/${custom_id}/")
  if(response){
    dispatch({
      type: HotelType.GET_PROPERTIES,
      payload: response?.data?.data || []
    });
  }

}

export const getHotelReviews = () => async(dispatch) => {
  const response = await axios.get("https://backend.idbookhotels.com/api/v1/hotels/reviews/")
  if(response){
    dispatch({
      type: HotelType.GET_HOTEL_REVIEWS,
      payload: response?.data
    });
  }
}

export const getHotelRooms = (params) => async(dispatch) => {
  // need to add params here
  const queryParams = {
    property: params,
  };
  const response = await axios.get("https://backend.idbookhotels.com/api/v1/hotels/rooms/", { params: queryParams })
  if(response){
    dispatch({
      type: HotelType.GET_HOTEL_ROOMS,
      payload: response?.data?.data 
    });
  }
}

export const getPropertiesImages = (params) => async(dispatch) => {
  if(!params){
    return
  }
  const queryParams = {
    property: params,
  };
  const response = await axios.get("https://backend.idbookhotels.com/api/v1/hotels/galleries/",{ params: queryParams })
  if(response){
    dispatch({
      type: HotelType.GET_PROPERTY_IMAGES,
      payload: response?.data?.data || [] 
    });
  }
   
}

