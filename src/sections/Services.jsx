import Dots from "../components/svg/Dots";
import { Typography } from "@material-tailwind/react";
import ServiceCard from "../components/ServiceCard";
import { SERVICES } from "../data/services";
import { useTranslation } from 'react-i18next';

export default function Services() {
    const { t } = useTranslation();
  
  return (
    <>
        <section id="services" className="relative w-full overflow-hidden px-0 sm:px-14 md:px-10 py-32 flex flex-col justify-center" >
            <Dots classes="absolute top-[-15px] right-[-25%] z-0"/>
            <Dots classes="absolute bottom-[-15px] left-[-18%] z-0"/>
            <div className="flex flex-col justify-center items-center w-full">
                <Typography variant="h2" className="text-red-700 font-poppins px-1 sm:px-4 font-semibold text-3xl text-center uppercase">
                    {t('our_services')}
                </Typography>
                <div className="h-[2px] w-[60px] bg-blue-900 mt-3"></div>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-10 lg:gap-20 mt-20 px-10 sm:px-30 md:px-15 lg:px-20">
                { SERVICES.map((el) => {
                   return <ServiceCard key={el.index} title={t(el.title)} image={el.image} routeParam={el.routeParam} />
                })}
            </div>
        </section>
    </>
  )
}