import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import '../Styles/coverflow.scss'

const FeedbackItem=(props)=>{
    console.log('data is', props.data)
    return(
      
        <div className={props.data.activeStatus === "active" ? "ActiveCard": "not-activeCard"}>
          <FormatQuoteIcon className='quotes'/>
          <p> “{props.data.feed}” </p>
          <div className='customer-detail'>       
            <Avatar alt="Cindy Baker" src={props.data.img} />
            <h6> {props.data.name} </h6>
            <label>{props.data.designation}, <b> {props.data.organization} </b>  </label> 
          </div>
          </div>
    )
}


export default FeedbackItem