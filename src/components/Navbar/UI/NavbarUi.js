import React, {useContext, useState, useEffect} from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/desktop/Logo_BD.png';
import CloseIcon from '@material-ui/icons/Close';
import Menu from '../../Assets/menu.svg'
import { GlobalContext } from '../../Context/GlobalContext';

const NavbarUi=(props)=>{
    const {active,setActive} = useContext(GlobalContext);
    const [activeLink,setActiveLink] = useState(localStorage.getItem('active'));
    const [collapsed, setIsCollapsed] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const handleNavCollapse = () => setIsCollapsed(!collapsed);
    const maintainLink=(value)=>{
        setActive(value)
        setActiveLink(value)
        console.log("Active state is",value)
        localStorage.setItem('active', value )
    }
    const toggleCollapse=()=>{
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
       maintainLink(activeLink)
       },[activeLink]);

    return(
        <Navbar collapseOnSelect expand="lg" variant='light' className={props.scroll  ? "header2": `navbar navbar-expand-lg navbar-light`}>
            <Container>
                <Navbar.Brand> <Nav.Link className='brandlink' href="/" onClick={()=>maintainLink("home")} > <img src={Logo} alt="BerryDirect"/> </Nav.Link>  </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavCollapse}>{collapsed === false ?  <img src={Menu} className='nav-Togle-img'/> :  <CloseIcon className='nav-Togle'/> }  </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav ml-auto" isOpen={collapsed} className={props.scroll? "mt-10-per": "mt-10-per"}>
                    <Nav className="justify-content-end">
                        <Nav.Link href='/about' className={activeLink=== "about" ? ' nav-link active':'nav-link'}  onClick={()=>maintainLink("about")}>
                            About Us
                        </Nav.Link>
                        <Nav.Link href='solutions' className={activeLink=== "solutions" ? 'nav-link active ':'nav-link'}  onClick={()=>maintainLink("solutions")} >
                             Solutions 
                        </Nav.Link>
                        <Nav.Link href="/values" className={activeLink === "values" ? 'nav-link active ':'nav-link'} onClick={()=>maintainLink("values")}>
                            Value Added
                        </Nav.Link>
                        <Nav.Link  href="http://berrydirect.com/catalog/" target="_blank" >
                           Catalogs 
                        </Nav.Link>
                        <Nav.Link href="/contact" className={activeLink===  "contact"  ? 'nav-link active':'nav-link'} onClick={()=>maintainLink("contact")}>
                             Contact Us
                        </Nav.Link>
                        {/* <Nav.Link href="/terms" className={activeLink===  "terms"  ? 'nav-link active navdis':'nav-link navdis'} onClick={()=>maintainLink("terms")}>
                            Terms of Use 
                        </Nav.Link>
                        <Nav.Link href="/privacy" className={activeLink===  "privacy"  ? 'nav-link active navdis':'nav-link navdis'} onClick={() => maintainLink("privacy")}>
                            Privacy Policy 
                        </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarUi