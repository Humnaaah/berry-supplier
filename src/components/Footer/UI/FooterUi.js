import React, { Fragment, useContext, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap'
import { Divider } from 'antd';
import {ReactComponent as In} from '../../Assets/linkedin.svg'
import {ReactComponent as Fb} from '../../Assets/facebook.svg'
import {ReactComponent as Tw} from '../../Assets/twitter.svg'
import {ReactComponent as Ig} from '../../Assets/instagram.svg'
import {ReactComponent as Yt} from '../../Assets/youtube.svg'
import {GlobalContext} from '../../Context/GlobalContext'
import '../../Styles/footer.scss'

const FooterUi=()=>{
    const {active,setActive} = useContext(GlobalContext);
    const [activeLink,setActiveLink] = useState(localStorage.getItem('active'));

    const maintainLink=(value)=>{
        setActive(value)
        setActiveLink(value)
        localStorage.setItem('active', value )
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log("Active state of footer is",localStorage.getItem('active'))
        maintainLink(activeLink)
        localStorage.setItem('active', activeLink )
    },[activeLink]);
 
    return(
        <Fragment>
            <div className='footer'>
                <Container>
                    <Row>
                        <Col lg={10} sm={12} md={12} className='footerCont'>
                            <h1 className='footerTxt'> 125,000 sqft warehouse facilities 60,000 cases of product shipped annually </h1>
                            <h6 className='footerSub'> With warehouses, Berry Direct has the capacity and network in <br/> place to safely ship all orders, large or small, on time and on budget. </h6>
                            <div className="IconsDiv">
                               <In className="icons" height={"15px"} width={"15px"} fill={"white"}/>
                               <Tw className="icons" height={"15px"} width={"15px"} fill={"white"}/>
                               <Fb className="icons" height={"15px"} width={"15px"} fill={"white"}/>
                               <Ig className="icons" height={"15px"} width={"15px"} fill={"white"}/>
                               <Yt className="icons" height={"20px"} width={"20px"} fill={"white"}/>
                            </div>
                            <p className='copyright'> ©2021 BerryDirect,  LLC. All rights reserved. </p>
                        </Col>
                        <Col lg={2} className="footerDet">
                            <ul>
                                <Link to="/" onClick={()=>maintainLink("home")}>  <li className={activeLink=== "home" ? "active" : ''} > Home </li> </Link>
                               
                                <Link to="/about" onClick={()=>{maintainLink("about");  localStorage.setItem('active', "about" )}}>  <li className={activeLink=== "about" ? "active" : ''}> About Us </li> </Link>
                                <Link to="/solutions" onClick={()=>{maintainLink("solutions"); localStorage.setItem('active', 'solutions' )}}>  <li className={activeLink=== "solutions" ? "active" : ''}> Solutions </li> </Link>
                                <Link to="/values" onClick={()=>{maintainLink("values");localStorage.setItem('active', 'values' )}}>   <li className={activeLink=== "values" ? "active" : ''}> Value Added </li> </Link>
                                <a href="http://berrydirect.com/catalog/" target="_blank" onClick={()=>maintainLink("catalogs")}>  <li className={activeLink=== "catalogs" ? "active" : ''}> Catalogs </li> </a>
                                <Link to="/contact" onClick={()=>{maintainLink("contact");localStorage.setItem('active', 'contact' )}}>  <li className={activeLink=== "contact" ? "active" : ''}> Contact Us</li> </Link>
                            </ul>

                            {/* <span> <label><Link to="/" onClick={()=>maintainLink("terms")} className={activeLink=== "terms" ? "active" : ''}> Terms of Use </Link>  </label>  <label> <Divider className="divider" type="vertical"/>  </label> <label> <Link  to="/" onClick={()=>maintainLink("privacy")} className={activeLink=== "privacy" ? "active" : ''}> Privacy Policy</Link> </label> </span>  */}
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}
export default FooterUi