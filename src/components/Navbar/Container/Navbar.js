import React,{useState,useEffect, useContext} from 'react'
import { GlobalContext } from '../../Context/GlobalContext';
import NavbarUi from '../UI/NavbarUi'

const Navbar=()=>{
   const [scrolled,setScrolled]=useState(false);
   const {active,setActive} = useContext(GlobalContext);

   const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 50 ){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
  useEffect(() => {
     window.addEventListener('scroll',handleScroll)
    },[]);

   return <NavbarUi scroll={scrolled}/>
}

export default Navbar