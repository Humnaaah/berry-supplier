import React from 'react';
import {Link} from 'react-router-dom'
import Carousel from "react-multi-carousel";
import '../Styles/carousel.scss';
import mattle from '../Assets/desktop/Group 5/Container_1.png';
import glass from '../Assets/desktop/Group 5/Container_2.png';
import plastic from '../Assets/desktop/Group 4/Container_3.png';
import ceramic from '../Assets/desktop/Group 4/Container_4.png';
import paper from '../Assets/desktop/Group 20/Container_5.png';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide:5,
      paritialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      paritialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
      paritialVisibilityGutter: 10,
    }
  };

  let Items=[
    {
        img: mattle,
        name:"Mattle",
        type:"Containers",
        link:''
    },
    {
        img: glass,
        name:"Glass",
        type:"Containers",
        link:''
    },
    {
        img: plastic,
        name:"Plastic",
        type:"Containers",
        link:''
    },
    {
        img:ceramic,
        name:"Ceramic",
        type:"Containers",
        link:''
    },
    {
        img: paper,
        name:"Paper",
        type:"Containers",
        link:''
    },
  ]

  const ImgItem = ({ deviceType }) => {
    return (
      <Carousel
        ssr
        // infinite={true}
        // infinite
        // centerMode={true}
        removeArrowsOnDeviceType={["desktop"]}
        partialVisible={true} 
        deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
      >

        {Items.map((item,i) => {
          return (
            <div className='item' draggable={false} key={i}>
            <div className='imgDiv'>
                <img src={item.img} />
            </div>
            <h1> {item.name} <br/>{item.type} </h1>
            <Link to={`item.link`}> See Our Customize Solutions </Link>
        </div>
          );
        })}
       
      </Carousel>
    );
  };
  
  export default ImgItem;

