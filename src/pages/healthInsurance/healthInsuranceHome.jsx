import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
// import './../styles/home.css';
import './../../common/manthanGuru.css';
// import Banner from './../../common/homeCarousal.jsx';
import Banner from './../../common/banner.jsx';
import MgAdvantage from './mgAdvantage.jsx';
import BootStrapCarousel from './bootStrapCarousel.jsx';
import CallbackModal from './callbackModal.jsx';

export default class HealthInsuranceHome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayCallback: false
        };
    }

    componentDidMount() {
    }

    toggleCallbackDisplay = (flag) => {
        this.setState({ displayCallback: flag });
    }



    render() {

        return (

            <div class="row">
                <div class="breadcrumbinner">
                    <ul class="breadcrumb">
                        {/* <li class="active"><span title="You are here: " class="divider icon-location hasTooltip"></span></li><span class="homeIcon"></span>
                        <li><a class="pathway" href="https://www.policybazaar.com/" title="Insurance">Home</a><span class="divider"><img alt="" src="https://static.pbcdn.in/cdn/images/arrow.png"></li>
                        <li><span class="currentLocation">Health Insurance</span></li> */}
                        <li><a class="pathway" href="https://www.policybazaar.com/" title="Insurance">Home</a></li>
                        <li><span class="currentLocation">Health Insurance</span></li>
                    </ul>
                </div>
            </div>

        )
    }
}