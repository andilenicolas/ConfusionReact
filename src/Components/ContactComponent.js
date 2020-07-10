import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col} from 'reactstrap';
import { Link } from 'react-router-dom';

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
            message:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange (event){
        //retrieve any changes made to the form
        //event.targert returns what/where change occured which is an object
        const target = event.target;
        const value = target.type === 'checkbox'? target.checked:target.value;
        //target.name returns name given to form element which is the same as the state assigned to them
        const name = target.name;

        this.setState({[name]:value});
    }

    handleSubmit(event){
        console.log("current state is : " + JSON.stringify(this.state));
        //prevents any default behaviour such as going to the next page
        event.preventDefault();
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
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>

                <div className="row row-content">

                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>

                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            {/* FormGroup gets element in one row/groups elements */}
                            <FormGroup row>
                                <Label htmlfor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input name="firstname" type="text" id="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            {/* FormGroup gets element in one row/groups elements */}
                            <FormGroup row>
                                <Label htmlfor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input name="lastname" type="text" id="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            {/* FormGroup gets element in one row/groups elements */}
                            <FormGroup row>
                                <Label htmlfor="telnum" md={2}>Tel.</Label>
                                <Col md={10}>
                                    <Input name="telnum" type="text" id="telnum" placeholder="Telephone Number" value={this.state.telnum}  onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            {/* FormGroup gets element in one row/groups elements */}
                            <FormGroup row>
                                <Label htmlfor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input name="email" type="text" id="email" placeholder="Email address" value={this.state.email}  onChange={this.handleInputChange}/>
                                </Col>
                            </FormGroup>
                            {/* FormGroup gets element in one row/groups elements */}
                            <FormGroup row>
                                <Col md={{size:6, offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input name="agree" id="agree" type="checkbox" checked={this.state.agree} onChange={this.handleInputChange} />
                                            <strong>May we contact you</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType" id="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            {/* FormGroup gets element in one row/groups elements */}
                            <FormGroup row>
                               <Label htmlfor="feedback" md={2}>Your Feedback</Label>
                               <Col md={10} >
                                    <Input name="message" id="message" type="textarea" value={this.state.message} onChange={this.handleInputChange} />
                               </Col>
                            </FormGroup>
                            {/* FormGroup gets element in one row/groups elements */}
                            <FormGroup row>
                                <Col md={{size:10, offset:2}} >
                                    <Button type="submit" color="primary">Send feedback</Button>
                                </Col>
                            </FormGroup>
                            

                        </Form>
                    </div>

                </div>


                {/* end of container class */}
            </div>
        );

    };
    
}
