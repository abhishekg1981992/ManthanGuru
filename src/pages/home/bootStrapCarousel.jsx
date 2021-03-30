import React, { Component } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel from 'react-bootstrap/Carousel'

export default class BootStrapCarousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            linkCSS: "mystyle"
        };
    }

    // clickBanner = (i, e) => {
    //     if (i == 0) {
    //         window.open("https://www.religarehealthinsurance.com");
    //     }
    //     else if (i == 1) {
    //         window.open("https://www.hdfcergo.com/health-insurance");
    //     }
    //     else {
    //         alert("No link added");
    //     }
    // }

    // startHover = () => {
    //     this.setState({
    //         linkCSS: "hover"
    //     })
    // }

    render() {
        var link = this.state.linkCSS;

        return (
            <Carousel>
                <Carousel.Item>
                    <a href="https://www.religarehealthinsurance.com" id="religare" >
                        <img alt="" src="assets/images/Religare-Care.jpg" />
                    </a>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://www.religarehealthinsurance.com" id="religare" >
                        <img alt="" src="assets/images/HDFC_Ergo_Woman.jpg" />
                    </a>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://www.religarehealthinsurance.com" id="religare" >
                        <img alt="" src="assets/images/Star-Family-Health-Optima.jpg" />
                    </a>

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}