
import NavBar from "../components/NavBar"
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import {
  Typography,
} from "@material-tailwind/react";
import service1 from '../assets/service1.jpg'

function UsPage() {
  const { t } = useTranslation();

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
    <>
      <NavBar/>
      <div className={`grid grid-cols-9`} style={{ height: contentHeight }}>
          <div className="relative h-full bg-center bg-cover bg-no-repeat col-span-9 lg:col-span-4" style={{ backgroundImage: "url(" + service1 + ")" }}>
            <div className="absolute bg-black opacity-50 w-full h-full"></div>
            <div className="relative z-10 h-full w-full flex flex-col py-20 md:py-32 pl-10 pr-10 lg:pr-32">
              <Typography
                variant="h2"
                className={`p-1 font-semibold text-3xl lg:text-4xl xl:text-5xl font-poppins cursor-pointer text-white`}
              >
                {t('who_we_are')}
              </Typography>
              <Typography
                variant="lead"
                className={`p-1 font-normal text-xl font-poppins cursor-pointer text-white`}
              >
                GSPA Consulting
              </Typography>
              <div className="w-[100px] h-[3px] bg-blue-900 mt-4 mx-4"></div>
            </div>
          </div>

          <div className="col-span-9 lg:col-span-5 p-10 lg:p-20 relative h-max lg:h-full overflow-y-scroll">
            {t('who_we_are_content', { returnObjects: true }).map((item) => {
              if (item.text) return (<Typography className={`text-${item.fontSize ? item.fontSize : 'sm'} text-justify mt-2 font-poppins`} variant="lead" key={item.index}>{item.text}</Typography>)
              else if (item.list) return (
                <ul>
                  {item.list.map((listItem,index) => {
                    return (<li className={`text-${item.fontSize ? item.fontSize : 'sm'} text-justify mt-2 font-poppins`} key={index}> 
                      <span className="text-base text-blue-900 mr-2">✓</span>
                      {listItem}</li>)
                  })}
                </ul>
              )
              else if (item.subtitle) return (
                <Typography className="text-base font-medium text-justify mt-2 font-poppins text-blue-900" variant="lead" key={item.index}>{item.subtitle}</Typography>
              )
            })}
          </div>
      </div>
    </>
  )
}

export default UsPage