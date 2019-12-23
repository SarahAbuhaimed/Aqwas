// import React, { useState, useEffect } from "react";
import React, { Component } from 'react'

 class Data extends Component {
   constructor(props){
super(props);
  this.state={
    isLoaded: false,
    items:[],
    name:'',
    link:'',
    cat:'',
    rating:'',
    open:'',
  }
  
   }
 

   componentDidMount=()=>{
     fetch(`https://wainnakel.com/api/v1/GenerateFS.php?uid=${this.props.lat},${this.props.lon}&get_param=value`)
        .then(res => res.json())
        .then(json =>{
          (result) => {
            console.log(result);
            
            this.setState({
              isLoaded: true,
              items:json,
              name:result.name,
              link:result.link,
              cat:result.cat,
              rating:result.rating,
              open:result.open,
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
      //     (error) => {
      //       this.setState({
      //         isLoaded: true,
      //         error
      //       });
      //     }
       )
    }
  render() {
 
    return (
      <div>
        name
        
        {this.state.name}
        {this.props.lat}
      </div>
    )
  
  }
}

export default Data;