import MapaMundi from "../components/svg/MapaMundi";
// import Background from "../components/svg/Background";
import Svg from "../components/svg/Svg";
import { Typography, Avatar, Button } from "@material-tailwind/react";
import contact from '../assets/contact.png'
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();
  
  return (
    <>
        <section id="contact" className="relative w-full h-full  px-4 md:px-10  flex flex-col justify-center items-center mt-10" >
            <MapaMundi classes="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-30%] z-0 scale-125"/>
            <div className="flex flex-col justify-center items-center w-full">
                <Typography variant="h2" className="text-red-700 font-poppins px-4 font-semibold text-3xl text-center uppercase">
                    {t('contact_us_through')}
                </Typography>
                <div className="h-[2px] w-[60px] bg-blue-900 mt-3"></div>
            </div>
            <div className="h-max z-10 grid grid-cols-12 my-16">
                <div className="shadow-lg bg-gray-50 flex rounded-xl col-start-1 md:col-start-3 xl:col-start-5 col-span-12 md:col-span-7 xl:col-span-4 relative overflow-hidden">
                    {/* <Background classes="absolute top-0 left-0 w-full  z-0"/> */}
                    <div className="absolute bg-blue-dark h-[50%] w-full"></div>
                    <div className="flex flex-col relative w-full">
                        <div className="flex flex-col w-full">
                            <div className="w-full md:w-[80%] py-6 pl-0 md:pl-4">
                                <Typography variant="lead" className="text-gray-50 font-poppins px-4 font-semibold text-xl text-center md:text-start">
                                    Ing. Juan Carlos Chirinos Martinez
                                </Typography>
                                <Typography variant="lead" className="text-gray-50 font-poppins px-4 font-normal text-sm text-center md:text-start">
                                    {t('ceo')}
                                </Typography>
                            </div>
                            <Avatar src={contact} alt="Juan Chirinos" withBorder={true} className="p-0.5 border-gray-500 ml-auto mr-auto md:mr-6 relative md:translate-y-[-25%]" size="xxl" />
                        </div>
                        <div className="flex flex-col justify-start px-6 mt-10 md:mt-0">

                            <div className="flex">
                                <Svg classes="w-[20px]" name="email" fill="#7f1d1d" />
                                <Typography variant="lead" className="text-blue-900 font-poppins px-4 text-sm  text-start">
                                    juancchirinos@yahoo.com
                                </Typography>
                            </div>
                            <div className="flex mt-4">
                                <Svg classes="w-[20px]" name="phone" fill="#7f1d1d" />
                                <Typography variant="lead" className="text-blue-900 font-poppins px-4 text-sm  text-start">
                                    +58 414 6602885
                                </Typography>
                            </div>
                            <div className="flex my-4">
                                <Svg classes="w-[18px]" name="location" fill="#7f1d1d" />
                                <Typography variant="lead" className="text-blue-900 font-poppins px-4 text-sm  text-start">
                                    Caracas, Venezuela
                                </Typography>
                            </div>
                            <a href={`https://wa.me/584146602885?text=Hola,%20me%20gustaría%20conocer%20más%20sobre%20GSPA.`} target="_blank" rel="noopener noreferrer" className='mx-auto'>
                                <Button variant="filled" size="lg" className='bg-red-900 w-max mx-auto mb-3 ' ripple={true}>
                                    {t('whatsapp_contact')}
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="py-8 px-6">
                © Copyright 2023. by GSPA Consulting. Todos los derechos reservados
            </div> */}
        </section>
    </>
  )
}