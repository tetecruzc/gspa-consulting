import React, { useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from "@material-tailwind/react";
import logo from "../assets/logo.png"
import { SERVICES } from "../data/services";
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageMenu from './LanguageMenu';

export default function Example() {
  const [openNav, setOpenNav] = React.useState(false);
  const [background, setBackground] = React.useState('bg-transparent');
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement = document.getElementById('us');
      const rect = sectionElement.getBoundingClientRect();
      const isAtBottom = rect.bottom <= window.innerHeight;

      if (isAtBottom) {
        setBackground('bg-white')
        // Perform any actions you want when the scroll reaches the target section
      }
      else setBackground('bg-transparent')
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Link
      to="banner"
      smooth={true}
      duration={500}
      offset={-100}
    >
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal font-poppins cursor-pointer"
      >
        {t('home')}
      </Typography>
    </Link>
      
      <Link
      to="us"
      smooth={true}
      duration={500}
      offset={-100}
    >
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal font-poppins cursor-pointer"
      >
          {t('us')}
      </Typography>
    </Link>
      <Menu
        placement="bottom-end"
        animate={{
            mount: { y: 0 },
            unmount: { y: 25 },
        }}
        >
            <MenuHandler>
                <Button variant="text" className={`p-1 text-sm hover:bg-transparent font-light capitalize font-poppins ${background === 'bg-transparent' ? 'text-white' : 'text-blue-gray-900'} `}>{t('services')}</Button>
            </MenuHandler>
            <MenuList>
                {SERVICES.map((el)  =>{
                    return <MenuItem key={el.index}>{t(el.title)}</MenuItem>
                })}
            </MenuList>
        </Menu>
    <Link
      to="contact"
      smooth={true}
      duration={500}
      offset={-100}
    >
      <Typography
        as="li"
        variant="small"
        className="p-1 font-normal font-poppins cursor-pointer"
      >
          {t('contact')}
      </Typography>
    </Link>
    <LanguageMenu textColor={background === 'bg-transparent' ? 'text-white' : 'text-blue-gray-900'}/>
    </ul>
  );
 
  return (
    <>
      <Navbar className={`sticky inset-0 z-40 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 font-poppins border-transparent ${background}`}>
        <div className="flex items-center justify-between text-white">
            <img src={logo} alt="GSPA Consulting" className="h-[40px]" />
            <div className={`flex items-center gap-4 font-poppins ${background === 'bg-transparent' ? 'text-white' : 'text-blue-gray-900'}`}>
                <div className="mr-4 hidden lg:block">{navList}</div>
                
                {/* <Button
                size="sm"
                className="hidden lg:inline-block bg-red-800 capitalize"
                >
                <span>Contactar</span>
                </Button> */}
                <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
                >
                {openNav ? (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                ) : (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                    </svg>
                )}
                </IconButton>
            </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </MobileNav>
      </Navbar>
      {/* <div className="mx-auto max-w-screen-md py-12">
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </Card>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          What is Material Tailwind
        </Typography>
        <Typography color="gray" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?. I think we need to start from scratch can my
          website be in english?, yet make it sexy i&apos;ll pay you in a week
          we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more projects lined up charge extra
          the next time.
        </Typography>
      </div> */}
    </>
  );
}