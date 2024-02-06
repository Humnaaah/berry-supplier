import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Carousel from "react-multi-carousel";
import  {ReactComponent as Purchase} from '../Assets/Solutions_icons/purchasing.svg'
import {ReactComponent as Logistic} from '../Assets/Solutions_icons/Logistics.svg'
import  {ReactComponent as Control} from '../Assets/Solutions_icons/Quality_Control.svg'
import  {ReactComponent as Customer} from '../Assets/Solutions_icons/Customer_Service.svg'
import  {ReactComponent as Warehouse} from '../Assets/Solutions_icons/Warehouse.svg'
import '../Styles/solutions.scss';

const responsive = {
    desktop: {
        breakpoint: {
          max: 2000,
          min: 1024
        },
        items: 5,
        slidesToSlide: 3,
        paritialVisibilityGutter: 10
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 10
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 200
        },
        items: 1,
        slidesToSlide: 1,
        partialVisibilityGutter: 10
      }
  };

let operations=[
    {
        img:Purchase,
        solution: 'Purchasing',
        link:'/solutions#sol1'
    },
    {
        img:Logistic,
        solution: 'Logistics',
        link:'/solutions#sol2'
    },
    {
        img:Control,
        solution: 'Quality Control',
        link:'/solutions#sol3'
    },
    {
        img:Customer,
        solution: 'Customer Service',
        link:'/solutions#sol4'
    },{
        img:Warehouse,
        solution: 'Warehousing',
        link:'/solutions#sol5'
    }

]
const Solutions=(props)=>{
    return(
        <div className='solutions'>
            <h1 className='titleSol'> Check Out Our  Solutions to Manage Your Store Operations </h1>
            <Carousel
                swipeable={true}
                draggable={true}
                // showDots={false}
                // centerMode={true}
                // centerMode={props.deviceType === "mobile" && true } 
                partialVisible={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                arrows={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowsOnDeviceType={["desktop", "tablets"]}
                deviceType={props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                    {operations.map((item,i)=>(
                        <div className='cards'  key={i} >
                        <HashLink  to={item.link}  activeClassName="cardsSelected" onClick={()=> localStorage.setItem('active', "solutions" )}> 
                    
                        <div className='imgDiv'>
                         <item.img/>
                        </div>
                       
                        <h6> {item.solution} </h6>
                        </HashLink>
                    </div>
                    
                ))}
            </Carousel>
            {/* <Row>
                <Col lg={1}> </Col>
                {operations.map((item,i)=>(
                    <Col lg={2} key={i}> 
                    <div className='cards'>
                        <div className='imgDiv'>
                         <item.img/>
                        </div>
                       
                        <h6> {item.solution} </h6>
                    </div>
                </Col>
                ))}
                <Col lg={1}> </Col>
            </Row> */}
        </div>
    )
}


export default Solutions