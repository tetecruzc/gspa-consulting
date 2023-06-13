import Banner from "../sections/Banner"
import Us from "../sections/Us"
import Services from "../sections/Services"
import Quote from "../sections/Quote";
// import Contact from "../sections/Contact";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";
import MainCarousel from "../sections/MainCarousel";

function HomePage() {

  return (
    <>
      <NavBar/>
      <Banner/>
      <Us/>
      <MainCarousel/>
      <Services/>
      <Quote/>
      {/* <Contact/> */}
      <Footer/>
    </>
  )
}

export default HomePage