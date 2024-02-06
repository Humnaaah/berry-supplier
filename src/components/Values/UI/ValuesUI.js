import React, { Fragment, useRef, useState, useEffect } from 'react';
import SideDots from '../../AppBar/SideDots';
import '../../Styles/values.scss';
import {ReactComponent as ArrowPath} from '../../Assets/Stroke 1.svg'
import {ReactComponent as ArrowDown} from '../../Assets/workflow arrow.svg'
import ExpandMore from '../../AppBar/ExpandMore';
import { Container,Row,Col } from 'react-bootstrap';
import RetailService from './RetailService';
import GeneralServices from './GeneralServices';
import { Timeline } from 'antd';
import TimelineComp from './TimelineComp';
import Workflow from './Workflow';

const ValuesUI=()=>{
    const values=['Kitting is the process of Assembling, Packing and shipping multiple products in a single package so that customer can purchase them together.', 'Sub-Assembly- a unit assembled separately but designed to fit with other units in a manufactured product. assembly - a group of machine parts that fit together to form a self-contained unit', 'Repackaging is a type of value-added service that takes place whenever a change or reconfiguration needs to be made to a product'];
    const retailServices=["Reticketing means labels you attach to items that you wish to transfer to a retail store. The ticket contains information such as the item number and SKU, retail price and outlet price."," Labelling or using a label is describing someone or something in a word or short phrase. For example, describing someone who has broken a law as a criminal.", "Promotional packaging often features unique graphics, compelling messaging and a call-to-action that creates intrigue, promotes trial and provokes purchase.", "Application control is a security practice that blocks or restricts unauthorized applications from executing in ways that put data at risk."]
    const [textVal,setTextVal]= useState(' Kitting is the process of Assembling, Packing and shipping multiple products in a single package so that customer can purchase them together.'); 
    const [servicesText, setServicesText] = useState('Labelling or using a label is describing someone or something in a word or short phrase. For example, describing someone who has broken a law as a criminal.')
    const [integerVal,setInteger] = useState(0);
    const [integerServices,setIntegerServices] = useState(0);
    const [scrolled,setScrolled]=useState(false);
    const [design,setdesign]=useState(true);
    const [designref,setdesignRef]=useState(true);
    const [scrollPosition, setPosition] = useState(0);
    let updatedText;
    let updatedRetail;
      const div1 = useRef(null)
      const div2 = useRef(null)
      const div3 = useRef(null)

    const scrollTo=(ele)=>{
        ele.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }
   const tickValues=()=>{
    setTextVal(values[integerVal]);
     setInteger((integerVal + 1) % values.length);
   }
    // useEffect(() => {
    //   function updatePosition() {
    //     setPosition(window.pageYOffset);
    //   }
    //   window.addEventListener('scroll', updatePosition);
    //   updatePosition();
    //   console.log('scrolled position is',scrollPosition)
    //   return () => window.removeEventListener('scroll', updatePosition);
    // }, [scrollPosition]);

    // const handleScroll=() => {
    //     const offset=window.scrollY;
    //     if(offset > 750 && offset < 1121){

    //     }
    //     if(offset > 660 && offset < 1121 ){
    //         setdesign(true);
    //     }
    //     else{
    //       setScrolled(false);
    //     }
    //   }

    // useEffect(() => {
    //    window.addEventListener('scroll',handleScroll);

    //   },[]);
     useEffect(() => {
      updatedText = setInterval(() => {
          setTextVal(values[integerVal]);
          setInteger((integerVal + 1) % values.length);
        
        }, 1500);
        return function cleanup() {
          clearInterval( updatedText);
        };
      }, [integerVal]);

      useEffect(() => {
        updatedRetail = setInterval(() => {
          setServicesText(retailServices[integerServices]);
            setIntegerServices((integerServices + 1) % retailServices.length);
          
          }, 1500);
          return function cleanup() {
            clearInterval(updatedRetail);
          };
        }, [integerServices]);
      
    return(
        <div className="values" >
            <SideDots ref1={div1} ref2={div2} ref3={div3}  id1={"div1"} id2={"div2"} id3={"div3"} />
            <div ref={div1} className="values-main" id="div1">
                <h1 className='mainTitle mx-auto'> General Services </h1>
                  <div className='workflowImg'>
                   <GeneralServices data={integerVal}/>
                  </div>
                <div className='txtdiv'> 
                  <p className='txt'>  {textVal} </p>
                </div>
                <ExpandMore clicked={() => {scrollTo(div2.current);}}/>
            </div>
            <div ref={div2} className="values-second" id="div2">
                <h1 className='mainTitle mx-auto'> Retail Services </h1>
                <div className='workflowImg'>
                  <RetailService data={integerServices}/>
                  {/* <Retail className='processSvg'/> */}
                </div>
                <div className='txtdiv'> 
                  <p className='txt'>  {servicesText}  </p>
                </div>
                <ExpandMore clicked={() => {scrollTo(div3.current);}}/>
            </div>
            <div ref={div3} className="values-third" id="div3">
                <h1 className='mainTitle mx-auto'> Our Workflow </h1>
               <Container >
                 <Workflow/>

                 {/* <TimelineComp/> */}
                   {/* <ArrowPath className='path'/>
                   <ArrowDown className='workflowArrow'/>
                   <Row> 
                       <Col lg={5}> 
                       <article className='art-blue'>
                        <h2 className='workItem'>Concept</h2>
                        <p className='workDesc'>Designing</p>
                        </article>
                       </Col>
                       <Col lg={2}> 
                       
                       </Col>
                       <Col lg={5}> 
                       
                       </Col>
                    </Row>
                    <Row className='rowMargin'> 
                       <Col lg={5}> 
                       </Col>
                       <Col lg={2}> 
                       
                       </Col>
                       <Col lg={5}> 
                       <article className='art-green'>
                            <h2 className='workItem'>Planning</h2>
                            <p className='workDesc'>Forecasting</p>
                        </article>
                       </Col>
                    </Row>
                    <Row className='rowMargin'> 
                       <Col lg={5}> 
                       <article className='art-white'>
                            <h2 className='workItem'>Procurement</h2>
                            <p className='workDesc'>Supplier Negotiation</p>
                        </article>
                       </Col>
                       <Col lg={2}> 
                       
                       </Col>
                       <Col lg={5}> 
                      
                       </Col>
                    </Row>
                    <Row className='rowMargin'> 
                       <Col lg={5}> 
                      
                       </Col>
                       <Col lg={2}> 
                       
                       </Col>
                       <Col lg={5}> 
                       <article className='art-black'>
                            <h2 className='workItem'>Manufacture</h2>
                            <p className='workDesc'>Production</p>
                        </article>
                       </Col>
                    </Row>
                    <Row className='rowMargin'> 
                       <Col lg={5}> 
                       <article className='art-black'>
                            <h2 className='workItem'>Testing</h2>
                            <p className='workDesc'>Quality Control</p>
                        </article>
                       </Col>
                       <Col lg={2}> 
                       
                       </Col>
                       <Col lg={5}> 
                      
                       </Col>
                    </Row>
                    <Row> 
                       <Col lg={5}> 
                      
                       </Col>
                       <Col lg={2}> 
                       
                       </Col>
                       <Col lg={5}> 
                       <article className='art-black'>
                            <h2 className='workItem'>Logistics</h2>
                            <p className='workDesc'>Distribution</p>
                        </article>
                       </Col>
                    </Row> */}
               </Container>
                 
            </div>
        </div>
    )
}

export default ValuesUI