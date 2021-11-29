import React from 'react';

function About(){

	return(
      <section id="about" className="s-about target-section">
  <div className="row">
    <div className="column large-3 tab-12">
      <img className="s-about__pic" src="images/avatars/avatar.jpg" />
    </div>
    <div className="column large-9 tab-12 s-about__content">
      <h3>About Me</h3>
      <p>
      I am a self-taught web and mobile developer, enthusiastic about problem solving, my specialty is Frontend, handling technologies such as html, css, sass, javascript, react js, react native.
      </p>
      <hr />
    </div>
  </div>{" "}
  {/* end row */}
</section>

  );
}

export default About;