import React, { useState } from "react";

const CurrentWeather = () => {
    const [error, setError] = useState();
    const [position, setPosition] = useState();
    const getPosition = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(setPosition, showError);
        } else {
            setError("Geolocation is not supported by this browser");
        }
    };
    const showError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                setError("User denied the request for Geolocation.");
                debugger;
                break;
            case error.POSITION_UNAVAILABLE:
                setError("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                setError("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                setError("An unknown error occurred.");
                break;
            default:
                setError("Unknown error.")
        }
    }
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Current Weather</h5>
                <p className="card-text">Weather based on your location</p>
                <div className="row">
                    <div className="col-4">
                        <button type="button" className="btn btn-primary" onClick={getPosition}>Get weather details.</button>
                    </div>
                </div>
                {
                    error &&
                    error
                }
                {position &&

                    <p className="mt-4">
                        Work in progress but your location is: {position.coords.latitude}, {position.coords.longitude}
                    </p>
                }
            </div>
        </div>
    );
};

export default CurrentWeather;