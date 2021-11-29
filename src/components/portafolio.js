import React from 'react';

function Portafolio(){

	return(
         <>
  {/* portfolio
    ================================================== */}
  <section id="portfolio" className="s-portfolio target-section">
    <div className="row s-portfolio__header">
      <div className="column large-12">
        <h3>Works</h3>
      </div>
    </div>
    <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
      <div className="column folio-item">
        <a href="https://ip-address-tracker-taupe-beta.vercel.app/" target="_blank">
          <img
            src="images/portfolio/iptracker.jpg"
            srcSet="images/portfolio/iptracker.jpg, 
                           images/portfolio/iptracker.jpg"
            
          />
        </a>
      </div>{" "}
      {/* end folio-item */}
      <div className="column folio-item">
        <a href="https://play.google.com/store/apps/details?id=com.josepuente.reactnativecrypto" target="_blank">
          <img
            src="images/portfolio/cryptostatus.jpg"
            srcSet="images/portfolio/cryptostatus.jpg, 
                           images/portfolio/cryptostatus.jpg"
            
          />
        </a>
      </div>{" "}
      {/* end folio-item */}
      <div className="column folio-item">
        <a href="https://bramonte.com/" target="_blank">
          <img
            src="images/portfolio/bramote.jpg"
            srcSet="images/portfolio/bramote.jpg, 
                           images/portfolio/bramote.jpg"
            
          />
        </a>
      </div>{" "}
    </div>{" "}
    {/* end folio-list */}
    {/* Modal Templates Popup
  =========================================================== */}
    <div id="modal-01" hidden>
      <div className="modal-popup">
        <img src="images/portfolio/gallery/g-droplet.jpg" alt />
        <div className="modal-popup__desc">
          <h5>Droplet</h5>
          <p>
            Odio soluta enim quos sit asperiores rerum rerum repudiandae cum.
            Vel voluptatem alias qui assumenda iure et expedita voluptatem.
            Ratione officiis quae.
          </p>
          <ul className="modal-popup__cat">
            <li>Branding</li>
            <li>Product Design</li>
          </ul>
        </div>
        <a href="https://www.behance.net/" className="modal-popup__details">
          Project link
        </a>
      </div>
    </div>{" "}
    {/* end modal */}
    <div id="modal-02" hidden>
      <div className="modal-popup">
        <img src="images/portfolio/gallery/g-lamp.jpg"  />
        <div className="modal-popup__desc">
          <h5>The Lamp</h5>
          <p>
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit.
          </p>
          <ul className="modal-popup__cat">
            <li>Branding</li>
          </ul>
        </div>
        <a href="https://www.behance.net/" className="modal-popup__details">
          Project link
        </a>
      </div>
    </div>{" "}
    {/* end modal */}
    <div id="modal-03" hidden>
      <div className="modal-popup">
        <img src="images/portfolio/gallery/g-minimalismo.jpg" />
        <div className="modal-popup__desc">
          <h5>Minimalismo</h5>
          <p>
            Exercitationem reprehenderit quod explicabo consequatur aliquid ut
            magni ut. Deleniti quo corrupti illum velit eveniet ratione
            necessitatibus ipsam mollitia.
          </p>
          <ul className="modal-popup__cat">
            <li>Product Design</li>
          </ul>
        </div>
        <a href="https://www.behance.net/" className="modal-popup__details">
          Project link
        </a>
      </div>
    </div>{" "}
  </section>{" "}
  {/* end s-portfolio */}
</>
  );
}

export default Portafolio;