import React, { useState, useEffect } from "react";

const useGeoLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
        name: "",
        error: null
    });

    const onSuccess = (location) => {
        // Get longitude and latitude
        const { latitude, longitude } = location.coords;

        // Reverse geocode to get the location name
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`)
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    const locationName = data.results[0].formatted_address;
                    setLocation({
                        loaded: true,
                        coordinates: { lat: latitude, lng: longitude },
                        name: locationName,
                        error: null
                    });
                } else {
                    throw new Error("Location name not found");
                }
            })
            .catch(error => {
                setLocation({
                    loaded: true,
                    coordinates: { lat: latitude, lng: longitude },
                    name: "",
                    error: error.message || "Error fetching location name"
                });
            });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            coordinates: { lat: "", lng: "" },
            name: "",
            error: error.message || "Geolocation error"
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                message: "Geolocation not supported"
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return location;
};

export default useGeoLocation;
