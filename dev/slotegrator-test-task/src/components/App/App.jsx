// IMPORTS:
import './App.scss';
import React, { useState } from 'react';
import { CurrentLanguageContext } from '../../contexts/CurrentLanguageContext';
import Subheader from '../Subheader/Subheader';
import Header from '../Header/Header';
import BurgerPopup from '../BurgerPopup/BurgerPopup';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import LanguagesPopup from '../LanguagesPopup/LanguagesPopup';
import DEFlag from '../../images/DE-flag_icon.svg';

// BASE COMPONENT OF APPLICATION:
function App() {
  // Variables:
  const [currentLanguage, setCurrentLanguage] = useState({
    name: 'German',
    flag: DEFlag,
  });
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);
  const [isLanguagesPopupOpen, setIsLanguagesPopupOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  // Functions:
  const handleSearchBtnClick = () => {
    setIsSearchBtnClicked(!isSearchBtnClicked);
  };

  const handleLanguageChange = (name, icon) => {
    setCurrentLanguage({ name: name, flag: icon });
  };

  const closeLanguagesPopup = () => {
    setIsLanguagesPopupOpen(false);
  };

  const closeBurgerMenuPopup = () => {
    setIsBurgerMenuOpen(false);
  };

  const handleBurgerBtnClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <CurrentLanguageContext.Provider value={currentLanguage}>
      <div className='page'>
        <Subheader
          onLanguageChange={handleLanguageChange}
          setIsOpen={setIsLanguagesPopupOpen}
        />
        <Header
          isSearchBtnClicked={isSearchBtnClicked}
          onSearchBtnClick={handleSearchBtnClick}
          isBurgerMenuOpen={isBurgerMenuOpen}
          onBurgerBtnClick={handleBurgerBtnClick}
        />
        <BurgerPopup isOpen={isBurgerMenuOpen} onClose={closeBurgerMenuPopup} />
        <Main />
        <Footer setIsOpen={setIsLanguagesPopupOpen} />
        <LanguagesPopup
          isOpen={isLanguagesPopupOpen}
          onClose={closeLanguagesPopup}
          setIsOpen={setIsLanguagesPopupOpen}
          onLanguageChange={handleLanguageChange}
        />
      </div>
    </CurrentLanguageContext.Provider>
  );
}

export default App;
