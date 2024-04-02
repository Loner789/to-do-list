// IMPORTS:
import './BurgerPopup.scss';
import React, { useEffect, useRef } from 'react';
import { generateUniqueKey } from '../../utils/utils';
import MenuListItem from '../MenuListItem/MenuListItem';
import { menuItems1, menuItems2 } from '../../utils/constants.js';

// BURGER POPUP COMPONENT:
function BurgerPopup(props) {
  // Constants:
  const { isOpen, onClose } = props;
  const inputRef = useRef(null);

  // Functions:
  const menuItems = [...menuItems1, ...menuItems2].map((item) => {
    const key = generateUniqueKey();

    return (
      <MenuListItem
        key={key}
        name={item.name.split(' ')[0]}
        children={item.items}
        menuItemClassName='burger-popup__menu-item'
        menuItemTextClassName='burger-popup__menu-item-text'
        submenuClassName='burger-popup__submenu'
        submenuItemsClassName='burger-popup__submenu-items'
        submenuItemLinkClassName='burger-popup__submenu-item-link'
      />
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputRef.current.value);
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
    <div className={`burger-popup ${isOpen && 'burger-popup_opened'}`}>
      <div className='burger-popup__container'>
        <form className='burger-popup__form' onSubmit={handleSubmit}>
          <button type='submit' className='burger-popup__search-submit' />
          <input
            type='search'
            className='burger-popup__search'
            ref={inputRef}
          />
        </form>
        <nav className='burger-popup__menu-wrapper'>
          <ul className='burger-popup__menu'>{menuItems}</ul>
        </nav>
      </div>
    </div>
  );
}

export default BurgerPopup;
