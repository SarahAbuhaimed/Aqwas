import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';

export default class Map extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>rest name</h1>
                   
                    <i class="fa fa-map"></i> |<i class="fa fa-share-square"></i>|<i class="fa fa-heart"></i>|<i class="fa fa-image"></i>|<i class="fa fa-info-circle"></i>
                </header>
                <button className="btn btn-primary btn-lg">  <i class="fa fa-sliders"></i></button>
                <button className="btn btn-primary btn-lg"> اقتراح اخر</button>
            </div>
        )
    }
}
