import React from 'react';
import {Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';
import './Navbar.css';


export default class Navi extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div>
				<Navbar className='nav' color="faded" light expand="md">
					<NavbarBrand href='/'>Nicholas Allen <span className='subTitle'>Full Stack Web Developer</span></NavbarBrand>
					<Nav tabs 	className="ml-auto" navbar>
						<NavItem>
							<NavLink href="/about">About Me</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/contact">Contact</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="#">Github</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		)
	}
}

