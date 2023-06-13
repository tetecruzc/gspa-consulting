
import NavBar from "../components/NavBar"
import Contact from "../sections/Contact"
import { useEffect, useState } from "react";

function ContactPage() {
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const navbarElement = document.getElementsByTagName('nav')[0]
      if (navbarElement){
        const navbarStyles = getComputedStyle(navbarElement);
        const navbarHeight = navbarElement.offsetHeight + parseInt(navbarStyles.marginTop) + parseInt(navbarStyles.marginBottom);
        const windowHeight = window.innerHeight;
        const adjustedHeight = windowHeight - navbarHeight;
        setContentHeight(adjustedHeight);
      }
    };

    // Call handleResize initially and on window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div style={{ minHeight: contentHeight }}>
      <NavBar/>
      <Contact/>
    </div>
  )
}

export default ContactPage
