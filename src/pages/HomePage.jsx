import Banner from "../sections/Banner"
import Us from "../sections/Us"
import Services from "../sections/Services"
import Quote from "../sections/Quote";
// import Contact from "../sections/Contact";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";
import MainCarousel from "../sections/MainCarousel";
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('homePageTitle')}</title>
        <meta property="og:title" content={t('homePageTitle')} />
        <meta property="og:description" content={t('homePageDescription')} />
        <meta property="og:image" content="https://tetecruzc.github.io/gspa-consulting/assets/banner-121754d7.jpg" />
        <meta property="og:url" content="https://tetecruzc.github.io/gspa-consulting/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('homePageTitle')} />
        <meta name="twitter:description" content={t('homePageDescription')} />
        <meta name="twitter:image" content="https://tetecruzc.github.io/gspa-consulting/assets/banner-121754d7.jpg" />
      </Helmet>
      <NavBar/>
      <Banner/>
      <Us/>
      <MainCarousel/>
      <Services/>
      <Quote/>
      {/* <Contact/> */}
      <Footer/>
    </>
  )
}

export default HomePage