import React,{useRef, useEffect, useState} from 'react'

const SideDots=(props)=>{
    const [visibleSection, setVisibleSection] = useState();
    const headerRef = useRef(null);
    const sectionRefs = [
        { section: `${props.id1}`, ref: props.ref1 },
        { section: `${props.id2}`, ref: props.ref2 },
        { section: `${props.id3}`, ref: props.ref3 },
        { section: `${props.id4}`, ref: props.ref4 },
        { section: `${props.id5}`, ref: props.ref5 },
      ];
  
    const scrollTo=(ele)=>{
        ele.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    useEffect(() => {
        const handleScroll = () => {
          const { height: headerHeight } = getDimensions(headerRef.current);
          const scrollPosition = window.scrollY + headerHeight;
      
          const selected = sectionRefs.find(({ section, ref }) => {
            const ele = !!ref && ref.current;
            if (ele) {
              const { offsetBottom, offsetTop } = getDimensions(ele);
              return scrollPosition > offsetTop && scrollPosition < offsetBottom;
            }
          });
      
          if (selected && selected.section !== visibleSection) {
            setVisibleSection(selected.section);
          }
        };
        handleScroll();
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
      }, [visibleSection]);

      const getDimensions = (ele) => {
        const { height } = ele.getBoundingClientRect();
        const offsetTop = ele.offsetTop;
        const offsetBottom = offsetTop + height;
      
        return {
          height,
          offsetTop,
          offsetBottom,
        };
      };
    return(
        <ul className="nav-dots" id="js-dots" ref={headerRef}>
            <li className={`header_link ${visibleSection === `${props.id1}` ? "selectedSec" : "nav-dot"}`} onClick={() => {scrollTo(props.ref1.current);}}></li>
            <li  className={`header_link ${visibleSection === `${props.id2}` ? "selectedSec" : "nav-dot"}`} onClick={() => {scrollTo(props.ref2.current);}}></li>
            <li  className={`header_link ${visibleSection === `${props.id3}` ? "selectedSec" : "nav-dot"}`} onClick={() => {scrollTo(props.ref3.current);}}></li>
           {props.fourth === true ? 
            <li className={`header_link ${visibleSection === `${props.id4}` ? "selectedSec" : "nav-dot"}`} onClick={() => {scrollTo(props.ref4.current);}}></li> 
            : ""}
            {props.extra === true ? 
                          <li className={`header_link ${visibleSection === `${props.id5}` ? "selectedSec" : "nav-dot"}`} onClick={() => {scrollTo(props.ref5.current);}}></li>  
            : "" }
        </ul>
    )
}

export default SideDots