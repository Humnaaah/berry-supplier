import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
const AppBar=()=>{
    return(
        <div className="app-bar">
            <a href="tel:+9518427200" className="app-barTxt"> For any assistance please call <span> <PhoneIcon className="main-icon"/> </span> 951-842-7200 </a>
        </div>
    )
}

export default AppBar