
import {
  Typography
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import NavBar from "../components/NavBar";
import { SERVICES } from "../data/services";
function ServicePage() {
  const params = useParams();
  const { t } = useTranslation();
  const [service, setService] = useState({
    index: 0,
    title: "",
    routeParam: "",
    image: null
  })
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

  useEffect(() => {

    const newService = SERVICES.find(el => el.routeParam === params.id)
    setService(newService)

  }, [params.id]);

  return (
    <>
      <NavBar/>
      <div className={`grid grid-cols-9`} style={{ height: contentHeight }}>
          <div className="relative h-full col-span-9 bg-center bg-no-repeat bg-cover lg:col-span-4" style={{ backgroundImage: "url(" + service.image + ")" }}>
            <div className="absolute w-full h-full bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col w-full h-full py-20 pl-10 pr-10 md:py-32 lg:pr-32">
              <Typography
                variant="h2"
                className={`p-1 font-semibold text-3xl lg:text-4xl xl:text-5xl font-poppins cursor-pointer text-white`}
              >
                {t(service.title)}
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
          {
            service.content && (
              <div className="relative col-span-9 p-10 overflow-y-scroll lg:col-span-5 lg:p-20 h-max lg:h-full">
                {t(service.content, { returnObjects: true }).map((item) => {
                  if (item.text) return (<Typography className={`text-${item.fontSize ? item.fontSize : 'sm'} text-justify my-4 font-poppins`} variant="lead" key={item.index}>{item.text}</Typography>)
                  else if (item.list) return (
                    <ul className="ml-3">
                      {item.list.map((listItem,index) => {
                        return (<li className={`text-${item.fontSize ? item.fontSize : 'sm'} text-justify mt-2 font-poppins`} key={index}> 
                          <span className="mr-2 text-base text-blue-900">✓</span>
                         {listItem}</li>)
                      })}
                    </ul>
                  )
                  else if (item.subtitle) return (
                    <Typography className="mt-2 text-base font-medium text-justify text-blue-900 font-poppins" variant="lead" key={item.index}>{item.subtitle}</Typography>
                  )
                  else if (item.image) return ( <img src={item.image} alt={item.alt} className="max-w-md mt-5" />)
                    
                })}
              </div>
            )
          }
      </div>
    </>
  )
}

export default ServicePage