import MapaMundi from "../components/svg/MapaMundi";
// import Background from "../components/svg/Background";
import ContactCard from "../components/ContactCard";
import { Typography} from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();

  return (
    <>
        <section id="contact" className="relative w-full h-[100vh]  px-4 py-10 md:px-10  flex flex-col justify-start items-center overflow-hidden" >
            <MapaMundi classes="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-30%] z-0 scale-150"/>
            <div className="flex flex-col justify-center items-center w-full">
                <Typography variant="h2" className="text-red-700 font-poppins px-4 font-semibold text-3xl text-center uppercase">
                    {t('sendUsAMessage')}
                </Typography>
                <div className="h-[2px] w-[60px] bg-blue-900 mt-3"></div>
            </div>
            <div className="mt-10 grid grid-cols-12 w-full">
                {/* col-start-1 md:col-start-3 xl:col-start-5 col-span-12 md:col-span-7 xl:col-span-4 */}
                <ContactCard/>
            </div>
            {/* <div className="py-8 px-6">
                © Copyright 2023. by GSPA Consulting. Todos los derechos reservados
            </div> */}
        </section>
    </>
  )
}