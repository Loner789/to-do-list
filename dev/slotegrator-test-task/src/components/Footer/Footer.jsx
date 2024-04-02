// IMPORTS:
import './Footer.scss';
import React, { useContext } from 'react';
import { CurrentLanguageContext } from '../../contexts/CurrentLanguageContext';
import { Link } from 'react-router-dom';
import {
  menuItems1,
  menuItems2,
  textLinks,
  iconLinks,
  sertificatsAPI,
  sertificates,
} from '../../utils/constants.js';
import { generateUniqueKey } from '../../utils/utils';
import ExternalLinkItem from '../ExternalLinkItem/ExternalLinkItem';
import MenuListItem from '../MenuListItem/MenuListItem';

// FOOTER COMPONENT:
function Footer(props) {
  // Constants:
  const currentLanguage = useContext(CurrentLanguageContext);
  const { setIsOpen } = props;

  // Functions:
  const menuItems = [...menuItems1, ...menuItems2].map((item) => {
    const key = generateUniqueKey();

    return (
      <MenuListItem
        key={key}
        name={item.name.split(' ')[0]}
        children={item.items}
        menuItemClassName={`footer__menu-item footer__menu-item_type_${item.name
          .split(' ')[0]
          .toLowerCase()}`}
        menuItemTextClassName='footer__menu-item-text'
        submenuClassName='footer__submenu'
        submenuItemsClassName='footer__submenu-items'
        submenuItemLinkClassName='footer__submenu-item-link'
      />
    );
  });

  const externalTextLinks = textLinks.map((item) => {
    const key = generateUniqueKey();

    return (
      <ExternalLinkItem
        key={key}
        icon={item.icon}
        text={item.text}
        link={item.link}
        className='footer__contacts-textlink'
      />
    );
  });

  const externalIconLinks = iconLinks.map((item) => {
    const key = generateUniqueKey();

    return (
      <ExternalLinkItem
        key={key}
        icon={item.icon}
        link={item.link}
        className='footer__contacts-iconlink'
      />
    );
  });

  const certificatsApiItems = sertificatsAPI.map((item) => {
    const key = generateUniqueKey();

    return (
      <li
        key={key}
        className='footer__certificats-api-item'
        style={{ backgroundImage: `url(${item.icon})` }}
      >
        {item.text}
      </li>
    );
  });

  const certificates = sertificates.map((item) => {
    const key = generateUniqueKey();

    return (
      <li
        key={key}
        className='footer__certificats-certificates-item'
        style={{ backgroundImage: `url(${item.icon})` }}
      ></li>
    );
  });

  const handleLangBtnClick = () => {
    setIsOpen(true);
  };

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__grid-wrapper'>
          <nav className='footer__menu-wrapper'>
            <ul className='footer__menu'>{menuItems}</ul>
          </nav>
          <div className='footer__contacts'>
            <h2 className='footer__contacts-title'>Contact us</h2>
            <div className='footer__contacts-container'>
              <p className='footer__contacts-text'>
                Use only the official channels of communication listed below
              </p>
              <ul className='footer__contacts-textlinks'>
                {externalTextLinks}
              </ul>
              <ul className='footer__contacts-iconlinks'>
                {externalIconLinks}
              </ul>
            </div>
          </div>
        </div>
        <div className='footer__certificats'>
          <div className='footer__certificats-wrapper'>
            <div className='footer__certificats'>
              <p className='footer__certificats-text'>API certified for:</p>
              <ul className='footer__certificats-items'>
                {certificatsApiItems}
              </ul>
            </div>
            <div className='footer__certificats'>
              <p className='footer__certificats-text'>Our certificates:</p>
              <ul className='footer__certificats-items footer__certificats-items_type_certificats'>
                {certificates}
              </ul>
            </div>
          </div>
        </div>
        <div className='footer__down-buttons'>
          <div
            className='footer__down-buttons-lang-btn'
            style={{ backgroundImage: `url(${currentLanguage.flag})` }}
            onClick={handleLangBtnClick}
          >
            {currentLanguage.name}
          </div>
          <div className='footer__down-buttons-wrapper'>
            <Link to='/' target='_blank' className='footer__down-buttons-link'>
              Sitemap
            </Link>
            <Link to='/' target='_blank' className='footer__down-buttons-link'>
              Privacy policy
            </Link>
            <p className='footer__down-buttons-text'>
              &copy; 2015-2023 Slotegrator, All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
