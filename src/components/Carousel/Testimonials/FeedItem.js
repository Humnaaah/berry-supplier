import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import Carousel from "react-multi-carousel";
import classNames from "classnames";
import Avatar from '@material-ui/core/Avatar';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import '../../Styles/coverflow.scss'

const responsive = {
    desktop: {
        breakpoint: {
          max: 2000,
          min: 1024
        },
        items: 5,
        paritialVisibilityGutter: 10
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 3,
        partialVisibilityGutter: 10
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 200
        },
        items: 2,
        partialVisibilityGutter: 50
      }
  };

  const Feeds=[
    {
      feed:"A great experience with their service. I was able to move to my new house within 1 week after posting the ad here!",
      img:"data:image/jpeg;base64,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",
      name:"Olive Frazier",
      designation:"Director Sales",
      organization:"Business Group",
      activeStatus:'not-active'
    },
    {
      feed:"I really like their service and I will recommend them to whoever needs something moved. You literlly can move anything with them.",
      img:"data:image/jpeg;base64,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",
      name:"Kate Michels",
      designation:"VP Operations",
      organization:"Afinity",
      activeStatus:'not-active'
    },
    {
      feed:"Simply great, I love their service. I was getting bid offers from transporters within hours of posting the job in website!",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcbI2lRhCnQKHhYEOcin-UyT34WT8VtdBQA&usqp=CAU",
      name:"Tom Bossworth",
      designation:"CEO",
      organization:"Orio",
      activeStatus:'not-active'
    },
  
  ]

  const FeedItem = (props) => {
      const [feedActive, setFeedActive] = useState(false);
      const [activeSlide, setActiveSlide] = useState(1);

      // const children = Feeds.map(item => (
      //             <div draggable={true} key={item.name} className={"ActiveCard"}>
      //                 <FormatQuoteIcon className='quotes'/>
      //                 <p> “{item.feed}” </p>
      //                 <div className='customer-detail'>       
      //                     <Avatar alt="Cindy Baker" src={item.img} />
      //                     <h6> {item.name} </h6>
      //                     <label>{item.designation}, <b> {item.organization} </b>  </label> 
      //                 </div>
      //           </div>
      //       ));
      
    return (
      <Carousel
        // afterChange={(previousSlide, { currentSlide, onMove }) => {setActiveSlide(currentSlide); console.log("next slide is:", activeSlide )}}
        // showDots={props.deviceType === "mobile" && true}
        // arrows={true}
        deviceType={props.deviceType}
        ssr
        centerMode={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        responsive={responsive}
        // partialVisible={true}
        draggable={true}
        swipeable={true}
        arrows={false}
        // removeArrowsOnDeviceType={["desktop", "tablets"]}
      >

       {  Feeds.map(item => (
                  <div draggable={true} key={item.name} className={"ActiveCard"}>
                      <FormatQuoteIcon className='quotes'/>
                      <p> “{item.feed}” </p>
                      <div className='customer-detail'>       
                          <Avatar alt="Cindy Baker" src={item.img} />
                          <h6> {item.name} </h6>
                          <label>{item.designation}, <b> {item.organization} </b>  </label> 
                      </div>
                </div>
            ))}
      </Carousel>
    );
  };
  
  export default FeedItem;

