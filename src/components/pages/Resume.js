import React from "react";

export default function Resume() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="
      pt-2
      mt-4
      pb-2
      mb-5
      mt-5
      linksContainer
      extraFadeLight
      row
      curvedCorners
      d-flex
      flex-row
      justify-content-center
      align-items-center
      customSizing2
    "
        id="links"
      >
        <div className="d-flex flex-column justify-content-center align-items-center col-md-10 col-12 text-center ms-5 me-5 mt-2 resumeIcons">
          <h2>
            <a
              href="https://github.com/Hayden-Haun"
              target="no_blank"
              class="text-dark"
            >
              GitHub
            </a>
          </h2>
          <a href="https://github.com/Hayden-Haun" target="no_blank">
            <img
              src="./assets/images/GitHub.png"
              className="img-fluid pt-2 linkImg"
              alt="Contact picture"
            />
          </a>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center col-md-10 col-12 text-center ms-5 me-5 mt-2 resumeIcons">
          <a
            href="./assets/HaydenHaun_Resume_2021.pdf"
            className="btn btn-success active btn-lg mt-4 p-5 resumeBtn"
            role="button"
            aria-pressed="true"
            target="no_blank"
            download
          >
            {"\n"} Download {"\n"} Resume {"\n"}
          </a>
        </div>

        <div className=" d-flex flex-column justify-content-center align-items-center col-md-10 col-12 text-center text-light ms-5 me-5 mt-2 resumeIcons">
          <h2>
            <a
              href="https://www.linkedin.com/in/hayden-haun/"
              target="no_blank"
            >
              LinkedIn
            </a>
          </h2>
          <a href="https://www.linkedin.com/in/hayden-haun/" target="no_blank">
            <img
              src="./assets/images/LI-In-Bug.png"
              className="img-fluid pt-2 linkImg"
              alt="Contact picture"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
