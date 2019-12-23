import React, { useState } from "react";

import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import Restaurant from "./Restaurant";

const Home = props => {
  const [latitude, setLatitude] = useState();
  const [longitude, setlongitude] = useState();
  const changePage = () => {
    props.history.push("/restaurant");
    
    //.push("/restaurant")
  }

 
//   const getLocation = () => {
    
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         getCoordinates,
//         handelLocationError
//       );
//     } else {
//       alert("Geolocation is not supported by this browser.");
//     }
//   };
  const handelLocationError = error => {
    console.log("handelLocationError");
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  };
  const getData = async () => {
    await   navigator.geolocation.getCurrentPosition(
        (position) => {
           setLatitude(position.coords.longitude);
            setlongitude(position.coords.latitude);
        })
    console.log(`==========   Location  =========`);
    console.log(longitude);
    console.log(longitude);
    const url = `https://wainnakel.com/api/v1/GenerateFS.php?uid=${latitude},${longitude}&get_param=value`;
    const urlRyiad = `https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value`;
    let startAt = performance.now();
    await fetch(url, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-type": "application/json"
        // "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => {
        return res.text();
      })
      .then(data => console.log("data : " + data))
      .catch(err => console.log(err));
    let duration = performance.now() - startAt;
    console.log("duration :" + duration);
    await changePage();
  };

  const getCoordinates = (position) => {
    console.log("getCoordinates",position.coords.latitude,position.coords.longitude);

    var lati = position.coords.latitude.toString().slice(0, 11);
    var long = position.coords.longitude.toString().slice(0, 11);

    var lat = parseFloat(lati);
    var lon = parseFloat(long);
    setLatitude(lat);
    setlongitude(lon);
  };
  return (
      
    <div className="block ">
      <div>
        <img
          src="https://i.ibb.co/Ws32Pw0/New-Project-2.png"
          alt="New-Project-2"
          border="0"
          className="App-logo"
        />

        <h1 className="text">وين ناكل؟</h1>
        <button className="btn btn-default btn-lg">
          {" "}
           <FontAwesomeIcon icon={faSlidersH} />
        </button>
        <button className="btn btn-default btn-lg " onClick={getData}>
          {" "}
          اقترح
        </button>
    
      </div>
    </div>
  );
};
export default Home;