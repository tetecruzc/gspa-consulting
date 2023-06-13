
import NavBar from "../components/NavBar"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { SERVICES } from "../data/services";
import { useTranslation } from 'react-i18next';
import {
  Typography,
} from "@material-tailwind/react";
function ServicePage() {
  const params = useParams();
  const { t } = useTranslation();
  const [service, setService] = useState({
    index: 0,
    title: "",
    routePatam: "",
    image: null
  })

  useEffect(() => {

    const newService = SERVICES.find(el => el.routePatam === params.id)
    console.log(newService)
    setService(newService)

  }, [params.id]);

  return (
    <>
      <NavBar/>
      <div className="grid grid-cols-2 h-[100vh]">
          <div className="relative h-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url(" + service.image + ")" }}>
            <div className="absolute bg-black opacity-50 w-full h-full"></div>
            <div className="relative z-10 h-full w-full flex flex-col py-32 pl-10 pr-32">
            <Typography
              variant="h2"
              className={`p-1 font-semibold text-5xl font-poppins cursor-pointer text-white`}
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
      </div>
    </>
  )
}

export default ServicePage