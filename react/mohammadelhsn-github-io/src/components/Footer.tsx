import { NAME, EMAIL, GITHUB, YOUTUBE } from '../data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const footerText = `© 2025 ${NAME}. All rights reserved.`;

const Footer = () => (
	<footer className="text-center py-4">
		<div className="footer-icons">
			<a href={`mailto:${EMAIL}`} title="Email">
				<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
			</a>
			<a href={`${GITHUB}`} title="GitHub">
				<FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
			</a>
			<a href={`${YOUTUBE}`} title="YouTube">
				<FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
			</a>
		</div>
		<p className="mt-3 small">{footerText}</p>
	</footer>
);

export default Footer;
