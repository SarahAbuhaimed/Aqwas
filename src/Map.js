import React, { Component } from 'react';
import MapGL, {  Marker} from 'react-map-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

const TOKEN = 'pk.eyJ1Ijoic2FyYWhhYnUiLCJhIjoiY2p2cDMzbTF2MjRucDQ5bDZpNTI3MmYxMSJ9.mmDT7xUEAoLivnu8mY4YsA';

export default class Map extends Component {
constructor(props) {
  super(props);
  this.state = {
    viewport: {
      latitude: 24.68773,
      longitude:  46.72185,
      zoom: 13,
      bearing: 0,
      pitch: 0,
      width: 1680,
      height: 900,
    },
    popupInfo: null
  };

}

  render() {
    const {viewport} = this.state;
    
    return (
      <MapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={TOKEN} >
        <Marker latitude={viewport.latitude} longitude={viewport.longitude} offsetLeft={-20} offsetTop={-10}> <FontAwesomeIcon icon={faMapMarkerAlt} className="marker-l" /> </Marker>
     
        {this.props.longitude}
        
      </MapGL>
    )
  }
}