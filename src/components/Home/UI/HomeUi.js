import React, { Fragment, useRef, useState, useEffect } from 'react'
import ExpandMore from '../../AppBar/ExpandMore';
import SideDots from '../../AppBar/SideDots';
import '../../Styles/home.scss';
import {ReactComponent as Deliver} from '../../Assets/desktop/Group 25.svg'
// import DeliverAnimation from '../../Assets/desktop/Group 25.svg';
import CarouselUi from '../../Carousel/CarouselUi';
import SimpleSwiperWithParams from '../../Carousel/Feedback';
import Solutions from '../../Solutions/Solutions';
import FeedCarousel from '../../Carousel/Testimonials/FeedCarousel';
import DeliverAnimation from './DeliverAnimation';


const HomeUi=()=>{
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
           <div className='home'>
           <SideDots ref1={div1} ref2={div2} ref3={div3} ref4={div4} id1={"div1"} id2={"div2"} id3={"div3"} id4={"div4"} fourth={true} />
            <div ref={div1} className="home-main" id="div1">
                <div className='main-content'>
                    <h1 className='mainTitle mx-auto'> Supporting Over 900 Franchise Stores in the US, Canada & Middle East </h1>
                    <p className="subTitle"> To know more, please <b>  click here </b> </p> 
                    <ExpandMore clicked={() => {scrollTo(div2.current);}}/>
                </div>
            </div>
            <div ref={div2} className="home-div2" id="div2">
            <h1 className='mainTitle mx-auto'> World-Class Facilities </h1>
            <p className="subTitle"> California, Connecticut and Hong Kong </p> 
            <CarouselUi/>
                <ExpandMore clicked={() => {scrollTo(div3.current);}}/>
            </div>
            <div ref={div3} className="home-div3" id="div3">
                <DeliverAnimation/>
                <ExpandMore clicked={() => {scrollTo(div4.current);}}/>
            </div>
            <div ref={div4} className="home-div4" id="div4">
                <h1 className='mainTitle mx-auto' style={{color:'black'}}> Our Customer Reviews </h1>
                <p className="subTitle"  style={{color:'black'}}> What our clients say </p> 
                <FeedCarousel/>
                <Solutions/>
            </div>
           </div>
        </Fragment>
    )
}

export default HomeUi