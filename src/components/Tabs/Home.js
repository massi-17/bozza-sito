import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faSass,
	faReact,
	faJs,
	faCss3,
	faHtml5,
} from '@fortawesome/free-brands-svg-icons'
import Projects from './Projects'

function Home({ onTabChange }) {
	const handleProjectsClick = () => {
		onTabChange(1)
	}
	const handleContactClick = () => {
		onTabChange(4)
	}

	return (
		<div id="home-page">
			<div className="container-avatar">
				<div className="logo">
					<img src="assets/img/logo1c.png" alt="" />
				</div>
				<h1>&#123;Front-End Developer&#125;</h1>
				<div className="buttons">
					<button onClick={handleProjectsClick}>Portfolio</button>
					<a href="https://github.com/massi-17" target="blank_">
						<button>GitHub</button>
					</a>
					<a href="cv-massimiani.pdf" target="blank_">
						<button>CURRICULUM</button>
					</a>
					{/* <button onClick={handleContactClick}>Contact_Me</button> */}
				</div>
			</div>
		</div>
	)
}

export default Home
