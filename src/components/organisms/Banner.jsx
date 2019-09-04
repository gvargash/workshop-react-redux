import React from "react";
import { Carousel } from "antd";

const Banner = props => {
  const { image, title } = props;

  return (
    <Carousel>
      <div>
        <h3>{title}</h3>
        <img src={image.src} alt={image.alt} />
      </div>
    </Carousel>
  );
};

export default Banner;
