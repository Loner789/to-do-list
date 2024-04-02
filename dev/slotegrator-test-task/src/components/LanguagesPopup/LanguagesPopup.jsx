// IMPORTS:
import './LanguagesPopup.scss';
import React, { useEffect } from 'react';
import LanguageItem from '../LanguageItem/LanguageItem';
import { generateUniqueKey } from '../../utils/utils';
import { languages } from '../../utils/constants';

// LANGUAGES POPUP COMPONENT:
function LanguagesPopup(props) {
  // Constants:
  const { isOpen, onClose, setIsOpen, onLanguageChange } = props;

  // Functions:
  const languagesItems = languages.map((item) => {
    const key = generateUniqueKey();

    return (
      <LanguageItem
        name={item.name}
        icon={item.icon}
        key={key}
        setIsOpen={setIsOpen}
        onLanguageChange={onLanguageChange}
      />
    );
  });

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Side-effects:
  useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);

    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose]);

  return (
    <div
      className={`popup ${isOpen && 'popup_opened'}`}
      onMouseDown={handleOverlayClick}
    >
      <div className='popup__container'>
        <p className='popup__title'>Other languages</p>
        <ul className='popup__languages-list'>{languagesItems}</ul>
        <button type='button' className='popup__close-btn' onClick={onClose} />
      </div>
    </div>
  );
}

export default LanguagesPopup;
