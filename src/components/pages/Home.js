import React from "react";

export default function Home() {
  return (
    <div>
      {/* <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p> */}

      <section
        className="
          d-flex
          flex-column
          align-items-center
          justify-content-center
          col-md-6
          offset-md-3
          mt-4
          pb-5
          extraFadeLight2
          curvedCorners
          customSizing
          linksContainer
        "
        id="aboutMe"
      >
        <h2 className="mt-3 mb-3">HAYDEN HAUN</h2>
        <img
          src="./assets/images/Picture1.jpg"
          class="img-fluid pt-2 mainImg curvedCorners"
          alt="Contact picture"
        />

        <p className="col-8 pt-2 mt-4">
          Hello there! My name is Hayden and I love software development! <br />
          After graduating from University of Colorado, Denver in 2017 with a
          B.S. in Applied Mathematics, I worked corporate business positions for
          3.5 years. As a Sourcing Analyst at NEO Tech, I created automation
          software that reduced project completion time in half and re-ignited
          my love for programming and computer science. I'm on track to graduate
          from Denver University's "Full Stack Flex" Coding Bootcamp in October
          2021. This bootcamp covers a wide range of Web Development topics,
          including Git, React, Node, Express, MongoDB, SQL, Javascript, and
          HTML & CSS. <br />
        </p>
      </section>
    </div>
  );
}
