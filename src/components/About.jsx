import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col" data-aos="fade-up">
            <h2>about me</h2>
          </div>
          <div className="row justify-content-center fs-5 text-center">
            <div className="col-md-4 mb-3" data-aos="fade-right" data-aos-delay="200">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem consectetur ut!</p>
            </div>
            <div className="col-md-4" data-aos="fade-left" data-aos-delay="500">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ab aut ratione quas, alias labore corporis.</p>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#e2edff"
          fill-opacity="1"
          d="M0,128L48,149.3C96,171,192,213,288,208C384,203,480,149,576,117.3C672,85,768,75,864,112C960,149,1056,235,1152,229.3C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
