import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';  


export default class ContactComponent extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            firstname :'',
            lastname:'',
            telnum:'',
            email:'',
            agree:false,
            contactType:'Tel.',
            message:'',
            //tracking which element/field is being worked on
            touched:{
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,

            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(values){
        console.log("current state is : " + JSON.stringify(values));
        //prevents any default behaviour such as going to the next page
    }

    
    

    render(){


        return (
            <div className="container">


                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem active>
                            <Link to="/menu" >Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            Contact Us
                    </BreadcrumbItem>
                    </Breadcrumb>
                </div>


                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <Link to="/" role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</Link>
                            <Link to="/" role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</Link>
                            <Link to="/" role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</Link>
                        </div>
                    </div>
                </div>

                <div className="row row-content">

                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>

                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            {/* FormGroup gets element in one row/groups elements */}
                            <Row className="form-group">
                                <Label htmlfor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" name="firstname" id="firstname" placeholder="First Name" className="form-control"/>
                                </Col>
                            </Row>
                            {/* FormGroup gets element in one row/groups elements */}
                            <Row className="form-group">
                                <Label htmlfor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" name="lastname" id="lastname" placeholder="Last Name" className="form-control"/>
                                </Col>
                            </Row>
                            {/* FormGroup gets element in one row/groups elements */}
                            <Row className="form-group">
                                <Label htmlfor="telnum" md={2}>Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" name="telnum" id="telnum" placeholder="Telephone Number" className="form-control" />
                                </Col>
                            </Row>
                            {/* FormGroup gets element in one row/groups elements */}
                            <Row className="form-group">
                                <Label htmlfor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" name="email" type="text" id="email" placeholder="Email address" className="form-control"  />
                                </Col>
                            </Row>
                            {/* FormGroup gets element in one row/groups elements */}
                            <Row className="form-group">
                                <Col md={{size:6, offset:2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree" id="agree" className="form-check-input"/>
                                            <strong>May we contact you</strong>
                                        </Label>
                                    </div>
                                </Col>
                         
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType" id="contactType" className="form-control"  >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            {/* FormGroup gets element in one row/groups elements */}
                            <Row className="form-group">
                               <Label htmlfor="feedback" md={2}>Your Feedback</Label>
                               <Col md={10} >
                                    <Control.textarea model=".message" name="message" id="message" className="form-control"/>
                                </Col>
                            </Row>
                            {/* FormGroup gets element in one row/groups elements */}
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}} >
                                    <Button type="submit" color="primary">Send feedback</Button>
                                </Col>
                            </Row>
                            
                        </LocalForm>

                    </div>

                </div>


                {/* end of container class */}
            </div>
        );

    };
    
}

