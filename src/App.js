import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Home from './Home'
import Suggest from './Restaurant';


import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  // Redirect,
  // withRouter
} from "react-router-dom";


class App extends Component {

  constructor(props){
    super(props);
    this.state={
   latitude:null,
   longitude:null,
   isLoaded: false,
   items:[],
   name:'',
   link:'',
   cat:'',
   rating:'',
   open:'',
   cateName:'',
   price:''
    };

  }
  getLocation =() =>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates,this.handelLocationError );
    } else {
      
       alert("Geolocation is not supported by this browser.");
    }
  }

  getData = () =>{
    
    fetch(`https://wainnakel.com/api/v1/GenerateFS.php?uid=${this.state.latitude},${this.state.longitude}&get_param=value`)
    .then((res => {
      return res.json()
    }))
    .catch(err => console.log("error"+err))
    .then(data => console.log(data))
    .catch(err => console.log("error"+err))
  }

  getCoordinates= (position) =>{
console.log("l",position.coords.latitude);
console.log("lo",position.coords.longitude);
   var lati= position.coords.latitude
   var long = position.coords.longitude
  
var lat = parseFloat(lati);
var lon = parseFloat(long);

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
      <Router>
      <div className="App">
      <Switch>
      
      <Route exact path="/" component={Home} render={(props) => <Home {...props} location={this.getLocation}/> }/>
      <Route exact path="/Suggest" component={Suggest} render={(props) => <Suggest {...props} lati={this.state.latitude} long={this.state.longitude} location={this.getLocation}/>}/>
      
      </Switch>
     
     <p> {this.state.latitude}</p>
     <p>{this.state.longitude}</p>
     {/* <Data lat={this.state.latitude} lon={this.state.longitude}/> */}
      {
        this.state.latitude && this.state.longitude?
        <ul>
        <li>
       name: {this.state.name}
       link: {this.state.link}
        cat:{this.state.cat}
        rating:{this.state.rating}
        open:{this.state.open}
        </li>
       </ul>
        :
        <p>not working</p>
      }
       
      </div>
      </Router>
    )
  }
}

export default App;
