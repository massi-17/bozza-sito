import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFile,
	faEnvelope,
	faCode,
	faGear,
	faGraduationCap,
	faCertificate,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Navbar({ onTabChange, activeTab }) {
	const handleClick = (tabIndex) => {
		onTabChange(tabIndex)
	}

	return (
		<nav className="navbar">
			<div className="top-icon">
				<FontAwesomeIcon
					icon={faFile}
					size="2x"
					className={`iconHover ${activeTab === 0 ? 'selected' : ''}`}
					onClick={() => handleClick(0)}
				/>

				<FontAwesomeIcon
					icon={faCode}
					size="2x"
					className={`iconHover ${activeTab === 1 ? 'selected' : ''}`}
					onClick={() => handleClick(1)}
				/>

				<FontAwesomeIcon
					icon={faGraduationCap}
					size="2x"
					className={`iconHover ${activeTab === 2 ? 'selected' : ''}`}
					onClick={() => handleClick(2)}
				/>

				<FontAwesomeIcon
					icon={faCertificate}
					size="2x"
					className={`iconHover ${activeTab === 3 ? 'selected' : ''}`}
					onClick={() => handleClick(3)}
				/>

				<FontAwesomeIcon
					icon={faEnvelope}
					size="2x"
					className={`iconHover ${activeTab === 4 ? 'selected' : ''}`}
					onClick={() => handleClick(4)}
				/>
			</div>

			<div className="bottom-icon">
				<a
					href="https://github.com/massi-17"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon
						icon={faGithub}
						size="2x"
						className="icon-navbar bottom-icon iconHover"
					/>
				</a>
				<a href="http://" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon
						icon={faGear}
						size="2x"
						className="icon-navbar bottom-icon iconHover"
					/>
				</a>
			</div>
		</nav>
	)
}

export default Navbar
