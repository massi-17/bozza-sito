import React from 'react'
import Certification from './Certification'
function Education() {
	const traversyArray = [
		'Form Validator',
		'Movie Seat Booking',
		'Custom Video Player',
		'Exchange Rate Calculator',
		'DOM Array Methods',
		'Menu Slider',
		'Modal',
		'Hangman Game',
		'Meal Finder',
		'Expense Tracker',
		'Music Player',
		'Infinite Scroll Posts',
		'Typing Game',
		'Speech Text Reader',
		'Memory Cards',
		'Lyrics Search App',
		'Relaxer App',
		'Breakout Game',
		'New Year Countdown',
		'Sortable List',
		'Speak Number Guessing',
		'Name',
	]
	const booleanArray = [
		'HTML',
		'CSS',
		'Bootstrap',
		'Responsive Web Design',
		'JavaScript',
	]
	const shiftNudgeArray = [
		'typography',
		'layout',
		'color',
		'style',
		'imagery',
		'elements',
	]
	const reactAdvancedArray = [
		'React Children',
		'Props spreading',
		'Compound components',
		'React.Children',
		'Context',
		'Implicit state',
		'Headless components',
		'Component composition',
		'Render props',
		'Refs',
		'Custom hooks',
		'React Router 6',
		'Route Params',
		'Nested routes, Outlet, Outlet context',
		'Layout routes',
		'Link, NavLink, link state',
		'Search Params',
		'Firebase integration',
		'Netlify deployment',
		'React’s rendering phases',
		'Using Chrome and React dev tools',
		'StrictMode',
		'useMemo()',
		'memo()',
		'useCallback()',
	]
	const responsiveWdArray = [
		'Percentage Units',
		'Relative Units',
		'Flexbox',
		'Media Queries',
		'Breakpoints',
		'Viewport',
		'Mobile-First-Design',
		'Desktop-First-Design',
	]

	const fccArray = [
		'Basic Javascript',
		'ES6',
		'REGEX',
		'Debugging',
		'Basic Data Structures',
		'Basic Algorithm Scripting',
		'Object Oriented Programming',
		'Functional Programming',
		'Intermediate Algorithm Scripting',
	]

	const javascriptArray = [
		'Strings',
		'Numbers',
		'Arrays',
		'Objects',
		'Functions',
		'Classes',
		'Prototypical inheritance',
		'ES2015',
		'JSON',
		'Promises',
		'Fetch',
		'DOM',
		'Events',
		'async/await',
		'Web Components basics',
	]
	const reactArray = [
		'JSX',
		'ReactDOM.render()',
		'Custom components',
		'Organizing components',
		'Reusable components',
		'JS inside JSX',
		'Props',
		'Destructuring props',
		'Rendering arrays',
		'Mapping components',
		'Key prop',
		'Passing objects as props',
		'Spreading objects as props',
		'Props vs state',
		'useState',
		'useState array destructuring',
		'Changing state',
		'Complex state',
		'Refactoring state',
		'Passing state as props',
		'Local state',
		'Unified state',
		'Conditional rendering',
		'React forms',
		'Forms input',
		'Forms state object',
		'Submitting forms in React',
		'Making API calls',
		'useEffect',
		'Async functions inside useEffect',
		'Local storage with React',
		'Lazy state initialization',
	]
	const uiDesignTopics = shiftNudgeArray.map((topic, index) => {
		return (
			<span className="tech" id="topics" key={index}>
				{topic}
			</span>
		)
	})
	const reactTopics = reactArray.map((topic, index) => {
		return (
			<span className="tech" id="topics" key={index}>
				{topic}
			</span>
		)
	})
	const reactAdvancedTopics = reactAdvancedArray.map((topic, index) => {
		return (
			<span className="tech" id="topics" key={index}>
				{topic}
			</span>
		)
	})
	const javascriptTopics = javascriptArray.map((topic, index) => {
		return (
			<span className="tech" id="topics" key={index}>
				{topic}
			</span>
		)
	})
	const fccTopics = fccArray.map((topic, index) => {
		return (
			<span className="tech" id="topics" key={index}>
				{topic}
			</span>
		)
	})
	const rwdTopics = responsiveWdArray.map((topic, index) => {
		return (
			<span className="tech" id="topics" key={index}>
				{topic}
			</span>
		)
	})
	const booleanTopics = booleanArray.map((topic, index) => {
		return (
			<span className="tech" id="topics" key={index}>
				{topic}
			</span>
		)
	})
	const traversyTopics = traversyArray.map((topic, index) => {
		return (
			<span className="tech" id="topics" key={index}>
				{topic}
			</span>
		)
	})
	return (
		<div id="content-tabs">
			<h1>
				&#x2039;
				<span className="title">Education</span> &#47;&#x203A;
			</h1>
			<div id="certificates-wrapper">
				<Certification
					img="assets/certification/scrimba-thumb.png"
					pdf="assets/certification/scrimba.pdf"
					imgPosition="top"
					title="Learn-React"
					teacher="Bob-Ziroll"
					hours="13 hours"
					modules="170"
					date="12-may-23"
					topics={reactTopics}
				/>
				<Certification
					img="assets/certification/learnjavascript.jpg"
					pdf="assets/certification/learnjavascript.pdf"
					imgPosition="top"
					title="Learn-Javascript"
					teacher="Jad-Joubran"
					hours=""
					modules="78"
					date="2-nov-22"
					topics={javascriptTopics}
				/>
				<Certification
					img="assets/certification/fcc.jpg"
					pdf="assets/certification/fcc.pdf"
					imgPosition="top"
					title="JavaScript-Algorithms-and-Data-Structures"
					teacher="Quincy-Larson"
					hours="300 hours"
					modules="294"
					date="11-oct-22"
					topics={fccTopics}
				/>
				<Certification
					img="assets/certification/responsive-wd.jpg"
					pdf="assets/certification/responsive-wd.pdf"
					imgPosition="center"
					title="Conquering-Responsive-Layouts"
					teacher="Kevin-Powell"
					hours=""
					modules="21"
					date="14-jun-23"
					topics={rwdTopics}
				/>
				<Certification
					img="assets/certification/shiftnudge.png"
					pdf="assets/certification/responsive-wd.pdf"
					imgPosition="center"
					title="User-Interface-Design[UI-Design]"
					teacher="Matt-D-Smith"
					hours="30 hours"
					modules="85"
					date="14-jun-23"
					topics={uiDesignTopics}
				/>
				<Certification
					img="assets/certification/udemy.jpg"
					pdf="assets/certification/udemy.pdf"
					imgPosition="top"
					title="20-Web-Project-with-Vanilla-JavaScript"
					teacher="Brad-Traversy"
					hours="16 hours"
					modules="21"
					date="14-jun-23"
					topics={traversyTopics}
				/>
				<Certification
					img="assets/certification/boolean.png"
					pdf=""
					imgPosition="center"
					title="Web-Development-BootCamp[only-first-half]"
					teacher="Boolean"
					hours="350 hours"
					modules="3 (attendent only the first half)"
					date="15-feb-22"
					topics={booleanTopics}
				/>
				<Certification
					img="assets/certification/informaster.png"
					pdf=""
					imgPosition="center"
					title="Master-Visual-Web-Design"
					teacher="InforMaster-Academy"
					hours="69 hours"
					modules="9"
					date="14-oct-11"
					topics={booleanTopics}
				/>
			</div>
		</div>
	)
}
export default Education
