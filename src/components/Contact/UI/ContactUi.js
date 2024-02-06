import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from './IconButton';
import '../../Styles/contact.scss';


const ContactUi=()=>{
    return(
        <Fragment>
            <div className='contactDiv'>
                    <h1 className='main'> Toll Free Number </h1>
                    <span className='tollFree'> <a href="tel:+958007367542"> <CallIcon/> 800-736-7542  </a></span>
                    <div className='contactInfo'>
                        <Row>
                            <Col lg={6}>
                                <div className='card cardBlue'>
                                    <div className='cardContent'>
                                        <h1 className='cardTitle'> California Warehouse </h1>
                                        <span className='address'> 511 Harley Knox Blvd Perris CA 92571 </span>
                                        <br/>
                                        <a className='cardLink' href='https://www.google.com/maps/place/Berry+Direct/@33.8568206,-117.2430367,17z/data=!3m1!4b1!4m5!3m4!1s0x80dca104e8b4b49f:0xf3d1318b70be1a4e!8m2!3d33.8568206!4d-117.240848?shorturl=1'> 
                                            <IconButton txt={"Get Direction"} style={"directions btnText"} Icon={<LocationOnIcon/>}/>
                                        </a>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className='card cardGreen'>
                                    <div className='cardContent'>
                                        <h1 className='cardTitle'> Indiana Warehouse </h1>
                                        <span className='address'> 441 Airtech Pkwy Plainfield IN 46168 </span>
                                        <br/>
                                        <a className='cardLink' href='https://www.google.com/maps/place/511+Harley+Knox+Blvd,+Perris,+CA+92571,+USA/@33.8568326,-117.2430514,17z/data=!3m1!4b1!4m5!3m4!1s0x80dca1338635267d:0x43bd1e19b7999011!8m2!3d33.8568326!4d-117.2408627?shorturl=1'> 
                                            <IconButton txt={"Get Direction"} style={"directions btnText"}  Icon={<LocationOnIcon/>}/>
                                        </a>
             
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div> 
        </Fragment>
    )
}


export default ContactUi