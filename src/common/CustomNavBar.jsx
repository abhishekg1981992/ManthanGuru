import React, { Component } from 'react'
import {  NavDropdown, Image } from 'react-bootstrap';
import './../styles/CustomNavBar.css';

export default class CustomNavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showDropdown: ""
        };

    }

    handleHover = (e, link) => {
        console.log("hover on:" + e.target.id);
        this.setState({ showDropdown: link });
    }

    render() {

        var showDropdown = this.state.showDropdown;

        return (
            <div class="row navbar">
                <div class="col-sm-5 logo">
                    <div class="row" style={{ alignItems: "center" }}>
                        <Image src="assets/images/Mobile-Phone-icon.png" circle className="contact-icons" />
                        <label class="pl-1 pr-2">+91 98102 46109</label>

                        <Image src="assets/images/free-mail-icon.png" circle className="contact-icons" />
                        <label class="pl-1">care@manthanguru.com</label>

                    </div>

                </div>
                <div class="col-sm-7 ">
                    <div class="row nav-links" onMouseLeave={(e) => this.handleHover(e, "")}>

                        <div class="dropdown" onMouseEnter={(e) => this.handleHover(e, "healthInsurance")}>
                            <a class="nav-link" href="#/users" id="life" >Health Insurance</a>
                            {showDropdown === "healthInsurance" &&
                                (
                                    <div class="dropdown-menu">
                                          <a class="nav-link" href="/users" id="life" >Health Insurance Plans</a>
                                          <a class="nav-link" href="/users" id="life" >Family Health Insurance</a>
                                          <a class="nav-link" href="/users" id="life" >Senior Citizen Health Insurance</a>
                                        
                                    </div>
                                )}
                        </div>
                        {/* <Nav.Link href="/about">About Us</Nav.Link> */}
                        <div class="dropdown" onMouseEnter={(e) => this.handleHover(e, "aboutUs")} onMouseLeave={(e) => this.handleHover(e, false)}>
                            <a class="nav-link" href="#/users" id="life" >Users</a>
                            {showDropdown === "aboutUs" &&
                                (
                                    <div class="dropdown-menu">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </div>
                                )}
                        </div>
                        {/* <Nav.Link href="/users">Users</Nav.Link> */}
                        <div class="dropdown" onMouseEnter={(e) => this.handleHover(e, "lifeInsurance")} onMouseLeave={(e) => this.handleHover(e, false)}>
                            <a class="nav-link" href="/users" id="life" >Life Insurance</a>
                            {showDropdown === "lifeInsurance" &&
                                (
                                    <div class="dropdown-menu">
                                        <NavDropdown.Item href="#action/3.1">Health Insurance Plans</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Family Health Insurance</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Senior Citizen Health Insurance</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </div>
                                )}
                        </div>

                    </div>
                </div>

            </div>


        )
    }
}

