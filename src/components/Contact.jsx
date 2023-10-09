import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row text-center mb-0">
          <div className="col" data-aos="zoom-out" data-aos-delay="300">
            <h2>Contact Me</h2>
          </div>
        </div>
        <div className="row justify-content-center" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="800" data-aos-offset="0">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label for="Name" className="form-label">
                  name
                </label>
                <input type="text" className="form-control" id="Name" aria-describedby="Name" />
              </div>

              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" aria-describedby="email" />
              </div>

              <div className="mb-3">
                <label for="pesan" className="form-label">
                  Pesan
                </label>
                <textarea className="form-control" id="pesan" rows="3"></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0d6efd"
          fill-opacity="1"
          d="M0,224L80,202.7C160,181,320,139,480,138.7C640,139,800,181,960,202.7C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
