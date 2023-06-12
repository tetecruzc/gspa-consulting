import MapaMundi from "../components/svg/MapaMundi";
import Background from "../components/svg/Background";
import Svg from "../components/svg/Svg";
import { Typography, Avatar } from "@material-tailwind/react";
import contact from '../assets/contact.png'
import { useTranslation } from 'react-i18next';


export default function Contact() {
    const { t } = useTranslation();
  
  return (
    <>
        <section id="contact" className="relative w-full overflow-hidden px-10 py-32 flex flex-col justify-center" >
            <MapaMundi classes="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-30%] z-0 scale-125"/>
            <div className="flex flex-col justify-center items-center w-full">
                <Typography variant="h2" className="text-red-700 font-poppins px-4 font-semibold text-3xl text-center uppercase">
                    {t('contact_us_through')}
                </Typography>
                <div className="h-[2px] w-[60px] bg-blue-900 mt-3"></div>
            </div>
            <div className="h-max z-10 grid grid-cols-12 mt-16">
                <div className="shadow-lg bg-gray-50 flex rounded-xl col-start-5 col-span-4 relative overflow-hidden">
                    <Background classes="absolute top-0 left-0 w-full z-0"/>
                    {/* <img src={contact} alt="Juan Chirinos" className="h-[120px]" /> */}
                    <div className="flex flex-col relative">
                        {/* <Typography variant="lead" className="text-blue-900 font-poppins px-4 font-semibold text-xl text-start">
                            Ing. Juan Carlos Chirinos Martinez
                        </Typography>
                        <Typography variant="lead" className="text-blue-900 font-poppins px-4 font-semibold text-base text-start">
                            Socio fundador de GSPA Consulting.
                        </Typography>
                        <Typography variant="lead" className="text-blue-900 font-poppins px-4 text-base  text-start">
                            Director de Operaciones 
                        </Typography> */}
                        <div className="flex flex-col">
                            <div className="w-full py-6 px-4">
                                <Typography variant="lead" className="text-gray-50 font-poppins px-4 font-semibold text-xl text-start">
                                    Ing. Juan Carlos Chirinos Martinez
                                </Typography>
                                <Typography variant="lead" className="text-gray-50 font-poppins px-4 font-normal text-sm text-start">
                                    {t('ceo')}
                                </Typography>
                            </div>
                            <Avatar src={contact} alt="Juan Chirinos" withBorder={true} className="p-0.5 border-gray-500 ml-auto mr-6 relative translate-y-[-25%]" size="xxl" />
                        </div>
                        <div className="flex flex-col justify-start px-6">

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