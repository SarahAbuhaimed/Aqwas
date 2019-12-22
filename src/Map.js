import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl';
const TOKEN = 'pk.eyJ1Ijoic2FyYWhhYnUiLCJhIjoiY2p2cDMzbTF2MjRucDQ5bDZpNTI3MmYxMSJ9.mmDT7xUEAoLivnu8mY4YsA';

export default class Map extends Component {
    state = {
        viewport: {
            width: 1800,
            height: 850,
          latitude: 0,
          longitude: 0,
          zoom: 8
        }
      };
    
handelLocationChange =() =>{
    var lat = this.props.latitude;
    var lon = this.props.longitude;
    if(this.state.viewport.latitude != 0){
        this.setState({
            latitude: lat,
            longitude:lon,

        })
    }
}
      render() {
        return (
          <ReactMapGL className="map-style"
            {...this.state.viewport}
            onViewportChange={this.handelLocationChange}
            mapboxApiAccessToken={TOKEN}
          />
        );
      }
    }
    