import React from 'react';
import ReactFontFace from 'react-font-face';
import {Col, Row, Container, UncontrolledCarousel} from 'reactstrap';
import {Button, Divider, Icon, Image, Reveal, Grid, Label, Segment, Card} from 'semantic-ui-react'
import './Home.css';
import Contact from '../Contact';
import Navbar from '../../components/Navbar';
import Logo from '../../images/Logo2.png';
import Cover from '../../images/nicholas.gif';
import Github from '../../images/github2.png';
import Linkedin from '../../images/linkedin.png';
import Slack from  '../../images/slack.png';
import Bandtogether1 from '../../images/bandtogether.png';
import Bandtogether2 from '../../images/bandtogether1.png';
import Bandtogether3 from '../../images/bandtogether2.png';
import Bandtogether4 from '../../images/bandtogether3.png';
import Bandtogether5 from '../../images/bandtogether4.png';
import Got1 from '../../images/GOT1.png';
import Got2 from '../../images/GOT2.png';
import Got3 from '../../images/GOT3.png';
import Got4 from '../../images/GOT4.png';
import Dp1 from '../../images/dp1.png';
import Dp2 from '../../images/dp2.png';
import Dp3 from '../../images/dp3.png';
import Dp4 from '../../images/dp4.png';
import Dp5 from '../../images/dp5.png';

const styles = {
  main: {
    margin: 15,
    lineHeight: 1.4,
    fontFamily: 'PT Sans',
    color: 'red'
  },
  google1: {
    fontFamily: 'Raleway',
    color: 'red'
  },
  google2: {
    fontFamily: 'Kurale',
  },
};

const firstItems = [
	{
		src: Bandtogether1,
		altText: 'Slide 1',
		captionHeader: 'Homepage'
	},
	{
		src: Bandtogether2,
		altText: 'Slide 2',
		captionHeader: 'Login w/authentication'
	},
	{
		src: Bandtogether3,
		captionHeader: 'Artist Search',
		altText: 'Slide 3'
	},
	{
		src: Bandtogether4,
		altText: 'Slide 3',
		captionHeader: 'Artist Search'
	},
	{
		src: Bandtogether5,
		altText: 'Slide 3',
		captionHeader: 'Artist Search'
	}
]

const secondItems = [
	{
		src: Dp1,
		altText: 'Slide 1',
		captionHeader: 'Homepage'
	},
	{
		src: Dp2,
		altText: 'Slide 2',
		captionHeader: 'Sign Up'
	},
	{
		src: Dp3,
		altText: 'Slide 3',
		captionHeader: 'Questionarre'
	},
	{
		src: Dp4,
		altText: 'Slide 3',
		captionHeader: 'Questionarre'
	},
	{
		src: Dp5,
		altText: 'Slide 3',
		captionHeader: 'Diagnosis'
	}
]

const thirdItems = [
	{
		src: Got1,
		altText: 'Slide 1',
		captionHeader: 'Homepage'
	},
	{
		src: Got4,
		altText: 'Slide 2',
		captionHeader: 'Question'
	},
	{
		src: Got3,
		altText: 'Slide 3',
		captionHeader: 'Question'
	},
	{
		src: Got2,
		altText: 'Slide 3',
		captionHeader: 'Results'
	}
];






export default class Homepage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			hovering: false,
			iconStyle: this.unHoverStylex
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.addSticky);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.addSticky);
	}

	addSticky = () => {
		let navBar = document.getElementById('navi');
		const position = navBar.offsetTop;
		if (window.pageYOffset > position) {
			navBar.style.position = 'fixed'
		}
		else {
			navBar.style.position = 'relative'
		}
	}



	render() {
		return(
			<div>
				<ul id='navi'>
					<li style={{ float: 'left' }}><a href='/'>Nicholas Allen <span>Full Stack Web Developer</span></a></li>
					<li><a href='/'>Contact</a></li>
					<li><a href='/'>Project Samples</a></li>
					<li><a href='/'>About</a></li>
				</ul>
				<div className='aboutBody body'>
					<p className='aboutTitle title'>ABOUT</p>
					<Divider horizontal>---</Divider>
					<p className='aboutText'> 
						<Reveal animated='move' className='myLogo'>
							<Reveal.Content visible>
								<Image square size='huge' className='myCover' src={Cover} />
							</Reveal.Content>
							<Reveal.Content hidden>
								<Image square size='huge' className='myImage' src={Logo} />
							</Reveal.Content>
						</Reveal>Certified full stack web developer with a background in mathematics. A relentless problem solver and deep passion for learning. Proficient in  HTML5, CSS3, Javascript, JQuery, Bootstrap, React, Firebase, Node Js, MySQL, MongoDB, Express, & Handlebars JS. Additional skills with basic electricity and fiber optics. 
					</p>
				</div>
				<div className='parallax2'>
				</div>
				<div id='carousel'>
					<p className='sampleProjectsTitle title'>SAMPLE PROJECTS</p>
					<Divider horizontal>---</Divider>
					<div className='unCarousel carousel1'>
						<p className='projectText'>Band Together</p>
						<p className='projectSubtext'>Website that allows users to search for their favorite artists and get bio info as well as upcoming tour dates, with the option to purchase tickets, and albums w/ included spotify mini player.</p>
						<UncontrolledCarousel items={firstItems} />
					</div>
					<div className='unCarousel carousel2'>
						<p className='projectText'>Diplopia Exam</p>
						<p className='projectSubtext'>This website was created to help healthcare providers correctly diagnosis patients who they believe may be suffering from a condition known as Diplopia using the Edinburgh Algorithm.</p>
						<UncontrolledCarousel items={secondItems} />
					</div>
					<div className='unCarousel carousel3'>
						<p className='projectText'>GoT Trivia</p>
						<p className='projectSubtext'>Timed Game of Thrones trivia game that keeps score and displays it at the end of the game.</p>
						<UncontrolledCarousel items={thirdItems} />
					</div>
				</div>
				<div className='parallax'>
				</div>
				<div className='contactBody'>
					<p className='contactTitle'>CONTACT</p>
					<Divider horizontal>---</Divider>
					<Grid centered>
						<Grid.Row>
							<Grid.Column className='iconColumn'>
								<a href='https://github.com/nickallenjr?tab=repositories' target='_blank'><Icon bordered inverted color='black' name='github' size='huge' /></a>
							</Grid.Column>
							<Grid.Column className='iconColumn'>
								<a href='https://www.linkedin.com/in/nicholas-allen-21038432/' target='_blank'><Icon bordered inverted color='black' name='linkedin' size='huge' /></a>
							</Grid.Column>
							<Grid.Column className='iconColumn'>
								<a href='mailto:nicholasallenjr@gmail.com' target='_top'><Icon bordered inverted color='black' name='mail' size='huge' /></a>
							</Grid.Column>
						</Grid.Row>
					</Grid>	
				</div>
			</div>
		)
	} 
}