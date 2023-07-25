import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBootstrap,
	faReact,
	faJs,
	faCss3,
	faHtml5,
	faSass,
} from '@fortawesome/free-brands-svg-icons'
import Project from './Project'
import '../../Tabs.css'
import portfolio from './portfolio.json'

function Projects() {
	const [filter, setFilter] = useState('all')
	const [activeFilter, setActiveFilter] = useState('all')

	function handleFilterClick(filterType) {
		setFilter(filterType)
		setActiveFilter(filterType)
	}

	const portfolioArray = portfolio
		.filter((project) => {
			if (filter === 'all') {
				return true
			} else if (filter === 'static') {
				return (
					project.techs.html &&
					project.techs.css &&
					!project.techs.javascript &&
					!project.techs.react
				)
			} else {
				return project.techs[filter]
			}
		})
		.map((project) => {
			const title = project.title
			let updateTitle = title
			if (title.includes(' ') && title.split(' ').length >= 2) {
				updateTitle = title.replace(/ /g, '-')
			}

			return (
				<Project
					key={project.id}
					img={project.img}
					title={updateTitle}
					outline={project.outline}
					html={
						project.techs.html && (
							<span className="tech" id="html">
								<FontAwesomeIcon icon={faHtml5} />
								&nbsp;html
							</span>
						)
					}
					css={
						project.techs.css && (
							<span className="tech" id="css">
								<FontAwesomeIcon icon={faCss3} />
								&nbsp;css
							</span>
						)
					}
					sass={
						project.techs.sass && (
							<span className="tech" id="sass">
								<FontAwesomeIcon icon={faSass} />
								&nbsp;sass
							</span>
						)
					}
					bootstrap={
						project.techs.bootstrap && (
							<span className="tech" id="bootstrap">
								<FontAwesomeIcon icon={faBootstrap} />
								&nbsp;bootstrap
							</span>
						)
					}
					javascript={
						project.techs.javascript && (
							<span className="tech" id="javascript">
								<FontAwesomeIcon icon={faJs} />
								&nbsp;js
							</span>
						)
					}
					react={
						project.techs.react && (
							<span className="tech" id="react">
								<FontAwesomeIcon icon={faReact} />
								&nbsp;react
							</span>
						)
					}
					github={project.github}
					demo={project.demo}
				/>
			)
		})

	return (
		<div id="content-tabs">
			<h1>
				&#x2039;
				<span className="title">Projects</span> &#47;&#x203A;
			</h1>
			<div className="labels">
				<span
					id="all"
					onClick={() => handleFilterClick('all')}
					className={activeFilter === 'all' ? 'active' : ''}
				>
					&#x2039;All &#47;&#x203A;
				</span>
				<span
					id="static"
					onClick={() => handleFilterClick('static')}
					className={activeFilter === 'static' ? 'active' : ''}
				>
					&#x2039;Static &#47;&#x203A;
				</span>
				<span
					id="javascript"
					onClick={() => handleFilterClick('javascript')}
					className={activeFilter === 'javascript' ? 'active' : ''}
				>
					&#x2039;Javascript &#47;&#x203A;
				</span>
				<span
					id="react"
					onClick={() => handleFilterClick('react')}
					className={activeFilter === 'react' ? 'active' : ''}
				>
					&#x2039;React &#47;&#x203A;
				</span>
			</div>
			<div id="projects-wrapper">{portfolioArray}</div>
		</div>
	)
}

export default Projects
