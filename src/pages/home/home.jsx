import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
// import './../styles/home.css';
import './home.css';
// import Banner from './../../common/homeCarousal.jsx';
import Banner from './../../common/banner.jsx';
import MgAdvantage from './mgAdvantage.jsx';
import BootStrapCarousel from './bootStrapCarousel.jsx';
import CallbackModal from './callbackModal.jsx';
export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayCallback: false
    };
  }

  componentDidMount(){

    setTimeout(() => {
      console.log('This will run after 1 second!');
      this.setState({displayCallback:true});
    }, 3000);

  }

toggleCallbackDisplay = (flag) =>{
  this.setState({displayCallback:flag});
}



  render() {

    return (

      <div class="row">
        <div class="col-sm-12 jumbo">
          <Image src="assets/images/manthan-guru-logo.jpg" style={{ paddingRight: "1rem" }}/>
        </div>
        {/* <div class="col-sm-12 banner mystyle">
          <Banner />
      <BootStrapCarousel />
        </div> */}
        <div class="col-sm-12">
          <MgAdvantage />
        </div>
        {this.state.displayCallback &&
          <CallbackModal toggleDisplay={this.toggleCallbackDisplay} displayModal={true} />}
      </div>

    )
  }
}