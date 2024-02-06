import React,{Fragment} from 'react'
import UAParser from "ua-parser-js";
import Solutions from './Solutions'

const SolutionsCarousel=({ deviceType })=>{
    return(
        <Fragment>
            <Solutions deviceType={deviceType}/>
        </Fragment>
    )
}

export default SolutionsCarousel
SolutionsCarousel.getInitialProps = ({ req }) => {
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