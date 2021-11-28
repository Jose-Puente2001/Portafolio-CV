import React from 'react';

function Resume(){

	return(
          <>
  <section id="resume" className="s-resume target-section">
    <div className="row s-resume__section">
      <div className="column large-3 tab-12">
        <h3 className="section-header-allcaps">Career</h3>
      </div>
      <div className="column large-9 tab-12">
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">Codembody</h4>
            <p className="resume-block__header-meta">
              <span>Web Developer</span>
              <span className="resume-block__header-date">
                October 2021 - November 2021
              </span>
            </p>
          </div>
          <p>
           Website optimization in html, css and javascript.
          </p>
        </div>{" "}
        {/* end resume-block */}
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">Family Clinic</h4>
            <p className="resume-block__header-meta">
              <span>Systems Analyst</span>
              <span className="resume-block__header-date">
                March 2019 - July 2019
              </span>
            </p>
          </div>
          <p>
           Server admin.
          </p>
        </div>{" "}
        {/* end resume-block */}
      </div>
    </div>{" "}
    {/* s-resume__section */}
    <div className="row s-resume__section">
      <div className="column large-3 tab-12">
        <h3 className="section-header-allcaps">Education</h3>
      </div>
      <div className="column large-9 tab-12">
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">National Experimental University of the Armed Forces</h4>
            <p className="resume-block__header-meta">
              <span>Systems Engineer</span>
              <span className="resume-block__header-date">In progress</span>
            </p>
          </div>
        </div>{" "}
        {/* end resume-block */}
        <div className="resume-block">
          <div className="resume-block__header">
            <h4 className="h3">Nazaret Fe y Alegría School</h4>
            <p className="resume-block__header-meta">
              <span>Medium Computer Technician</span>
              <span className="resume-block__header-date">July 2019</span>
            </p>
          </div>
        </div>{" "}
        {/* end resume-block */}
      </div>
    </div>{" "}
  </section>{" "}
  {/* end s-resume */}
</>
  );
}

export default Resume;