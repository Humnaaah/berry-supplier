import React,  { Fragment, useRef, useState, useEffect } from 'react'
import SideDots from '../../AppBar/SideDots'
import {Container,Row,Col} from 'react-bootstrap';
import purchasing from '../../Assets/P_Purchasing.png'
import purchase from '../../Assets/Purchasing blue.svg'
import logistics from '../../Assets/P_Logistics.png'
import logist from '../../Assets/Logistics blue.svg'
import quality from '../../Assets/P_QA.png'
import   control from'../../Assets/QA blue.svg'
import customer from '../../Assets/p_Customer_Service.png'
import  custom from'../../Assets/Customer_Service blue.svg'
import warehouse from '../../Assets/p_Wharehousing.png'
import  ware from'../../Assets/wharehouse blue.svg'
import '../../Styles/services.scss'
import ExpandMore from '../../AppBar/ExpandMore';

const ServicesUI=()=>{
    const sol1 = useRef(null)
    const sol2 = useRef(null)
    const sol3 = useRef(null)
    const sol4 = useRef(null)
    const sol5 = useRef(null)

    const scrollTo=(ele)=>{
        ele.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
    return(
        <div className='services'>
            <SideDots ref1={sol1} ref2={sol2} ref3={sol3} ref4={sol4} ref5={sol5} id1={"sol1"} id2={"sol2"} id3={"sol3"} id4={"sol4"} id5={"sol5"} extra={true} fourth={true}/>
            <div ref={sol1} className="service-main" id="sol1">
                <Container>
                    <img src={purchase} className='solIcons'/>
                    <Row className='mobRow'>
                        <Col lg={5} md={5}> 
                            <h6 className='solTitle'> Purchasing </h6>
                            <ul className='solDesc'>
                                <li className='soldecLi'> We evaluate product pricing, negotiations and purchasing terms with current and future vendors </li>
                                <li className='soldecLi'> We do procurement of all finished products for distribution </li>
                            </ul>
                        </Col>
                        <Col lg={4} md={2}/>
                        <Col lg={3} md={3}> 
                            <div className='sol-Img'>
                                <img src={purchasing} className='bitmap'/>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <ExpandMore clicked={() => {scrollTo(sol2.current);}}/>
            </div>
            <div ref={sol2} className="service-div2" id="sol2">
                <Container>
                    <img src={logist} className='solIcons'/>
                    <Row >
                            <Col lg={3} md={3}> 
                                <div className='sol-Img'>
                                    <img src={logistics} className='bitmap'/>
                                </div>
                            </Col>
                            <Col lg={4} md={2}/>
                
                            <Col lg={5} md={5}> 
                                <h6 className='solTitle'> Logistics </h6>
                                <ul className='solDesc'>
                                    <li className='soldecLi'> 	We ensure product on time delivery schedules from 	vendors, purchase order tracking, receiving and final 	invoice review for accounts payable Includes 
                                        <ul className='solDescsub'>
                                            <li className='soldecLi'> 
                                                Purchase orders – distribution list
                                            </li>
                                            <li className='soldecLi'> 
                                                Food Test and Cert of Conformance - Report and FDA Regulation
                                            </li>
                                            <li className='soldecLi'> 
                                                In Process and Final Inspection - Inspection and Approval
                                            </li>
                                            <li className='soldecLi'> 
                                                Ocean container Booking request & approval - Inventory 	level and Consolidation
                                            </li>
                                            <li className='soldecLi'> 
                                                Container arrival at port of LA / NJ & Delivery - Customs 	Clearance and Delivery
                                            </li>
                                            <li className='soldecLi'> 
                                                Quality Control Inspection - Inspection and report
                                            </li>
                                            <li className='soldecLi'> 
                                                Receiving Inventory in the System - Inventory and Sign off 
                                            </li>
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </Col>
                            
                        </Row>
                       
                </Container>
                <ExpandMore clicked={() => {scrollTo(sol3.current);}}/>
            </div>
            <div ref={sol3} className="service-div3" id="sol3">
                <Container>
                    <img src={control} className='solIcons'/>
                    <Row className='mobRow'>
                            <Col lg={5} md={5}> 
                                <h6 className='solTitle'> Quality Control </h6>
                                <ul className='solDesc'>
                                    <li className='soldecLi'> We provide inspection reports for product conformity of specific company standards to all vendor/suppliers </li>
                                    <li className='soldecLi'>	We do inspections of product quality standards during production and upon purchase receipt (Import & Domestic) </li>
                                </ul>
                            </Col>
                            <Col lg={4} md={2}/>
                            <Col lg={3} md={3}> 
                                <div className='sol-Img'>
                                    <img src={quality} className='bitmap'/>
                                </div>
                            </Col>
                        </Row>
                </Container>
                <ExpandMore clicked={() => {scrollTo(sol4.current);}}/>
            </div>
            <div ref={sol4} className="service-div4" id="sol4">
                <Container> 
                 <img src={custom} className='solIcons'/>
                    <Row>
                        <Col lg={3} md={3}> 
                            <div className='sol-Img'>
                                <img src={customer} className='bitmap'/>
                            </div>
                        </Col>
                        <Col  lg={4} md={2} sm={0}/>
                        <Col  lg={5} md={5}> 
                            <h6 className='solTitle'> Customer Service </h6>
                            <ul className='solDesc'>
                                <li className='soldecLi'> 
                                    We provide Franchisee support for sales order placement in MarketPlace ,sales order processing through MSDynamics GP, tracking and product support  
                                </li>
                                <li className='soldecLi'> 
                                    We reconcile Franchisee product credits/refunds for product breakage or manufacturer defects  
                                </li>   
                            </ul>
                        </Col>          
                    </Row>
                </Container>
                <ExpandMore clicked={() => {scrollTo(sol5.current);}}/>
            </div>
            <div ref={sol5} className="service-div5" id="sol5">
                <Container>
                    <img src={ware} className='solIcons'/>
                        <Row className='mobRow'>
                                <Col lg={5} md={5}> 
                                    <h6 className='solTitle'> Warehousing </h6>
                                    <ul className='solDesc'>
                                        <li className='soldecLi'> Product Receiving - documentation of all supplier inbound shipments international and domestic </li>
                                        <li className='soldecLi'> Product Logistics - maintaining inventory in a secure and controlled zone/area for storage and handling product flow </li>
                                        <li className='soldecLi'> Fulfillment - executing sales order processing, packing, shipping, and trailer loading </li>
                                    </ul>
                                </Col>
                                <Col lg={4} md={2} sm={0}/>
                                <Col lg={3} md={3}> 
                                    <div className='sol-Img'>
                                        <img src={warehouse} className='bitmap'/>
                                    </div>
                                </Col>
                            </Row>
                    </Container>
            </div>
        </div>
    )
}


export default ServicesUI