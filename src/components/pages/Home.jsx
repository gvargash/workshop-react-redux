import React from "react";
import Banner from "./../organisms/Banner";
const Home = () => {
  return (
    <>
      <Banner
        title='Desarrolla aplicaciónes para la mejor industria de presente con React 16.x'
        image={{
          src:
            "https://images.unsplash.com/photo-1567779307002-cee39b3561d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
          alt: "banner-home"
        }}></Banner>
    </>
  );
};
export default Home;
