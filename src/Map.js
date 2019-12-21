import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl';
const TOKEN = 'pk.eyJ1Ijoic2FyYWhhYnUiLCJhIjoiY2p2cDMzbTF2MjRucDQ5bDZpNTI3MmYxMSJ9.mmDT7xUEAoLivnu8mY4YsA';

export default class Map extends Component {
    state = {
        viewport: {
          width: 600,
          height: 400,
          latitude: 37.7577,
          longitude: -122.4376,
          zoom: 8
        }
      };
    
      render() {
        return (
          <ReactMapGL
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken={TOKEN}
          />
        );
      }
    }
    