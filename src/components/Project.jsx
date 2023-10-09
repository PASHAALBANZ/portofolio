import React from "react";

export default function Project() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col" data-aos="zoom-out-up">
            <h2>My Project</h2>
          </div>
          <div className="row text-center">
            <div className="col-md-4 mb-3" data-aos="zoom-in" data-aos-delay="800">
              <div className="card">
                <img src="/img/project1.png" className="card-img-top" alt="project1" />
                <div className="card-body">
                  <p className="card-text">Making a Cloning Web Page</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,96L48,85.3C96,75,192,53,288,90.7C384,128,480,224,576,240C672,256,768,192,864,176C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
