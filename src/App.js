import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Home from './Home'
import Restaurant from './Restaurant';


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
  // getLocation =() =>{
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(this.getCoordinates,this.handelLocationError );
  //   } else {
      
  //      alert("Geolocation is not supported by this browser.");
  //   }
  // }

//   getCoordinates= (position) =>{
// console.log("la",position.coords.latitude);
// console.log("lo",position.coords.longitude);
//    var lati= position.coords.latitude.toString().slice(0,11)
//    var long = position.coords.longitude.toString().slice(0,11)
  
// var lat = parseFloat(lati);
// var lon = parseFloat(long);

// this.setState({
//   latitude: lat,
//   longitude:lon,
// })

//   }

 


  render() {
   
    return (
      <Router>

      <div className="App">
      <Switch>
      <Route exact path="/" component={Home} render={(props) => <Home {...props}  /> }/>
      <Route exact path="/restaurant" component={Restaurant} render={(props) => <Restaurant {...props} lati={this.state.latitude} long={this.state.longitude} location={this.getLocation}/>}/>
      
      </Switch>
   
      
     <p> {this.state.latitude}</p>
     <p>{this.state.longitude}</p>

      </div>
      </Router>
    )
  }
}

export default App;
