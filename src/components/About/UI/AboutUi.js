import React, { Fragment, useRef, useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ExpandMore from '../../AppBar/ExpandMore'
import SideDots from '../../AppBar/SideDots'
import "../../Styles/about.scss"
import teamMember from '../../Assets/tariq-removebg-preview.png'
const AboutUi=(props)=>{
    const div1 = useRef(null)
    const div2 = useRef(null)
    const div3 = useRef(null)
    const div4 = useRef(null)

    const scrollTo=(ele)=>{
        ele.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
    return(
        <Fragment>
          <SideDots ref1={div1} ref2={div2} ref3={div3} ref4={div4} id1={"div1"} id2={"div2"} id3={"div3"} id4={"div4"} fourth={true}/>
            <div ref={div1} className="about-main" id="div1">
                <Container>
                    <Row>
                        <Col lg={5} md={9} sm={12} >
                            <div className='content'> 
                            <h1 className='title'> Berry Direct is committed in providing containers, packaging and accessories of utmost quality, price point and customer support to all our valued Franchisees.
                            </h1>
                            </div>
                        </Col>
                        <Col lg={7} sm={0} md={3} />
                    </Row>
                </Container>
                <ExpandMore clicked={() => {scrollTo(div2.current);}}/>
            </div>
            <div ref={div2} className="about-div2" id="div2">
                <Container>
                        <Row>
                            <Col lg={7} sm={0} md={3}/>
                              <Col lg={5} md={9} sm={12} >
                                    <div className='content'> 
                                    <h1 className='title'>Berry Direct, an Edible Arrangements affiliated company, provides Franchisees with a streamlined approach to ordering products and inventory items.
                                    </h1>
                                    </div>
                                </Col> 
                        </Row>
                    </Container>
                <ExpandMore clicked={() => {scrollTo(div3.current);}}/>
            </div>
            <div ref={div3} className="about-div3" id="div3">
                <Container fluid> 
                <Row>
                    <Col lg={5} sm={12} className='aboutimgDiv'> 
                        <div className='aboutImgLayer'/>
                    </Col>
                      
                    <Col lg={7} sm={12} className='aboutHistory'>
                        <h1 className='mainTitle mx-auto'> Our History </h1>
                        <p className='content'> 
                            The first Berry Direct facility opened in 2009 in Lake Elsinore, California then re-located to a 125K SQFT facility in Riverside, California in 2011 to meet growing demand. In September 2018 Berry Direct warehouse operations re-located to the current location in Perris, CA with third-party supporting facilities in Cranbury, NJ and Braintree, MA in reducing delivery time for our US and Canada Franchisees.
                        </p>
                        <p className='content'> 
                            Since 2009 Berry Direct has supplied decorative containers made of high-quality products for Franchisees worldwide. Our Edible Arrangements® exclusive containers and specialty items have been seen in television and subscription media. Berry Direct’s custom-designed containers are an integral part of the overall look and “Wow Factor” that Edible Arrangements® products are known for.
                        </p>
                       
                    </Col>
                </Row>
                    </Container>
                <ExpandMore clicked={() => {scrollTo(div4.current);}}/>
            </div>  
            <div ref={div4} className="about-div4" id="div4">
                <h1 className='mainTitle mx-auto' style={{color:'black'}}> Our Team </h1>
                <p className="subTitle"  style={{color:'black'}}>As a team of professionals who strive to achieve nothing but excellence and innovation in logistics. </p> 
                    <Container>
                    <Row>
                        {props.data.map((item,i)=>(
                              <Col lg={3} sm={12} md={6} key={i} > 
                              <div className={"team"}> 
                                  <img src={item.img} className='memberImg'/>
                                  <div className='body'>
                                      <div className='imgDiv'/>
                                      <h6 className='name'> {item.name} </h6>
                                      <p className='design'> {item.designation} </p>
                                  </div>
                              </div>
                              </Col>
                        ))}
                    </Row>
                    </Container>
            </div>  
        </Fragment>
    )
}
export default AboutUi