import React, { Fragment } from 'react'


const WorkflowItem=(props)=>{
    return(
        <Fragment>
            <svg width="100%" height="100%" viewBox="0 0 341 341" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="4_BD_Home" transform="translate(-766.000000, -1707.000000)">
                        <g id="Planing" transform="translate(766.000000, 1707.500000)">
                            <polygon id="Polygon" stroke="#FFFFFF" stroke-width="2" transform="translate(170.500000, 170.000000) rotate(-330.000000) translate(-170.500000, -170.000000) " points="170.5 46 278.320163 108 278.320163 232 170.5 294 62.6798372 232 62.6798372 108"></polygon>
                            <polygon id="Polygon" fill={props.fill} opacity="0.614439499" transform="translate(170.820163, 169.637150) rotate(-330.000000) translate(-170.820163, -169.637150) " points="170.820163 55.6371501 269.547059 112.63715 269.547059 226.63715 170.820163 283.63715 72.0932667 226.63715 72.0932667 112.63715"></polygon>
                            <text id="Planning"  font-size="28" font-weight="normal" fill="#FFFFFF">
                                <tspan x={`${props.xtitle}`} y={`${props.ytitle}`}>{props.title}</tspan>
                            </text>
                            <text id="Forecasting" font-size="16" font-weight="normal" fill="#FFFFFF">
                                <tspan x={`${props.xsub}`} y={`${props.ysub}`}>{props.sub}</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </svg>
        </Fragment>
    )
}


export default WorkflowItem