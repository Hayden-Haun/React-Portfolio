import React, { useState } from "react";
import NewNavTabs from "./NewNavTabs";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      {/* We are passing the currentPage from state and the function to update it */}
      <div id="backgroundVid">
        <main class="container-fluid backgroundImage">
          <NewNavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
          {/* Here we are calling the renderPage method which will return a component  */}
          {renderPage()}
          <Footer />
        </main>
      </div>
    </>
  );
}

export default PortfolioContainer;
