import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Map from'./Map'
import { faShare,faHeart,faImage,faInfo,faSlidersH,faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
export default class Suggest extends Component {
    render() {
        return (
            <div>
                <header className="map-header">
                    <h1 className="res-name">rest name | name</h1>
                    <div className="header-color">
                    
                        <h4 >rating | Cat</h4>
                      <div className="icon">
                   <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" /> | <FontAwesomeIcon icon={faShare} className="icon"/>|<FontAwesomeIcon icon={faHeart}  className="icon"/>|<FontAwesomeIcon icon={faImage} className="icon"/>|<FontAwesomeIcon icon={faInfo} className="icon" />
                   </div>
                   </div>
                </header>
                <body>
                <Map latitude={this.props.lati} longitude={this.props.long}/>
                <div className="btn-map">
                    <button className="btn btn-primary btn-lg"> <FontAwesomeIcon icon={faSlidersH}/></button>
                <button className="btn btn-primary btn-lg"> اقتراح اخر</button>
                </div>
                </body>
            </div>
        )
    }
}
