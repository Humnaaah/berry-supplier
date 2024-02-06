import React,{useState} from 'react'

const CoverItem=(props)=>{
    const[level,setLevel]= useState(props.level)
    console.log('LEvle props', props.level, props.id)
    const className = 'item level' + props.level
    return(
        <div className={className}>
                  {props.id}
              </div>
    )
}

export default CoverItem