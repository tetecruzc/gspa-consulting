import { Typography } from "@material-tailwind/react";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

    return (
      <div className="flex flex-col justify-center items-center font-poppins w-full px-3 py-5 mx-3  bg-white">
            <Typography variant="lead" className="text-blue-gray-900 font-poppins px-4 font-normal text-sm text-start">
                {t('rights')}
            </Typography>
      </div>
    )
  }
  