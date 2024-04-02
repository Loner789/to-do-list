// IMPORTS:
import './Header.scss';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { menuItems1, menuItems2 } from '../../utils/constants.js';
import MenuListItem from '../MenuListItem/MenuListItem';
import { generateUniqueKey } from '../../utils/utils';

// HEADER COMPONENT:
function Header(props) {
  // Constants:
  const {
    isSearchBtnClicked,
    onSearchBtnClick,
    isBurgerMenuOpen,
    onBurgerBtnClick,
  } = props;
  const inputRef = useRef(null);

  // Functions:
  const firstMenuItems = menuItems1.map((item) => {
    const key = generateUniqueKey();

    return (
      <MenuListItem
        key={key}
        name={item.name}
        children={item.items}
        menuItemClassName='header__menu-item'
        menuItemTextClassName='header__menu-item-text'
        submenuClassName='header__submenu'
        submenuItemsClassName='header__submenu-items'
        submenuItemLinkClassName='header__submenu-item-link'
      />
    );
  });

  const secondMenuItems = menuItems2.map((item) => {
    const key = generateUniqueKey();

    return (
      <MenuListItem
        key={key}
        name={item.name}
        children={item.items}
        menuItemClassName='header__menu-item'
        menuItemTextClassName='header__menu-item-text'
        submenuClassName='header__submenu'
        submenuItemsClassName='header__submenu-items'
        submenuItemLinkClassName='header__submenu-item-link'
      />
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputRef.current.value);
  };

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <Link to='/' target='blank' className='header__logo' />
        <nav
          className={`header__menu ${
            isSearchBtnClicked && 'header__menu_invisible'
          }`}
        >
          <ul className='header__menu-first-part'>{firstMenuItems}</ul>
          <ul className='header__menu-second-part'>{secondMenuItems}</ul>
        </nav>
        <div className='header__buttons'>
          <div className={isSearchBtnClicked ? 'header__search-wrapper' : ''}>
            <form
              className={`header__search-form ${
                isSearchBtnClicked && 'header__search-form_visible'
              }`}
              onSubmit={handleSubmit}
            >
              <button
                type='submit'
                className='header__search-form-submit'
                aria-label='Search.'
              />
              <input
                type='search'
                className='header__search-form-input'
                ref={inputRef}
              />
            </form>
            <button
              type='button'
              className={`header__search-btn ${
                isSearchBtnClicked && 'header__search-btn_active'
              }`}
              aria-label='Search button.'
              onClick={onSearchBtnClick}
            />
          </div>
          <button type='button' className='header__contacts-btn'>
            Contact us
          </button>
          <button
            type='button'
            className={`header__burger-btn ${
              isBurgerMenuOpen && 'header__burger-btn_active'
            }`}
            aria-label='Burger button.'
            onClick={onBurgerBtnClick}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
