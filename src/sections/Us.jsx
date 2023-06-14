import MapaMundi from "../components/svg/MapaMundi";
import NumberCard from "../components/NumberCard";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function Us() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${import.meta.env.VITE_BASE_URL}us`); // Navigates to '/other-route'
  };
  return (
    <>
        <section id="us" className="relative w-full overflow-hidden px-10 py-32 flex flex-col justify-center" >
            <div className="relative flex flex-wrap justify-center z-10">
                <NumberCard number="1" text={t('us_step_one')} classes="m-6"  />
                <NumberCard number="2" text={t('us_step_two')} classes="m-6" />
                <NumberCard number="3" text={t('us_step_three')} classes="m-6" />
            </div>
            <MapaMundi classes="absolute top-[-15px] right-[-35%] z-0"/>
            <MapaMundi classes="absolute bottom-[-15px] left-[-28%] z-0"/>
            <button onClick={handleClick} className="bg-white hover:bg-blue-900 text-blue-900 hover:text-white mx-auto min-w-[200px] rounded py-3 px-4 font-poppins text-sm font-medium mt-10 border-2 border-blue-900">{t('more_about_us')}</button>
        </section>
    </>
  )
}
