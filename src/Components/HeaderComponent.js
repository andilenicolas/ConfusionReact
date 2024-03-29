import React, {Component} from 'react';

import {Jumbotron, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, Button, Modal, ModalBody, ModalHeader, Input, Label, FormGroup, Form} from 'reactstrap';

import {NavLink} from 'react-router-dom';


export default class HeaderComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            isNavOpen:false,
            isModalOpen:false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({isNavOpen:!this.state.isNavOpen});
    }

    toggleModal(){
        this.setState({isModalOpen:!this.isModalOpen});
    }

    handleLogin(event){
        this.toggleModal();
        alert(`username : ${this.username.value}, password : ${this.password.value}, remember me : ${this.remember.checked}`);
        event.preventDefault();

    }

    render(){
        return (
            //<React.Fragment> same purpose as <div> without adding an extra module to the dom (efficiency)
            <React.Fragment>
                <Navbar dark expand="md" >
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src="assets/images/logo.png" alt="Ristorante Con Fusion" height="30" width="41"/></NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink onClick={this.toggleNav} className="nav-link" to="/home"> <span className="fa fa-home fa-lg" ></span>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggleNav} className="nav-link" to="/aboutus"> <span className="fa fa-info fa-lg" ></span>About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggleNav} className="nav-link" to="/menu"> <span className="fa fa-list fa-lg" ></span>Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={this.toggleNav} className="nav-link" to="/contactus"> <span className="fa fa-address-card fa-lg" ></span>Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                            {/* login button */}
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span>Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        

                    </div>
                </Navbar>


                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                

                {/* modal for sign in*/}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    
                    <ModalHeader toggle={() => this.setState({ isModalOpen: false })}>Login</ModalHeader>

                    <ModalBody className="m-2">
                        {/* uncontrolled form */}
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>

                    </ModalBody>

                </Modal>



            </React.Fragment>
        );
    }
}