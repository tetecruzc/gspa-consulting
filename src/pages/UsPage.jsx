
import NavBar from "../components/NavBar"
import { useTranslation } from 'react-i18next';
import {
  Typography,
} from "@material-tailwind/react";
import service1 from '../assets/service1.jpg'
import NumberCard from "../components/NumberCard";
import TeamCard from '../components/TeamCard';
import MapaMundi from '../components/svg/MapaMundi';

function UsPage() {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      <NavBar/>
      <div className={`grid grid-cols-9`}>
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

          <div className="col-span-9 lg:col-span-5 p-10 lg:p-20 relative h-max lg:h-full">
            {t('who_we_are_content', { returnObjects: true }).map((item, index) => {
              if (item.text) return (<Typography key={index} className={`text-${item.fontSize ? item.fontSize : 'sm'} text-justify mt-2 font-poppins`} variant="lead">{item.text}</Typography>)
              else if (item.list) return (
                <ul key={index}>
                  {item.list.map((listItem,index) => {
                    return (<li className={`text-${item.fontSize ? item.fontSize : 'sm'} text-justify mt-2 font-poppins`} key={index}> 
                      <span className="text-base text-blue-900 mr-2">✓</span>
                      {listItem}</li>)
                  })}
                </ul>
              )
              else if (item.subtitle) return (
                <Typography key={index} className="text-base font-medium text-justify mt-2 font-poppins text-blue-900" variant="lead">{item.subtitle}</Typography>
              )
            })}
          </div>
      </div>
      <section className="relative p-10">
        <MapaMundi classes="absolute top-[-15px] right-[-35%] z-0"/>
        <div className="flex flex-wrap justify-center relative z-1">
          {t('us_cards', { returnObjects: true }).map((item, index) => {
            return (
                <NumberCard key={index} size="big" title={item.title} titleSize="medium" text={item.text}  classes="m-6" />
              )
          })}
        </div>
      </section>
      <section className="p-10">
        <div className="flex flex-col justify-center items-center w-full">
              <Typography variant="h2" className="text-red-700 font-poppins px-1 sm:px-4 font-semibold text-3xl text-center uppercase">
                  {t('our_team')}
              </Typography>
              <div className="h-[2px] w-[60px] bg-blue-900 mt-3"></div>
        </div>
        <div className="grid grid-cols-12 gap-6 mt-10">
            {t('team', { returnObjects: true }).map((item, index) => {
              return (
                <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <TeamCard size="big" title={item.name} avatar={item.image} subtitle={item.charge} titleSize="medium" text={item.text} classes="h-full" />
                </div>
              )
            })}
        </div>
      </section>
      
    </div>
  )
}

export default UsPage