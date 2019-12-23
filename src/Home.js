import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import Restaurant from "./Restaurant";

const Home = props => {
  const [latitude, setLatitude] = useState(25.0);
  const [longitude, setlongitude] = useState(45.0);
  const changePage = () => {
    console.log("history", props.history);
    props.history.push("/restaurant");

    //.push("/restaurant")
  };
  const getLocation = () => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     this.getCoordinates,
    //     this.handelLocationError
    //   );
    // } else {
    //   alert("Geolocation is not supported by this browser.");
    // }
  };
  const getData = () => {
    fetch(
      `https://wainnakel.com/api/v1/GenerateFS.php?uid=${latitude},${longitude}&get_param=value`,
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-type": "text/plain",
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
      .then(res => {
        return res.text();
      })
      .then(data => console.log("data : " + data))
      .catch(err => console.log("error data" + err));
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
        <button className="btn btn-default btn-lg " onClick={() => {
            getLocation();
            getData();
            changePage();
          }}>
          {" "}
          اقترح
        </button>
       
      </div>
    </div>
  );
};
export default Home;