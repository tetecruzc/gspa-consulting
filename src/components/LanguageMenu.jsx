/* eslint-disable react/prop-types */
import React from "react";
import {
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useTranslation } from 'react-i18next';
import en from '../assets/en.png'
import es from '../assets/es.png'
import i18n from '../i18n';

export default function LanguageMenu({classes}) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { t } = useTranslation();
 
  const triggers = {
    onMouseEnter: () => setOpenMenu(true),
    onMouseLeave: () => setOpenMenu(false),
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
 
  return (
    <Menu >
      <MenuHandler>
        <Button
          {...triggers}
          variant="text"
          className={`flex items-center gap-3 text-sm font-light capitalize tracking-normal ${classes} font-poppins hover:bg-transparent`}
        >
          <Avatar src={i18n.language === 'es' ? es : en} alt={i18n.language.toUpperCase()} size="xs" />
           {t(i18n.language)}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem className="font-poppins" onClick={() => changeLanguage('es')}>
          <Avatar src={es} alt="ES" size="xs" className="mr-2" />
          {t('es')}
        </MenuItem>
        <MenuItem className="font-poppins" onClick={() => changeLanguage('en')}>
          <Avatar src={en} alt="EN" size="xs" className="mr-2" />
          {t('en')}
        </MenuItem>
      </MenuList>
    </Menu>
  );
}