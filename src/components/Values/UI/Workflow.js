
import React, { Fragment,useEffect,useRef,useState,useCallback } from 'react'
import Arrow from '../../Assets/workflow arrow.svg'

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };
const Workflow=()=>{
    const circleRef=useRef()
	const pathRef=useRef()
    const bodyRef = useRef()
    const [transformStyle, setTransformStyle] = useState("translate(736px, 238px)")
    // "translate(736px, 238px)"
    const [y, setY] = useState(window.scrollY);
    const [scrollTop, setScrollTop] = useState(0);

    const handleNavigation = useCallback(
        (e) => {
          const window = e.currentTarget;
          const extraDiv =  document.getElementById("extraPath");
          const elementStyle = document.getElementById("svgElement")
          if (y > window.scrollY) {
            if(window.scrollY < 1199){
                console.log("scrolling up for svg");
                setTransformStyle( `translate( 736px, 238px)`)
                    //  extraDiv.style.height="0px";
                    //  elementStyle.style.position="relative";
                    //   elementStyle.style.marginTop="5%";
                    //   elementStyle.style.height="100%";
                    //   elementStyle.style.transform="translateX(0%)";
                    
            }
            console.log("scrolling up",y);

          } else if (y < window.scrollY) {
            if(window.scrollY >= 1200 && window.scrollY <=1215 ){
                console.log("scrolling second for svg");
                setTransformStyle( `translate(792px, 255px) rotate(13deg) `)
            }
            
            if(window.scrollY >= 1216 && window.scrollY <=1230 ){
                console.log("scrolling third for svg");
                setTransformStyle( `translate(  822px, 260px) rotate(41deg) `)
            }
            if(window.scrollY >= 1231 && window.scrollY <=1250 ){
                console.log("scrolling forth for svg");
                setTransformStyle( `translate(  851px, 297.317px) rotate(52deg) `)
            }
            if(window.scrollY >= 1251 && window.scrollY <=1280 ){
                console.log("scrolling fifth for svg");
                setTransformStyle( `translate(  851px, 320.317px) rotate(52deg) `)
            }
            if(window.scrollY >= 1281 && window.scrollY <=1320 ){
                console.log("scrolling sixth for svg");
                setTransformStyle( `translate(796px, 448.317px) rotate( 135deg) `)
            }
            if(window.scrollY >= 1321 && window.scrollY <=1345 ){
                console.log("scrolling sixth for svg");
                setTransformStyle( `translate(634px, 514.317px) rotate(118deg) `)
            }
            if(window.scrollY >= 1346 && window.scrollY <=1380 ){
                console.log("scrolling sixth for svg");
                setTransformStyle( `translate(622px, 645.317px) rotate(35deg) `)
            }
           
            if(window.scrollY >= 1381 && window.scrollY <=1410 ){
                console.log("scrolling sixth for svg");
                setTransformStyle( `translate(830px, 753.317px) rotate(35deg) `)
            }
            if(window.scrollY >= 1411 && window.scrollY <=1435 ){
                console.log("scrolling sixth for svg");
                setTransformStyle( ` translate(841px, 871.317px) rotate(115deg) `)
            }
            if(window.scrollY >= 1436 && window.scrollY <=1450 ){
                console.log("scrolling sixth for svg");
                setTransformStyle( `  translate(754px, 920.317px) rotate(144deg)`)
            }
            if(window.scrollY >= 1451 && window.scrollY <=1490 ){
                console.log("scrolling sixth for svg");
                setTransformStyle( ` translate(646px, 952.317px) rotate(115deg) `)
            }
            if(window.scrollY >= 1491 && window.scrollY <=1510 ){
                console.log("scrolling sixth for svg");
                setTransformStyle( ` translate(601px, 1017.317px) rotate(92deg) `)
            }
            if(window.scrollY >= 1511 && window.scrollY <=1520 ){
                console.log("scrolling sixth for svg");
                setTransformStyle( ` translate(593px, 1066.32px) rotate(81deg) `)
            }
            if(window.scrollY >= 1521 && window.scrollY <=1530 ){
                console.log("scrolling sixth for svg");
                setTransformStyle( ` translate(593px, 1066.32px) rotate(74deg) `)
            }
            
                if(window.scrollY > 1531){
                    console.log("scrolling down for svg");
                    positionTheArrow()
                    // extraDiv.style.height="2000px";
                    // elementStyle.style.position="fixed";
                    // elementStyle.style.top="12%";
                    // elementStyle.style.height="88%";
                    // elementStyle.style.width="auto";
                    // elementStyle.style.transform="translateX(60%)";
                }
                    // extraDiv.style.height="2000px";
                    // elementStyle.style.position="fixed";
                    // elementStyle.style.marginTop="100px";

            console.log("scrolling down",y);
          }
          setY(window.scrollY);
        },
        [y]
      );

    const positionTheArrow=()=>{
        var element = document.getElementById("testing-container");
       
        // if(window.pageYOffset >= 1200 ){
            var pathCont = document.getElementById("testing-container");
            // if(pathCont.scrollHeight - pathCont.scrollTop === document.documentElement.clientHeight){
                console.log('Height is', window.scrollY  )
            // }
            var path = document.getElementById("testing-svg");
            var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
            var pathLen = path && path.getTotalLength();
            var pt = !!path && path.getPointAtLength(scrollPercentage * pathLen);
         
            console.log('arrow scroller', `translate( ${pt.x}px ,  ${pt.y}px )`, pathLen,scrollPercentage,path.getPointAtLength(scrollPercentage * pathLen) )
            // var dot = document.getElementById("dots");
            // dot.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
            if(window.scrollY >=1587 && window.scrollY <=1635){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(8deg) `)
            }
            if(window.scrollY > 1635 && window.scrollY < 1680){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(36deg) `)
            }
            if(window.scrollY > 1681 && window.scrollY < 1702){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(45deg) `)
            }
            if(window.scrollY > 1702 && window.scrollY < 1790){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(72deg) `)
            }
            if(window.scrollY > 1789 && window.scrollY < 1800){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(107deg) `)
            }
            if(window.scrollY > 1800 && window.scrollY < 1849){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(122deg) `)
            }
            if(window.scrollY > 1848 && window.scrollY < 1884){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(120deg) `)
            }
            if(window.scrollY > 1884 && window.scrollY < 2000){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(156deg) `)
            }
           
            if(window.scrollY > 1999 && window.scrollY < 2011){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(136deg) `)
            }
            if(window.scrollY > 2010 && window.scrollY < 2023){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(137deg) `)
            }
            if(window.scrollY > 2022 && window.scrollY < 2040){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(130deg) `)
            }
            if(window.scrollY > 2039 && window.scrollY < 2099){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(119deg) `)
            }
            if(window.scrollY > 2098 && window.scrollY < 2118){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(96deg) `)
            }
            if(window.scrollY > 2117 && window.scrollY < 2208){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(61deg) `)
            }
            if(window.scrollY > 2209 && window.scrollY < 2288){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(35deg) `)
            }
            if(window.scrollY > 2287){
                setTransformStyle( `translate( ${pt.x}px ,  ${pt.y}px ) rotate(354deg) `)
            }
           
           
        // }
        // !!circleRef && circleRef.current.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
    }

    
	// useEffect(() => {
    //         window.addEventListener('scroll',positionTheArrow);
    //         // return () => {
    //         //     window.removeEventListener("scroll", positionTheArrow);
    //         //     positionTheDot();
    //         //   };
    // }, [positionTheArrow])

//     useEffect(() => {
//         window.addEventListener('resize',positionTheArrow);
//         positionTheArrow()
//         return () => {
//             window.removeEventListener("resize", positionTheArrow);
//           };
// }, [positionTheArrow])

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
        // return () => {
        //   window.removeEventListener("scroll", handleNavigation);
        // };
      }, [handleNavigation]);

            return(

        <div className='wrapperPath'>

{/* <div class="verylong">
</div> */}
{/* <motion.div
        className="box"
        // initial={{ offsetDistance: "0%", scale: 0 }}
        // animate={{ offsetDistance: "100%", scale: 0 }}
        transition={transition}
      /> */}
{/* <div class="circle" ref={circleRef} id='testing-circle' transform="translate(695.754521, 234.887219) rotate(-87.000000) translate(-695.754521, -234.887219) translate(635.254521, 167.387219)"> */}
    
    {/* </div>   */}
  
            <div className='fixedPath' id="testing-container">
                <div id='svgElement'>
                        <svg width="100%" height="100%" viewBox="0 0 1440 1550" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="4_BD_Home" transform="translate(0.000000, -1288.000000)">
            <g id="Group-20"  transform="translate(0.000000, 1150.500000)">
                {/* <g >
            <rect id="Rectangle" fill="#000000" opacity="0.542469113" x="0" y="0" width="1440" height="1921"></rect>
                </g> */}
            
                {/* <g id="Group" transform="translate(705.000000, 1681.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <g id="down">
                        <path d="M15,0 C6.72914062,0 0,6.72849609 0,15 C0,23.2715039 6.72914062,30 15,30 C23.2708594,30 30,23.2715039 30,15 C30,6.72849609 23.2708594,0 15,0 Z M15,28.7500195 C7.41820312,28.7500195 1.24998047,22.5817969 1.24998047,15 C1.24998047,7.41820312 7.41820312,1.24998047 15,1.24998047 C22.5817969,1.24998047 28.7500195,7.41820312 28.7500195,15 C28.7500195,22.5817969 22.5817969,28.7500195 15,28.7500195 Z" id="Shape"></path>
                        <path d="M21.8742889,11.6694523 L15.4411765,18.6556088 L9.00806404,11.6694523 C8.76390436,11.4043002 8.36839732,11.4043002 8.12429623,11.6694523 C7.88013655,11.9346044 7.88013655,12.3641164 8.12429623,12.6292049 L14.9992633,20.0952695 C15.1213138,20.2278137 15.2812744,20.2941176 15.4411765,20.2941176 C15.6010785,20.2941176 15.7609805,20.2278137 15.8830897,20.0952695 L22.7580567,12.6292049 C23.0022164,12.3640528 23.0022164,11.9345408 22.7580567,11.6694523 C22.513897,11.4043002 22.11839,11.4043002 21.8742889,11.6694523 Z" id="Path"></path>
                    </g>
                </g> */}
                {/* <g id="Group" transform="translate(1274.000000, 1631.000000)">
                    <circle id="Oval" fill="#91BF4C" cx="8.5" cy="60.5" r="8.5"></circle>
                    <ellipse id="Oval" stroke="#FFFFFF" cx="8.5" cy="34" rx="8.5" ry="8"></ellipse>
                    <circle id="Oval" stroke="#FFFFFF" cx="8.5" cy="8.5" r="8.5"></circle>
                </g> */}
                <g id="Group-6" transform="translate(306.000000, 1116.500000)">
                    <polygon id="Polygon" stroke="#FFFFFF" stroke-width="2" transform="translate(170.500000, 170.000000) rotate(-330.000000) translate(-170.500000, -170.000000) " points="170.5 46 278.320163 108 278.320163 232 170.5 294 62.6798372 232 62.6798372 108"></polygon>
                    <polygon id="Polygon" fill="#000000" opacity="0.406113735" transform="translate(170.820163, 169.637150) rotate(-330.000000) translate(-170.820163, -169.637150) " points="170.820163 55.6371501 269.547059 112.63715 269.547059 226.63715 170.820163 283.63715 72.0932667 226.63715 72.0932667 112.63715"></polygon>
                    <text id="Testing" font-size="28" font-weight="normal" fill="#FFFFFF">
                        <tspan x="120" y="180">Testing</tspan>
                    </text>
                    <text id="Quality-Control" font-size="16" font-weight="normal" fill="#FFFFFF">
                        <tspan x="102" y="199">Quality Control</tspan>
                    </text>
                </g>
                <g id="Group-6" transform="translate(306.000000, 659.500000)">
                    <polygon id="Polygon" stroke="#FFFFFF" stroke-width="2" transform="translate(170.500000, 170.000000) rotate(-330.000000) translate(-170.500000, -170.000000) " points="170.5 46 278.320163 108 278.320163 232 170.5 294 62.6798372 232 62.6798372 108"></polygon>
                    <polygon id="Polygon" fill="#E7E7E7" opacity="0.406113735" transform="translate(170.820163, 169.637150) rotate(-330.000000) translate(-170.820163, -169.637150) " points="170.820163 55.6371501 269.547059 112.63715 269.547059 226.63715 170.820163 283.63715 72.0932667 226.63715 72.0932667 112.63715"></polygon>
                    <text id="Procurement" font-size="28" font-weight="normal" fill="#FFFFFF">
                        <tspan x="81.58" y="180">Procurement</tspan>
                    </text>
                    <text id="Supplier-Negotiation" font-size="16" font-weight="normal" fill="#FFFFFF">
                        <tspan x="100.996" y="199">Supplier Negotiation</tspan>
                    </text>
                </g>
                <g id="Group-15" transform="translate(306.000000, 222.000000)">
                    <polygon id="Polygon" stroke="#FFFFFF" stroke-width="2" transform="translate(170.500000, 170.000000) rotate(-330.000000) translate(-170.500000, -170.000000) " points="170.5 46 278.320163 108 278.320163 232 170.5 294 62.6798372 232 62.6798372 108"></polygon>
                    <polygon id="Polygon" fill="#0E7ABF" opacity="0.662631722" transform="translate(170.820163, 169.637150) rotate(-330.000000) translate(-170.820163, -169.637150) " points="170.820163 55.6371501 269.547059 112.63715 269.547059 226.63715 170.820163 283.63715 72.0932667 226.63715 72.0932667 112.63715"></polygon>
                    <text id="Concept" font-size="28" font-weight="normal" fill="#FFFFFF">
                        <tspan x="110" y="170">Concept</tspan>
                    </text>
                    <text id="Designing"  font-size="16" font-weight="normal" fill="#FFFFFF">
                        <tspan x="150" y="189">Designing</tspan>
                    </text>
                </g>
                <g id="Group-18" transform="translate(766.000000, 884.500000)">
                    <polygon id="Polygon" stroke="#FFFFFF" stroke-width="2" transform="translate(170.500000, 170.000000) rotate(-330.000000) translate(-170.500000, -170.000000) " points="170.5 46 278.320163 108 278.320163 232 170.5 294 62.6798372 232 62.6798372 108"></polygon>
                    <polygon id="Polygon" fill="#000000" opacity="0.406113735" transform="translate(170.820163, 169.637150) rotate(-330.000000) translate(-170.820163, -169.637150) " points="170.820163 55.6371501 269.547059 112.63715 269.547059 226.63715 170.820163 283.63715 72.0932667 226.63715 72.0932667 112.63715"></polygon>
                    <text id="Manufacture" font-size="28" font-weight="normal" fill="#FFFFFF">
                        <tspan x="83.13" y="178">Manufacture </tspan>
                    </text>
                    <text id="Production" font-size="16" font-weight="normal" fill="#FFFFFF">
                        <tspan x="177.5" y="197">Production</tspan>
                    </text>
                </g>
                <g id="Group-6" transform="translate(766.000000, 1343.000000)">
                    <polygon id="Polygon" stroke="#FFFFFF" stroke-width="2" transform="translate(170.500000, 170.000000) rotate(-330.000000) translate(-170.500000, -170.000000) " points="170.5 46 278.320163 108 278.320163 232 170.5 294 62.6798372 232 62.6798372 108"></polygon>
                    <polygon id="Polygon" fill="#000000" opacity="0.406113735" transform="translate(170.820163, 169.637150) rotate(-330.000000) translate(-170.820163, -169.637150) " points="170.820163 55.6371501 269.547059 112.63715 269.547059 226.63715 170.820163 283.63715 72.0932667 226.63715 72.0932667 112.63715"></polygon>
                    <text id="Logistics"  font-size="28" font-weight="normal" fill="#FFFFFF">
                        <tspan x="110" y="180">Logistics</tspan>
                    </text>
                    <text id="Distribution"  font-size="16" font-weight="normal" fill="#FFFFFF">
                        <tspan x="139" y="199">Distribution</tspan>
                    </text>
                </g>
                {/* <text id="At-vero-eos-et-accus" font-family="Poppins-Regular, Poppins" font-size="18" font-weight="normal" fill="#FFFFFF">
                    <tspan x="394.133" y="136">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</tspan>
                </text> */}
                {/* <text id="Our-Workflow" font-family="Poppins-Bold, Poppins" font-size="45" font-weight="bold" line-spacing="57" fill="#FFFFFF">
                    <tspan x="562" y="94.5">Our Workflow</tspan>
                </text> */}
            
                <g id="Planing" transform="translate(766.000000, 419.000000)">
                    <polygon id="Polygon" stroke="#FFFFFF" stroke-width="2" transform="translate(170.500000, 170.000000) rotate(-330.000000) translate(-170.500000, -170.000000) " points="170.5 46 278.320163 108 278.320163 232 170.5 294 62.6798372 232 62.6798372 108"></polygon>
                    <polygon id="Polygon" fill="#91BF4C" opacity="0.614439499" transform="translate(170.820163, 169.637150) rotate(-330.000000) translate(-170.820163, -169.637150) " points="170.820163 55.6371501 269.547059 112.63715 269.547059 226.63715 170.820163 283.63715 72.0932667 226.63715 72.0932667 112.63715"></polygon>
                    <text id="Planning" font-size="28" font-weight="normal" fill="#FFFFFF">
                        <tspan x="110" y="180">Planning</tspan>
                    </text>
                    <text id="Forecasting"  font-size="16" font-weight="normal" fill="#FFFFFF">
                        <tspan x="135.648" y="199">Forecasting</tspan>
                    </text>
                </g>
                <circle id="Oval" fill="#FFFFFF" cx="736" cy="1623.5" r="8.5"></circle>
                        <circle id="Oval" fill="#FFFFFF" cx="736" cy="231.5" r="8.5"></circle> 
                   
                   
                    {/* <g transform="translate(719.665624, 928.911567) rotate(-270.000000) translate(-719.665624, -928.911567) ">  */}
                        {/* <path  ref={pathRef} d="M724.85 1627.57C677.15 1627.43 631.23 1603.92 608.42 1563.37C576.25 1506.16 602.3 1436.69 666.61 1408.21C685.66 1399.77 705.94 1395.88 725.88 1396.07L726.29 1395.88C745.9 1395.93 765.82 1392.03 784.56 1383.73C848.87 1355.25 874.92 1285.78 842.74 1228.57C820.1 1188.31 774.66 1164.84 727.31 1164.39L727.96 1164.4C680.25 1164.27 634.33 1140.76 611.53 1100.22C579.35 1043 605.4 973.53 669.71 945.06C688.77 936.62 709.05 932.72 728.99 932.91L729.39 932.72C749.01 932.77 768.92 928.87 787.66 920.57C851.97 892.1 878.02 822.63 845.84 765.41C823.2 725.15 777.77 701.69 730.42 701.24L732.03 701.25C684.32 701.12 638.39 677.61 615.59 637.07C583.42 579.85 609.47 510.39 673.78 481.91C692.83 473.47 713.11 469.55 733.05 469.74L733.24 469.75C752.85 469.8 772.77 465.9 791.51 457.6C855.82 429.12 881.87 359.66 849.69 302.44C827.05 262.18 781.61 238.72 734.27 238.26L734.91 238.27" id="testing-svg" stroke="#B8C4C2" stroke-width="2" stroke-dasharray="2,8" ></path> */}
                        <path  ref={pathRef} d="M734.91,238.27 L734.27,238.26 C781.61,238.72 827.05,262.18 849.69,302.44 C881.87,359.66 855.82,429.12 791.51,457.6 C772.77,465.9 752.85,469.8 733.24,469.75 L733.05,469.74 C713.11,469.55 692.83,473.47 673.78,481.91 C609.47,510.39 583.42,579.85 615.59,637.07 C638.39,677.61 684.32,701.12 732.03,701.25 L730.42,701.24 C777.77,701.69 823.2,725.15 845.84,765.41 C878.02,822.63 851.97,892.1 787.66,920.57 C768.92,928.87 749.01,932.77 729.39,932.72 L728.99,932.91 C709.05,932.72 688.77,936.62 669.71,945.06 C605.4,973.53 579.35,1043 611.53,1100.22 C634.33,1140.76 680.25,1164.27 727.96,1164.4 L727.31,1164.39 C774.66,1164.84 820.1,1188.31 842.74,1228.57 C874.92,1285.78 848.87,1355.25 784.56,1383.73 C765.82,1392.03 745.9,1395.93 726.29,1395.88 L725.88,1396.07 C705.94,1395.88 685.66,1399.77 666.61,1408.21 C602.3,1436.69 576.25,1506.16 608.42,1563.37 C631.23,1603.92 677.15,1627.43 724.85,1627.57 " id="testing-svg" stroke="#B8C4C2" stroke-width="2" stroke-dasharray="2,8" ></path>
                       
                        <defs>
                            <pattern id="image" patternUnits="objectBoundingBox" height="100%" width="100%">
                            <image  height="90" width="90" x='0' y='0' href={Arrow} preserveAspectRatio='none'></image>
                            </pattern>
                        </defs>
                        <circle cx='0' cy='0'  fill="url(#image)"   r = "3%"  stroke-width = "1"  id='dots' style={{transform:transformStyle}} >
                            </circle> 
                           
                            {/* <g id="Group-4" style={{transform:transformStyle}}>
                                <g id="Group-5">
                                    <path id="Path-8" fill="#91BF4C" class="shp2" d="M696.05 224.95L779.16 247.21L680.76 170.12L696.05 224.95Z" />
                                    <path id="Path-8-Copy" fill="#669900" class="shp9" d="M696.73 224.78L779.83 247.04L656.07 264.61L696.73 224.78Z" />
                                </g>
                            </g> */}
                            {/* <g id="Group-5" > */}
                               
                                {/* <polygon id="Path-8" fill="#91BF4C" points="48.6608823 28.9661654 48.6608823 115 97.6608823 4.54747351e-13"></polygon>
                                <polygon id="Path-8-Copy" fill="#669900" transform="translate(24.500000, 58.107067) scale(-1, 1) translate(-24.500000, -58.107067) " points="5.68434189e-14 29.5732326 5.68434189e-14 115.607067 49 0.607067224"></polygon> */}
                            {/* </g> */}
                        
                                        {/* </g> */}
                                       
                                        {/* <g  transform="translate(710, 161) rotate(45.000000)   ">
                                            <image xlinkHref={Arrow} id='testing-circle' className='circle'  style={{transform:transformStyle}} ref={circleRef} />
                                            </g> */}
                            </g>
                            </g>
                        
                        </g>
                       
                      
        </svg>
                                            
    

                </div>
            </div>
            <div class="verylong" id='extraPath'></div>
            {/* <div class="verylong">
</div> */}
        </div>

    )
}




export default Workflow