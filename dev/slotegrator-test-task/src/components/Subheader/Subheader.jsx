// IMPORTS:
import './Subheader.scss';
import React, { useContext, useState } from 'react';
import { CurrentLanguageContext } from '../../contexts/CurrentLanguageContext';
import { Link } from 'react-router-dom';
import DEFlag from '../../images/DE-flag_icon.svg';
import ENFlag from '../../images/EN-flag_icon.svg';

// SUBHEADER COMPONENT:
function Subheader(props) {
  // Constants:
  const { onLanguageChange, setIsOpen } = props;
  const currentLanguage = useContext(CurrentLanguageContext);
  const [isCloseBtnClicked, setIsCloseBtnClicked] = useState(false);

  // Functions:
  const handleCloseBtnClick = () => {
    setIsCloseBtnClicked(!isCloseBtnClicked);
  };

  const handleLanguageChange = (e) => {
    const name = e.target.textContent;
    const icon = e.target.style.backgroundImage
      .replace('url(', '')
      .replace(')', '');

    onLanguageChange(name, icon);
  };

  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  return (
    <div className={`subheader ${isCloseBtnClicked && 'subheader_invisible'}`}>
      <div className='subheader__wrapper'>
        <p className='subheader__text'>
          You’re viewing international version of website. Choose preferred
          region to see language localized content.
        </p>
        <div className='subheader__buttons'>
          <div
            type='button'
            className='subheader__language-btn'
            style={{ backgroundImage: `url(${currentLanguage.flag})` }}
          >
            {currentLanguage.name}
          </div>
          <div className='subheader__languages-container'>
            <ul className='subheader__languages'>
              <li className='subheader__language'>
                <Link
                  to='/'
                  className='subheader__language-link subheader__language-link_type_german'
                  onClick={handleLanguageChange}
                  style={{ backgroundImage: `url(${DEFlag})` }}
                >
                  German
                </Link>
              </li>
              <li className='subheader__language'>
                <Link
                  to='/'
                  className='subheader__language-link'
                  onClick={handleLanguageChange}
                  style={{ backgroundImage: `url(${ENFlag})` }}
                >
                  English
                </Link>
              </li>
              <li className='subheader__language'>
                <button
                  type='button'
                  className='subheader__language-link subheader__language-link_type_other'
                  onClick={handleOpenPopup}
                >
                  Other Languages
                </button>
              </li>
            </ul>
          </div>
          <button
            type='button'
            className='subheader__close-btn'
            onClick={handleCloseBtnClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Subheader;
