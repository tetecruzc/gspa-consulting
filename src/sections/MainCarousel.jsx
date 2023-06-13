import { Carousel, Typography } from "@material-tailwind/react";
import {MAINS} from '../data/mains'
import { useTranslation } from 'react-i18next';

export default function MainCarousel() {
  const { t } = useTranslation();
  
  return (
    <>
      <Carousel className="carousel bg-gray-200" autoplay autoplayDelay={10000}>
        { MAINS.map((el) => {
          return (
          <div key={el.index} className="relative w-full">
            <div className="relative inset-0 h-full w-full flex flex-col bg-gray-200 p-8 md:p-20">
                <div className="flex justify-center items-center w-full">
                  <div className="h-[1.5px] w-[50px] sm:w-[100px] md:w-[200px] hidden sm:block bg-blue-900"></div>
                  <Typography variant="h3" className="text-blue-900 font-poppins px-4 font-medium text-2xl text-center">
                    {t(el.title)}
                  </Typography>
                  <div className="h-[1.5px] w-[50px] sm:w-[100px] md:w-[200px] hidden sm:block bg-blue-900"></div>
                </div>
                <Typography variant="lead" className="text-slate-950 font-poppins px-6 font-normal text-center text-base mt-10 ">
                  {t(el.subtitle)}
                </Typography>
            </div>
          </div>)
        })}
      </Carousel>
    </>
  )
}