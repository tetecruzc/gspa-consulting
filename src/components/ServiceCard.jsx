/* eslint-disable react/prop-types */
import { Typography, Button } from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function ServiceCard({title, image, routeParam, noContent}) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`${import.meta.env.VITE_BASE_URL}service/${routeParam}`); // Navigates to '/other-route'
    };
    return (
        <div className="relative  h-[400px] bg-center bg-cover bg-no-repeat rounded-md overflow-hidden drop-shadow-2xl hover:scale-95 hover:drop-shadox-sm transition ease-out duration-100 cursor-pointer"  style={{ backgroundImage: "url(" + image + ")" }}>
            <div className="absolute w-full h-full bg-black opacity-60 z-0"></div>
            <div className="relative z-10 h-full flex flex-col justify-center items-center py-6 px-4">
                <Typography variant="h3" className="text-white font-poppins text-xl text-center mt-10">
                    { title }
                </Typography>
                <div className="h-[2px] w-[60px] bg-white mt-6 mb-auto"></div>
                {!noContent &&
                    <Button onClick={handleClick} variant="filled" size="lg" className='bg-blue-900 w-[75%] mx-auto  mb-6' ripple={true}>
                        {t('read_more')}
                    </Button>
                }
            </div>
        </div>
    )
  }
  