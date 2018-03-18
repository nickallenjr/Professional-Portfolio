import React from 'react';
import {Col, Row} from 'reactstrap';
import {Form, Input, Grid, TextArea, Button, Label, Segment} from 'semantic-ui-react';
import Navbar from '../../components/Navbar';
import './Contact.css';

export default class ContactMe extends React.Component {
	constructor(props) {
		super(props);

		this.state = {firstName: '', lastName: '', email: '', message: ''};
	}

	// Handles updating component state when the user types into the input field
    handleChange = (event, { name, value }) => {
        this.setState({
            [name]: value
        });
    };

	handleFormSubmit = () => {
        // event.preventDefault();
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.message) {
        	//setup axios to make call to server to send email
        	console.log(this.state);
        	this.setState({firstName: '', lastName: '', email: '', message: ''})
        } else {
            console.log('Please fill out entire form!')
        }
    };

	render() {
		return (
			<div>
				{/* <Navbar /> */}
				<h1 className='headerTitle'>Contact Me</h1>
				<Grid divided='vertically'>
			    	<Grid.Row centered>
			      		<Grid.Column width={6}>
			      			<Segment raised>
								<Form onSubmit={this.handleFormSubmit}>
									<Label as='a' color='yellow' ribbon>First Name</Label>
						      	<Form.Field id='form-input-control-first-name' value={this.state.firstName} onChange={this.handleChange} name='firstName' control={Input} placeholder='First name' />
									<Label as='a' color='green' ribbon='left'>Last Name</Label>
						      	<Form.Field id='form-input-control-last-name' value={this.state.lastName} onChange={this.handleChange} name='lastName' control={Input} placeholder='Last name' />
									<Label as='a' color='blue' ribbon>Email</Label>
							    <Form.Field id='form-textarea-control-email' value={this.state.email} onChange={this.handleChange} name='email' control={Input} placeholder='name@example.com' />
									<Label as='a' color='red' ribbon='left'>Message</Label>
							    <Form.Field id='form-textarea-control-message' value={this.state.message} onChange={this.handleChange} name='message' control={TextArea} placeholder='Message' />
						    	<Form.Field control={Button} id='form-button-control-public' content='Send' />
							  	</Form>
						  	</Segment>
					  	</Grid.Column>
				 	</Grid.Row>
			 	</Grid>
			</div>
		)
	}
}
