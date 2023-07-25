import React from 'react'
function Certification(props) {
	return (
		<div className="certification-wrapper">
			<div className="thumb-certifications">
				<img
					src={props.img}
					alt="Learn React"
					style={{ objectPosition: props.imgPosition }}
				/>
			</div>
			<div className="info-certification-wrapper">
				<div className="info-wrapper">
					<div>
						<span className="skills-title">
							<h2>#{props.title}</h2>
							<span className="curly orange"> &#123;</span>
						</span>
						<ul>
							<li>
								<span className="grey">instructor:</span>:{' '}
								<span className="value orange">{props.teacher}</span>;
							</li>
							{props.hours && (
								<li>
									<span className="grey">hours:</span>:{' '}
									<span className="value orange">{props.hours}</span>;
								</li>
							)}
							<li>
								<span className="grey">modules:</span>:{' '}
								<span className="value orange">{props.modules}</span>;
							</li>
							<li>
								<span className="grey">date:</span>:{' '}
								<span className="value orange">{props.date}</span>;
							</li>
						</ul>
						<span className="curly orange">&#125;</span>
					</div>

					<span id="topics-course" className="technologies">
						{props.topics}
					</span>
				</div>
			</div>
			<div className="link-certification">
				<a href={props.pdf} target="blank">
					&#x2039;OpenCertification &#47;&#x203A;
				</a>
			</div>
		</div>
	)
}
export default Certification
