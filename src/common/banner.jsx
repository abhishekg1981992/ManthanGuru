import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class Banner extends Component {

    constructor(props) {
        super(props);

        this.state = {
            linkCSS: "mystyle"
        };
    }

    clickBanner = (i, e) => {
        if (i == 0) {
            window.open("https://www.religarehealthinsurance.com");
        }
        else if (i == 1) {
            window.open("https://www.hdfcergo.com/health-insurance");
        }
        else {
            alert("No link added");
        }
    }

    startHover = () => {
        this.setState({
            linkCSS: "hover"
        })
    }

    render() {
        var link = this.state.linkCSS;

        return (
            <div class="row">
                <Carousel infiniteLoop useKeyboardArrows autoPlay dynamicHeight showThumbs={false} interval={3000} className="mystyle" onClickItem={(i, e) => this.clickBanner(i, e)}>
                    <div onMouseEnter={() => this.startHover()} className={link}>
                        <a href="https://www.religarehealthinsurance.com" id="religare" > <img alt="" src="assets/images/Religare-Care.jpg" />
                        </a>

                    </div>
                    <div onMouseEnter={() => this.startHover()} className={link}>
                        <img alt="" src="assets/images/HDFC_Ergo_Woman.jpg" />

                    </div>
                    <div onMouseEnter={() => this.startHover()} className={link}>
                        <img alt="" src="assets/images/Star-Family-Health-Optima.jpg" />
                        {/* <p className="legend">Legend 4</p> */}
                    </div>
                    <div onMouseEnter={() => this.startHover()} className={link}>
                        <img alt="" src="assets/images/Max-Bupa-Health.jpg" />
                        {/* <p className="legend">Legend 5</p> */}
                    </div>
                </Carousel>
            </div>

        )
    }
}