import React,{Fragment,useState,useEffect, useRef} from 'react'
import '../../Styles/timeline.scss'
import WorkflowItem from './WorkflowItem';

const TimelineComp=()=>{
    const [scrollPosition, setPosition] = useState(0);
    const [scrolled,setScrolled]=useState(false);
    const [design,setdesign]=useState(true);
    const [visibleSection, setVisibleSection] = useState('');
    const headerRef = useRef(null);
    const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(1250);
  let classStyle = '';
  const step = 30;
    let arrowMove = document.getElementById('arrowed');
    const flow1 = useRef(null)
    const flow2 = useRef(null)
    const flow3 = useRef(null)
    const flow4 = useRef(null)
    const flow5 = useRef(null)
    const flow6 = useRef(null)

    // const trackScrollPosition=()=>{
    //   const y = window.scrollY;
    //   console.log('scrolled track',  Math.min(Math.floor(y/30)+1, 20))
    //   const positionScroll = Math.min(Math.floor(y/30)+1, 20);
    //   docume
    // }
    
    useEffect(() => {
      const onScroll = ()=> {
         
        console.log('scrolling function',window.pageYOffset )
        let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
        if (currentPosition === scrollTop) {
          arrowMove.classList.add('timeArrow')
          setScrolling(false);
        } else {
          // upscroll code
          setScrollTop(currentPosition)
          setScrolling(true);
        }
        setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
      }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);
   return(
    <Fragment>
    <div class="container">
<div class="row">
<div class="col">
    <div id='arrowed'className={(scrollTop > 1250 && scrollTop < 1293) ? "flow1": (scrollTop > 1292 && scrollTop < 1332) ? "flo1btw" :  (scrollTop > 1331 && scrollTop < 1361) ? "flow2" :  (scrollTop > 1360 && scrollTop < 1410) ? "flow2btw" :  (scrollTop > 1409 && scrollTop < 1466) ? "flow3" :  (scrollTop > 1465 && scrollTop < 1766) ? "flow3btw":  (scrollTop > 1765 && scrollTop < 1911) ? "flow4" : (scrollTop > 1910 && scrollTop < 2000) ? 'flow4btw':  (scrollTop > 1999 && scrollTop < 2130) ? "flow5":  (scrollTop > 2129) ? "flow6" :'timeArrow'}/>
  <div class="main-timeline" ref={headerRef} >
    <div class="timeline" ref={flow1} id='flow1'>
      <a href="#" class="timeline-content">
        {/* <span class="timeline-year">2018</span> */}
        {/* <div class="timeline-icon">
          <i class="fa fa-rocket" aria-hidden="true"></i>
        </div> */}
        <div class="content">
        <WorkflowItem title={"Concept"} sub={"Designing"} fill={"#0e7bbf"} xtitle={120} ytitle={180} xsub={150.648} ysub={199}/>
        </div>
      </a>
    </div>
    <div class="timeline" ref={flow2} id='flow2'>
      <a href="#" class="timeline-content">
        {/* <div class="timeline-icon">
          <i class="fa fa-users" aria-hidden="true"></i>
        </div> */}
        <div class="content">
          <WorkflowItem title={"Planning"} sub={"Forecasting"} fill={"#91BF4C"} xtitle={120} ytitle={180} xsub={140.648} ysub={199}/>
        </div>
      </a>
    </div>
    <div class="timeline" ref={flow3} id='flow3'>
      <a href="#" class="timeline-content">
        {/* <span class="timeline-year">2017</span>
        <div class="timeline-icon">
          <i class="fa fa-cog" aria-hidden="true"></i>
        </div> */}
        <div class="content">
          <WorkflowItem title={"Procurement"} sub={"Supplier Negotiation"} xtitle={90} ytitle={180} xsub={105.648} ysub={199} fill={"#e7e7e7"}/>
        </div>
      </a>
    </div>
    <div class="timeline" ref={flow4} id='flow4'>
      <a href="#" class="timeline-content">
        {/* <span class="timeline-year">2017</span>
        <div class="timeline-icon">
          <i class="fa fa-heart" aria-hidden="true"></i>
        </div> */}
        <div class="content">
        <WorkflowItem title={"Manufacture"} sub={"Production"} xtitle={100} ytitle={180} xsub={170.648} ysub={199} fill={"#000000"}/>
    
        </div>
      </a>
    </div>
    <div class="timeline" ref={flow5} id='flow5'>
      <a href="#" class="timeline-content">
        {/* <span class="timeline-year">2017</span>
        <div class="timeline-icon">
          <i class="fa fa-globe" aria-hidden="true"></i>
        </div> */}
        <div class="content">
        <WorkflowItem title={"Testing "} sub={"Quality Control"} fill={"#000000"} xtitle={125} ytitle={180} xsub={120.648} ysub={199}/>
        </div>
      </a>
    </div>
    <div class="timeline lastelement" ref={flow6}>
      <a href="#" class="timeline-content">
        {/* <span class="timeline-year">2017</span>
        <div class="timeline-icon">
          <i class="fa fa-apple" aria-hidden="true"></i>
        </div> */}
        <div class="content">
        <WorkflowItem title={"Logistics"} sub={"Distribution"} fill={"#000000"} xtitle={120} ytitle={180} xsub={140.648} ysub={199}/>
 
        </div>
      </a>
    </div>
   
  </div>
</div>
</div>
</div>    
</Fragment>

   )
   }


export default TimelineComp