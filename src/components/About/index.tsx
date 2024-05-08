import ABOUT from './data';
import './styles.css';
const About = () => (
	<section class='about section' id='about'>
		<div class='container'>
			<h2 class='section-title px-15'>About Me</h2>
			<div class='about-content'>
				<p class='about-text'>{ABOUT.introduction}</p>
			</div>
			<div class='resume-section'>
				<iframe
					src='https://jesseq-dev.github.io/portfolio/docs/resume.pdf'
					width='100%'
					height={600}
				/>
			</div>
		</div>
	</section>
);

export default About;
