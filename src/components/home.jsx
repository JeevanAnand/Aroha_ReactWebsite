
import About from "./about";
import Header from "./header";
import OurValue from "./ourValues";
import Testimonial from "./testimonial";
import Clients from "./clients";
import Footer from "./footer";
import Services from "./services";
import React from "react";


const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <About />
      <OurValue />
      <Services />
      <Testimonial />
      <Clients />
    </React.Fragment>
  );
};

export default Home;
