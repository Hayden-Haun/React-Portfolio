import React from "react";

export default function Projects() {
  return (
    <div>
      <div
        class="
          d-flex
          flex-column
          justify-content-center
          align-items-center
          pt-2
          ms-5
          me-5
        "
        id="projects"
      >
        <div
          class="
            row
            pt-4
            extraFadeLight
            justify-content-center
            align-items-center
            curvedCorners
            customSizingProjects
          "
        >
          <h2 class="text-center pb-3">
            <span>
              <a
                class="responsiveCarouselBtn carouselCustomPrev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="false"
                ></span>
              </a>{" "}
            </span>
            <strong>Projects</strong>
            <span>
              <a
                class="responsiveCarouselBtn carouselCustomPrev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>{" "}
              </a>
            </span>
          </h2>

          {/* <!-- CAROUSEL OF PROJECTS  --> */}
          <div class="">
            <div
              id="carouselExampleIndicators"
              class="carousel"
              data-ride="carousel"
              data-interval="10000"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              {/* <!-- GIT OUTSIDE --> */}

              <div class="d-flex justify-content-center">
                <div class="carousel-inner carousel-custom">
                  <div class="carousel-item active pb-5">
                    <div class="d-flex justify-content-center align-items-center">
                      <div class="card bg-light text-center curvedCorners">
                        <div class="card-body card-maxW">
                          <h5 class="card-title">
                            <strong>Git Outside</strong>
                          </h5>
                          <img
                            src="./assets/images/gitoutside.png"
                            class="img-fluid pt-2 projectImg card-img-top"
                            alt="Contact picture"
                          />
                          <p class="card-text mt-2">
                            <strong>
                              A Full Stack Application to review campsites
                            </strong>
                            <br />
                            <br />
                            JavaScript, Bootstrap, mySQL, Express.js, Node.js,
                            Cloudinary, Handlebars, JAWSDB, Heroku
                          </p>
                          <a
                            href="https://git-outside.herokuapp.com/"
                            class="btn btn-success bg-purp"
                            target="no_blank"
                          >
                            Live App
                          </a>
                          <a
                            href="https://github.com/Hayden-Haun/Git-Outside"
                            class="btn btn-success bg-purp ms-5"
                            target="no_blank"
                          >
                            Repository
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- VENU --> */}
                  <div class="carousel-item pb-5">
                    <div class="d-flex justify-content-center align-items-center">
                      <div class="card bg-light text-center curvedCorners">
                        <div class="card-body card-maxW">
                          <h5 class="card-title">
                            <strong>Venu</strong>
                          </h5>
                          <img
                            src="./assets/images/venu.png"
                            class="img-fluid pt-2 projectImg card-img-top"
                            alt="Contact picture"
                          />
                          <p class="card-text mt-2">
                            <strong>An event finding website</strong> <br />
                            <br />
                            JavaScript, Bulma.io, Moment.js, jQuery, HTML, CSS,
                            Third-Party API data
                          </p>
                          <a
                            href="https://nickwojt.github.io/venu/"
                            class="btn btn-success bg-purp"
                            target="no_blank"
                          >
                            Live App
                          </a>
                          <a
                            href="https://github.com/nickwojt/venu"
                            class="btn btn-success bg-purp ms-5"
                            target="no_blank"
                          >
                            Repository
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Fitness Tracker--> */}
                  <div class="carousel-item pb-5">
                    <div class="d-flex justify-content-center align-items-center">
                      <div class="card bg-light text-center curvedCorners">
                        <div class="card-body card-maxW">
                          <h5 class="card-title">
                            <strong>Fitness Tracker</strong>
                          </h5>
                          <img
                            src="./assets/images/fitness.png"
                            class="img-fluid pt-2 projectImg card-img-top"
                            alt="Contact picture"
                          />
                          <p class="card-text mt-2">
                            <strong>
                              Track your workouts and see data from the last
                              week
                            </strong>
                            <br />
                            <br />
                            MongoDB, Mongoose, Modular Routing, Express.JS,
                            Javascript, Node.JS, Heroku
                          </p>
                          <a
                            href="https://fitness-tracker-hh.herokuapp.com/"
                            class="btn btn-success bg-purp"
                            target="no_blank"
                          >
                            Live App
                          </a>
                          <a
                            href="https://github.com/Hayden-Haun/Fitness-Tracker"
                            class="btn btn-success bg-purp ms-5"
                            target="no_blank"
                          >
                            Repository
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- NOTE TAKER --> */}
                  <div class="carousel-item pb-5">
                    <div class="d-flex justify-content-center align-items-center">
                      <div class="card bg-light text-center curvedCorners">
                        <div class="card-body card-maxW">
                          <h5 class="card-title">
                            <strong>Note Taker</strong>
                          </h5>
                          <img
                            src="./assets/images/notes.png"
                            class="img-fluid pt-2 projectImg card-img-top"
                            alt="Contact picture"
                          />
                          <p class="card-text mt-2">
                            <strong>
                              Take notes and save them on this Express Server
                            </strong>
                            <br />
                            <br />
                            Object Oriented Programming, JavaScript, Express.js,
                            Node.js, Bootstrap, SQL, JAWSDB, Heroku,
                          </p>
                          <a
                            href="https://note-taker-app-hh.herokuapp.com/"
                            class="btn btn-success bg-purp"
                            target="no_blank"
                          >
                            Live App
                          </a>
                          <a
                            href="https://github.com/Hayden-Haun/Note-Taker"
                            class="btn btn-success bg-purp ms-5"
                            target="no_blank"
                          >
                            Repository
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- WEATHER DASHBOARD --> */}
                  <div class="carousel-item pb-5">
                    <div
                      class="
                        d-flex
                        flex-column
                        justify-content-center
                        align-items-center
                      "
                    >
                      <div class="card bg-light text-center curvedCorners">
                        <div class="card-body card-maxW">
                          <h5 class="card-title">
                            <strong>Weather Dashboard</strong>
                          </h5>
                          <img
                            src="./assets/images/weather.png"
                            class="img-fluid pt-2 projectImg card-img-top"
                            alt="Contact picture"
                          />
                          <p class="card-text mt-2">
                            <strong>
                              An app to check the weather in your city
                            </strong>
                            <br />
                            <br />
                            JavaScript, Bootstrap, Moment.js, jQuery,
                            Third-Party API Data, Local Storage HTML, CSS
                          </p>
                          <a
                            href="https://hayden-haun.github.io/WeatherDashboard-HaydenHaun/"
                            class="btn btn-success bg-purp"
                            target="no_blank"
                          >
                            Live App
                          </a>
                          <a
                            href="https://github.com/Hayden-Haun/WeatherDashboard-HaydenHaun"
                            class="btn btn-success bg-purp ms-5"
                            target="no_blank"
                          >
                            Repository
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- PASSWORD GENERATOR --> */}
                  <div class="carousel-item pb-5">
                    <div class="d-flex justify-content-center">
                      <div class="card bg-light text-center curvedCorners">
                        <div class="card-body card-maxW">
                          <h5 class="card-title">
                            <strong>Password Generator</strong>
                          </h5>
                          <img
                            src="./assets/images/password.png"
                            class="img-fluid pt-2 projectImg card-img-top"
                            alt="Contact picture"
                          />
                          <p class="card-text mt-2">
                            <strong>
                              Generate a password with user-selected parameters
                            </strong>
                            <br />
                            <br />
                            JavaScript, HTML, CSS, jQuery
                          </p>
                          <a
                            href="https://hayden-haun.github.io/PASSWORD-GENERATOR-HAYDENHAUN/"
                            class="btn btn-success bg-purp"
                            target="no_blank"
                          >
                            Live App
                          </a>
                          <a
                            href="https://github.com/Hayden-Haun/PASSWORD-GENERATOR-HAYDENHAUN"
                            class="btn btn-success bg-purp ms-5"
                            target="no_blank"
                          >
                            Repository
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- E-Commerce Backend --> */}
                  <div class="carousel-item pb-5">
                    <div class="d-flex justify-content-center">
                      <div class="card bg-light text-center curvedCorners">
                        <div class="card-body">
                          <h5 class="card-title">
                            <strong>E-Commerce Backend</strong>
                          </h5>
                          <img
                            src="./assets/images/e-commerce.png"
                            class="img-fluid pt-2 projectImg card-img-top"
                            alt="Contact picture"
                          />
                          <p class="card-text mt-2">
                            <strong>
                              BackEnd programming for an E-Commerce Website
                            </strong>
                            <br />
                            <br />
                            mySQL, Sequelize, Node.JS,JavaScript, Insomnia, CSS,
                            jQuery
                          </p>
                          <a
                            href="https://drive.google.com/file/d/1KHvyhf20-k6R3T1q6artTr7hyzj-LLDl/view"
                            class="btn btn-success bg-purp"
                            target="no_blank"
                          >
                            Video Walkthrough
                          </a>
                          <a
                            href="https://github.com/Hayden-Haun/E-Commerce-Back-End"
                            class="btn btn-success bg-purp ms-5"
                            target="no_blank"
                          >
                            Repository
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                class="carousel-control-prev lowBtn me-5"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="false"
                ></span>
                <span class="sr-only">Previous</span>
              </a>

              <a
                class="carousel-control-next lowBtn"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span class="sr-only ms-5">Next</span>
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
