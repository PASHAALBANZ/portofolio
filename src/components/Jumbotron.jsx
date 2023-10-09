import React from "react";

export default function Jumbotron() {
  return (
    <section class="jumbotron text-center" id="home">
      <img
        src="/img/profile.jpeg"
        alt="Profile"
        className="img-thumbline rounded-circle"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="1000"
        data-aos-offset="0"
      />
      <h1 class="display-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
        Pasha Albana
      </h1>
      <p class="lead" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="600" data-aos-offset="0">
        Programmer | Web Dev
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,160L48,149.3C96,139,192,117,288,138.7C384,160,480,224,576,234.7C672,245,768,203,864,202.7C960,203,1056,245,1152,229.3C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
