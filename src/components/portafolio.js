import React from 'react';
import Iframe from 'react-iframe';

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
    <div className="column folio-item rowfolio1">
        <div className="card">
        <iframe className="video2 aspect-video" src="https://www.youtube.com/embed/SC9tdw_RoRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <div className="card-content">
         <h3>Football Systems Project CRUD</h3>
         <p>Made with: PHP, MySQL y Bootstrap</p>
       </div>
       </div>
      </div>{" "}
      {/* end folio-item */}
      <div className="column folio-item rowfolio1">
        <div className="card">
       <iframe className="video2 aspect-video" src="https://www.youtube.com/embed/tHrPtoOKpy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <div className="card-content">
         <h3>Inventory System for the Raul Gonzales Castro Community Pharmacy</h3>
         <p>Made with: PHP, MySQL y Bootstrap</p>
       </div>
       </div>
    </div>{" "}
      {/* end folio-item */}
      <div className="column folio-item rowfolio1">
        <div className="card">
       <iframe className="video2 aspect-video" src="https://www.youtube.com/embed/PWAJiqGnMp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <div className="card-content">
         <h3>Mobile application for Inventory for the Raul Gonzales Castro Community Pharmacy</h3>
         <p>Made with: React Native y Firebase</p>
       </div>
       </div>
    </div>{" "}
    <div className="column folio-item rowfolio2">
        <div className="card">
       <iframe className="video2 aspect-video" src="https://www.youtube.com/embed/SAfIvntd50o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <div className="card-content">
         <h3>IP Address Tracker. IP address tracking application through a geolocation map</h3>
         <p>Made with: HTML, CSS, JavaScript, Sass, Node Js, Express, API</p>
       </div>
       </div>
    </div>{" "}
    <div className="column folio-item rowfolio2">
        <div className="card">
       <iframe className="video2 aspect-video" src="https://www.youtube.com/embed/IBzvFR08dVE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <div className="card-content">
         <h3>CrytoStatus. Cryptocurrency prices app</h3>         
         <p>Made with: React Native, API</p>
       </div>
       </div>
    </div>{" "}
     <div className="column folio-item rowfolio2">
        <div className="card">
       <iframe className="video2 aspect-video" src="https://www.youtube.com/embed/PWAJiqGnMp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <div className="card-content">
         <h3>Weblink. Web application for registration of website links</h3>
         <p>Made with: PHP, MySQL y BootstrapI</p>
       </div>
       </div>
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