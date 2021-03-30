import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

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

    handleCallBack = () => {
        console.log("Call back triggered");
        console.log("name:" + this.state.visitorName);
        console.log("mobile no.:" + this.state.mobileCode);

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
                                        value={mobileCode}
                                        onChange={setMobileCode}
                                        className="nameInput borderInput"
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