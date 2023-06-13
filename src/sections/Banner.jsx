import bannerBackground from '../assets/banner.jpg'
import { Typography, Button } from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';

export default function Banner() {
  const { t } = useTranslation();

  return (
    <>
        <section id="banner" className={`font-poppins relative translate-y-[-82px] min-h-[90vh] py-5 bg-center bg-cover bg-no-repeat flex justify-center items-center`} style={{ backgroundImage: "url(" + bannerBackground + ")" }}>
            <div className="absolute w-full h-full bg-black opacity-50 z-0"></div>
            <div className="relative mx-auto z-1">
                <div className="absolute w-full h-full bg-black opacity-50 z-1"></div>
                <div className="relative z-2 p-6 text-slate-100  flex flex-col justify-center">
                  <Typography
                    variant="h1"
                    color="white"
                    className="font-poppins text-center text-4xl font-semibold "
                  >
                    GSPA Consulting
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="font-poppins mt-4 text-center font-light text-base"
                  >
                    {t('subtitle')}
                  </Typography>
                  {/* <button className=" bg-red-700 mx-auto min-w-[30%] rounded  py-3 px-4 text-sm mt-3">Contacto</button> */}
                  <Button variant="filled" size="lg" className='bg-red-800 w-max mx-auto mt-6 ' ripple={true}>
                    {t('whatsapp_contact')}
                  </Button>
                </div>
            </div>
        </section>
    </>
  )
}
