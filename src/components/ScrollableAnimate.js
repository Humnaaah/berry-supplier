
import React, { Fragment,useEffect,useState,useRef, useCallback } from 'react'

const ScrollableAnimate=()=>{
	function positionTheDot() {

		// What percentage down the page are we? 
		var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
	  
		// Get path length
		var path = document.getElementById("theMotionPath");
		var pathLen = !!path && path.getTotalLength();
		
		// Get the position of a point at <scrollPercentage> along the path.
		var pt = !!path && path.getPointAtLength(scrollPercentage * pathLen);
		
		// Position the red dot at this point
		var dot = document.getElementById("dot");
		!!dot && dot.setAttribute("transform", "translate("+ pt.x + "," + pt.y + ")");
		
	  };
	  
	  // Update dot position when we get a scroll event.
	  window.addEventListener("scroll", positionTheDot);
	  
	  // Set the initial position of the dot.
	  positionTheDot();
    return(
        <Fragment>
            {/* <svg width="793px" height="3719px" viewBox="0 0 793.5 3719" id="testing-svg">
            <path ref={pathRef} id='testing-path car-path' d="M321.62 106c12.83 51.17 54.11 182.87 145.38 216.5 114 42 270-21 275 147s-392 136-528 275-34 289-34 289 64 110 205 135 270 12 337 165-121 283-121 283-99 58-183 61-312 63-360 281 146 283 146 283 116 30 207 28 284 22 301 144-34 196-94 247-183 101-215 114-205 47-245 224 152 270 190 281c36.35 10.52 183.43 101.57 192.62 204"
					stroke-dasharray="14.02 14.02"
					stroke="#a7abb2"
					stroke-miterlimit="10"
					stroke-width="2"
					fill="none"
					class="path"
				></path>
            </svg> */}

            {/* <div ref={circleRef} class="circle" id='testing-circle' ></div>  */}

			<svg class='test-svg '>
   
    <path d="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110" stroke="green" stroke-width="2" fill="none" id="theMotionPath"/>
    <circle cx="10" cy="110" r="3" fill="#fff"/>
    <circle cx="110" cy="10" r="3" fill="#fff"/>


    <circle cx="0" cy="0" r="5" fill="red" id="dot"/>
</svg>

<div class="verylong">
</div>
        </Fragment>
    )
}


export default ScrollableAnimate