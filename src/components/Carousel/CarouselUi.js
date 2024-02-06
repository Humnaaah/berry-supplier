import React, { Fragment } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import UAParser from "ua-parser-js";
import ImgItem from './ImgItem';
import Section from './Section';

const CarouselUi =({ deviceType })=>{
    return(
      <div className='facilities'>
       <div className='carousel'>
        <Section>
            <ImgItem deviceType={deviceType} />
          </Section>
       </div>
      </div>
    )
};
CarouselUi.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};

export default CarouselUi