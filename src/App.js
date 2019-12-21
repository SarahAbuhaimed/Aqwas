import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Home from './Home'
import Suggest from './Suggest';
import Map from './Map'
class App extends Component {

  constructor(props){
    super(props);
    this.state={
   latitude:null,
   longitude:null,

    };

  }
  getLocation =() =>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates,this.handelLocationError );
    } else {
      
       alert("Geolocation is not supported by this browser.");
    }
  }

  getCoordinates= (position) =>{

   var lati= position.coords.latitude.toString().slice(0,11);
   var long = position.coords.longitude.toString().slice(0,11);
  
var lat = parseFloat(lati);
var lon = parseFloat(long)

this.setState({
  latitude: lat,
  longitude:lon,
})
  }

  handelLocationError=(error)=>{
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.") 
        break;
      case error.POSITION_UNAVAILABLE:
        alert( "Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.") 
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.") 
        break;
    }
  }
  render() {
    return (
      <div className="App block">

      <img src="https://i.ibb.co/Ws32Pw0/New-Project-2.png" alt="New-Project-2" border="0" className="App-logo"/>
              
              <h1 className="text">وين ناكل؟</h1>
              <button className="btn btn-default btn-lg">  <i class="fa fa-sliders"></i></button>
      <button className="btn btn-default btn-lg " onClick={this.getLocation}> اقترح</button>
      <Suggest />
      <Map latitude={this.state.latitude} longitude={this.state.longitude}/>
     <p> {this.state.latitude}</p>
     <p>{this.state.longitude}</p>
      {
        this.state.latitude && this.state.longitude?
        <img src={'https://wainnakel.com/api/v1/GenerateFS.php?uid=${this.state.latitude},${this.state.longitude}&get_param=value'} alt="" />
        :
        null
      }
      </div>
    )
  }
}

export default App;
