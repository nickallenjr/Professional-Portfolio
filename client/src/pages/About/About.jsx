import React from 'react';
import {Col, Row, Button, Container} from 'reactstrap';
import Navbar from '../../components/Navbar';
import Logo from '../../images/Logo.jpg';
import './About.css'

export default class AboutMe extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<p>About Me</p>
				<Container>
					<Row>
						<Col md={{size: 8, offset: 2}}>
							<img className='myPic' src={Logo} alt='me' />
						</Col>
						<Col md={{size: 8, offset: 2}}>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Sed quis turpis quam. Etiam est turpis, mollis eu sapien varius, fringilla congue leo. 
							Vivamus condimentum quam vitae pharetra ultrices. Pellentesque dapibus sagittis nisi, vitae tristique nulla sagittis at. 
							Sed bibendum ultricies rutrum.</p> 
							<p>Sed iaculis sodales nisl in convallis. Sed eleifend mauris sed tortor ullamcorper efficitur. 
							Nunc eu massa tincidunt, maximus ligula nec, varius nibh. Mauris eu faucibus arcu, et porttitor enim. Vestibulum eu sapien nulla. 
							Curabitur sem orci, aliquet a efficitur ac, imperdiet in velit. Donec porta velit turpis, vitae aliquet nisl bibendum vel. 
							Nulla varius sodales fringilla. Sed sed neque non ante bibendum convallis et quis nulla. Quisque auctor odio eu magna lacinia volutpat. 
							In hac habitasse platea dictumst.</p> 
							<p>Pellentesque vel mi at magna elementum tincidunt. Curabitur malesuada accumsan semper. 
							Ut fermentum aliquet urna, ut rhoncus felis elementum nec. Vivamus iaculis, nibh sed convallis aliquet, mauris enim mattis lacus, quis tincidunt est velit nec quam. 
							Morbi mollis hendrerit tempus. Suspendisse convallis condimentum dui, id malesuada turpis vestibulum vehicula. Donec pulvinar turpis quis hendrerit feugiat. 
							Etiam lobortis mattis arcu, eu pellentesque dolor eleifend ullamcorper. In et nibh ut metus ultricies pharetra. Praesent ut rutrum purus. 
							Sed at sollicitudin lorem. Proin at ex cursus, imperdiet nisi ut, fringilla sem. Duis ut neque a ligula ultrices consectetur. 
							Phasellus eget purus dignissim, consectetur velit ac, molestie elit.</p>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}