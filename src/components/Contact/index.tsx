import CONTACTS from './data';
import './styles.css';

const Contact = () => {
	return (
		<section class='section contact' id='contact'>
			<div class='container'>
				<h2 class='section-title px-15'>Contact Me</h2>
				<div class='contact-container'>
					<div class='contact-box px-15'>
						<div class='contact-data'>
							<div class='contact-info'>
								<h3 class='contact-subtitle'>Mobile</h3>
								<a
									href={`tel:${CONTACTS.phoneNumber}`}
									class='contact-description'
								>
									<i class='fa-solid fa-phone' />
									{CONTACTS.phoneNumber}
								</a>
							</div>

							<div class='contact-info'>
								<h3 class='contact-subtitle'>Email</h3>
								<a
									href={`mailto:${CONTACTS.email}`}
									class='contact-description'
								>
									<i class='fa-solid fa-envelope' />
									{CONTACTS.email}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
