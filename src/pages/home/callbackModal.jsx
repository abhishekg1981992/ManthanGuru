import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from 'axios';

const holdOn = {
    position: "absolute",
    left: "0px",
    top: "-2px"
}

const header = {
    textAlign: "center",
    display: "inline-block",
    fontSize: "28px",
    lineHeight: "33px",
    paddingTop: "20px"
}

const header2 = {
    textAlign: "center",
    display: "inline-block",
    fontSize: "20px",
    lineHeight: "33px",
    paddingTop: "20px"
}

const numberInput = {
    width:"inherit"
}

class CallbackModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: true,
            mobileCode: "IN",
            visitorName: ""
        };
    }


    toggle = () => {
        this.props.toggleDisplay(false);
    }

    setMobileCode = (value) => {
        if (value != undefined) {
            console.log("mobile input:" + value);
            this.setState({
                mobileCode: value
            });
        }
        else {
            console.log("flag changed");
        }

    }

    handleCallBack = async (e) => {
        console.log("Call back triggered");
        let name = this.state.visitorName;
        let mobile = '+'+this.state.mobileCode;
        e.preventDefault();
        console.log({ name, mobile });
        
        if(name!="" && mobile.length>3)
        {
            const response = await fetch("https://manthanguru-node-app.herokuapp.com/api/tutorials/access", { 
            // const response = await fetch("http://localhost:8080/api/tutorials/access", { 
                method: 'POST', 
                headers: { 
                    'Content-type': 'application/json'
                }, 
                body: JSON.stringify({name, mobile}) 
            }); 
              const resData = await response.json(); 
              if (resData.status === 'success'){
              //   alert("Message Sent."); 
              console.log("Message Sent.");   
              this.toggle()
            }else if(resData.status === 'fail'){
              console.log("Sorry! Message failed to send.") 
              //   alert("Message failed to send.")
            }
        }
        else
        {
            console.log("Name and Number are mandatory");
        }
        
        


    }

    handleNameInput = (e) => {
        console.log("name input:" + JSON.stringify(e.target.value));
        this.setState({
            visitorName: e.target.value
        })
    }

    render() {

        var mobileCode = this.state.mobileCode;
        var setMobileCode = this.setMobileCode;
        var visitorName = this.state.visitorName;
        return (
            <MDBContainer>
                <MDBBtn onClick={this.toggle}>Modal</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle} >
                    <MDBModalHeader toggle={this.toggle} className="remove"></MDBModalHeader>
                    <MDBModalBody>
                        <div class="surveyContent">
                            <div className="">
                                <img src="https://www.religarehealthinsurance.com/custom-assets/hold-on.png" style={holdOn} />
                                <h3 style={header}>Your health wants <br />you to stay!</h3>
                            </div>
                            <div className="row">
                                <h5 style={header2} className="info">Just share your phone number and our experts will help you find the best health insurance</h5>
                            </div>
                            <div className="row pt-5">
                                <div class="col-sm-12 pb-3">
                                    <input type="text" id="name" placeholder="Your Name*" value={visitorName} className="nameInput borderInput" onChange={this.handleNameInput} />
                                </div>
                                <div class="col-sm-12 pb-4">
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        country='in'
                                        value={mobileCode}
                                        onChange={setMobileCode}
                                        className="nameInput borderInput"
                                        inputClass="mobileInput"
                                    />
                                </div>
                                <div class="col-sm-12">
                                    <button onClick={this.handleCallBack} className="callbackButton primary"> REQUEST A CALL BACK  </button>
                                </div>
                                <div class="col-sm-12 pt-2">
                                    <button onClick={this.toggle} className="callbackButton secondary"> NOT NOW </button>
                                </div>

                            </div>
                        </div>
                    </MDBModalBody>
                    <MDBModalFooter className="remove">
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default CallbackModal;