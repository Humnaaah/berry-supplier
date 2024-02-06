import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const IconButton=(props)=>{
    return(
        <Button
        variant="contained"
        className={props.style}
        startIcon={props.Icon}>
        {props.txt}
      </Button>
    )
}

export default IconButton