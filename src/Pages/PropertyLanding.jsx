/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import useHotels from "../hooks/useHotels";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import BasicInfoForm from "./propertyLanding/BasicInfoForm";
import HotelLocation from "./propertyLanding/HotelLocation";
import { ToastContainer } from "react-toastify";
import PropertyAmenities from "./propertyLanding/PropertyAmenities";
import HotelRoom from "./propertyLanding/HotelRoom";
import HotelPhotos from "./propertyLanding/HotelPhotos";
import Policies from "./propertyLanding/Policies";
import PropertyFinance from "./propertyLanding/PropertyFinance";
import { useLocation } from "react-router-dom";

const PropertyLanding = () => {
  const {
    setPropertyData,
    getAmenities,
    getAmenitiesCategory,
    propertiesList,
  } = useHotels();
  const [tabs, setTabs] = useState("BasicInfo");
  const [amenitiesData, setAmenitiesData] = useState([]);
  const [amenitiesCategoryData, setAmenitiesCategoryData] = useState([]);
  const [roomData, setRoomData] = useState();
  const location = useLocation();
  const paramData = location.state;
  // useEffect(() => {
  //   reFetchData();
  // },[])
  console.log("paramData", paramData);
  const [check, setCheck] = useState();
  useEffect(() => {
    getAmenities(setAmenitiesData);
    getAmenitiesCategory(setAmenitiesCategoryData);
  }, []);

  const getPropertyImages = [[{ id: 0, value: "empty" }]];
  const getFranschiseData = localStorage.getItem("franchise");
  const [propertyDetail, setPropertyDetail] = useState({
    service_category: "Hotel",
    name: "",
    location: "",
    area_name: "",
    city_name: "",
    latitude: 0,
    longitude: 0,
    email: "",
    phone_no: "",
    description: "",
    website_list: "",
    customer_care_no: "",
    starting_price: 0,
    rating: "",
    build_year: "",
    featured_image: "http://example.com",
    address: "",
    amenity: [1],
    franchise: getFranschiseData === "true" ? true : false,
    active: false,
  });
  // const [displayName, setDisplayName] = useState('');
  // const [cityName, setCityName] = useState('');
  // const [selectedOption, setSelectedOption] = useState('Hotel');
  // Function to handle form submission

  const combinedArray = amenitiesCategoryData?.map((cat) => {
    const amenities = amenitiesData?.filter(
      (am) => am.amenity_category === cat.id
    );
    const newData = {
      id: cat.id,
      title: cat.title,
      amenities,
      selected: false,
    };
    return newData;
  });

  const MenuItems = combinedArray?.map((item) => ({
    name: item.title,
    content: () => (
      <Paper style={{ padding: "20px" }}>
        {item.amenities.map((newitem) => (
          // eslint-disable-next-line react/jsx-key
          <div
            style={{
              borderBottom: "1px solid #d4d4d4",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Checkbox />
              <babel>{newitem.title}</babel>
            </div>
            <div>
              {item?.category?.length && (
                <Select
                  style={{ marginRight: "10px" }}
                  value={item?.category[0]?.value}
                >
                  {item?.category?.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </Select>
              )}
            </div>
          </div>
        ))}
      </Paper>
    ),
  }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Do something with the form data
    // const data = {
    //   service_category: "Hotel",
    //   // name,
    //   // display_name: displayName,
    //   // city_name: cityName,
    //   // service_category: selectedOption,
    //   // amenity: [1],
    // };
    setPropertyData(propertyDetail);
    if (paramData.name === "Listing") {
      window.location.replace("http://hotelier.idbookhotels.com/login");
    }
    if (paramData.name === "Franchise") {
      window.location.replace("https://rzp.io/l/idbookhotels");
    }

    //
    // navigate(`/myProperty`);
  };

  return (
    <>
      {tabs === "BasicInfo" && (
        <BasicInfoForm
          propertyDetail={propertyDetail}
          setPropertyDetail={setPropertyDetail}
          setTabs={setTabs}
        />
      )}
      {tabs === "Location" && (
        <HotelLocation
          setPropertyDetail={setPropertyDetail}
          propertyDetail={propertyDetail}
          setTabs={setTabs}
          handleSubmit={handleSubmit}
        />
      )}
      {tabs === "Photos" && (
        <HotelPhotos
          getPropertyImages={getPropertyImages}
          propertyDetail={propertyDetail}
          setTabs={setTabs}
        />
      )}
      {/* {tabs === "Amenities" && (
        <PropertyAmenities
          setTabs={setTabs}
          MenuItems={MenuItems}
          setSelectedMenuItem={setSelectedMenuItem}
          selectedMenuItem={selectedMenuItem}
        />
      )}
      {tabs === "Rooms" && (
        <HotelRoom
          setTabs={setTabs}
          setRoomData={setRoomData}
          roomData={roomData}
          check={check}
          setCheck={setCheck}
        />
      )}
      {tabs === "Photos" && (
        <HotelPhotos getPropertyImages={getPropertyImages} setTabs={setTabs} />
      )} */}
      {/* {tabs === "Policies" && <Policies setTabs={setTabs} />}
      {tabs === "Finance" && <PropertyFinance setTabs={setTabs} />} */}
      <ToastContainer />
    </>
  );
};

export default PropertyLanding;
