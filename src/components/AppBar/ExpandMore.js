import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ExpandMore=(props)=>{
    return(
        <button className="expandMore mx-auto" onClick={props.clicked}> <ExpandMoreIcon/> </button>
    )
}



export default ExpandMore