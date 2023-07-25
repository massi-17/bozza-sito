import React from 'react'
import '../../Tabs.css'
function Project(props) {
	return (
		<div className="project">
			<div className="thumb-project">
				<img src={props.img} alt={props.title} />
			</div>
			<h2>
				#{props.title} <span className="curly">&#123;</span>
			</h2>
			<p>{props.outline}</p>
			<span className="curly">&#125;</span>
			<span className="technologies">
				{props.html}
				{props.css}
				{props.sass}
				{props.bootstrap}
				{props.javascript}
				{props.react}
			</span>
			<div className="links">
				<a href={props.github} target="blank">
					&#x2039;Github &#47;&#x203A;
				</a>
				<a href={props.demo} target="blank">
					&#x2039;Demo &#47;&#x203A;
				</a>
			</div>
		</div>
	)
}
export default Project
