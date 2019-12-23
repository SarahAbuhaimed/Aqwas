import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSlidersH} from "@fortawesome/free-solid-svg-icons";
import Restaurant from './Restaurant';

const Home =(props) =>{
   
        return (
           
            <div className="block ">
                <div >
                <img src="https://i.ibb.co/Ws32Pw0/New-Project-2.png" alt="New-Project-2" border="0" className="App-logo"/>
              
              <h1 className="text">وين ناكل؟</h1>
              <button className="btn btn-default btn-lg">  <FontAwesomeIcon icon={faSlidersH}/></button>
      <button className="btn btn-default btn-lg " onClick={props.location} > اقترح</button>
     
                </div>
               
            </div>
           
        )
    }
export default Home;
