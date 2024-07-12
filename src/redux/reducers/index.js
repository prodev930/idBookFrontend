// src/reducers/example.js
import { GET_HOTEL_LIST, GET_HOTEL_ROOMS, GET_HOTEL_REVIEWS, GET_PROPERTIES_LIST, GET_PROPERTIES, GET_PROPERTY_IMAGES } from '../hotel/types';

const initialState = {
    hotelList:[],
    propertiesList:[],
    hotelsReviews:[],
    hotelsRooms:[],
    propertiesImages:[],
    properties:{}
  // Initial state for the example reducer
};

const hotelReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_PROPERTIES:
      return {
        ...state,
        properties: payload
      };
    case GET_HOTEL_LIST:
      return {
        ...state,
        hotelList: payload
      };
      case GET_PROPERTIES_LIST:
        return {
          ...state,
          propertiesList: payload
        };
        case GET_HOTEL_REVIEWS:
          return {
            ...state,
            hotelsReviews: payload
          };
          case GET_PROPERTY_IMAGES:
            return {
              ...state,
              propertiesImages: payload
            };
          case GET_HOTEL_ROOMS:
            return {
              ...state,
              hotelsRooms: payload
            };
    default:
      return state;
  }
};

export default hotelReducer;
