import React from 'react';

function Contacts(){

	return(
  <section id="contact" className="s-contact target-section">
  	<div className="contact-container">
    <h2 className="title-contact">CONTACT ME</h2>
    <p>Email: josegabrielpuente75@gmail.com </p>
    <ul className="s-footer__social contact-container">
        <li>
          <a href="https://github.com/Jose-Puente2001" target="_blank">
            <i className="fab fa-github" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jos%C3%A9-puente-96214619b/" target="_blank">
            <i className="fab fa-linkedin-in" aria-hidden="true" />
          </a>
        </li>
      </ul>
  </div>
  </section>
 );
}

export default Contacts;