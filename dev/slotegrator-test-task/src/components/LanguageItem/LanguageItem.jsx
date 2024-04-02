// IMPORTS:
import './LanguageItem.scss';
import React from 'react';
import { Link } from 'react-router-dom';

// LANGUAGE ITEM COMPONENT:
function LanguageItem(props) {
  // Constants:
  const { name, icon, setIsOpen, onLanguageChange } = props;

  // Functions:
  const handleLanguageChange = () => {
    onLanguageChange(name, icon);
    setIsOpen(false);
  };

  return (
    <li className='language-item'>
      <Link
        to='/'
        className='language-item__link'
        style={{ backgroundImage: `url(${icon})` }}
        onClick={handleLanguageChange}
      >
        {name}
      </Link>
    </li>
  );
}

export default LanguageItem;
