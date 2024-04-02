// IMPORTS:
import React from 'react';
import SubmenuItem from '../SubmenuItem/SubmenuItem';
import { generateUniqueKey } from '../../utils/utils';

// MENU LIST ITEM COMPONENT:
function MenuListItem(props) {
  // Constants:
  const {
    name,
    children,
    menuItemClassName,
    menuItemTextClassName,
    submenuClassName,
    submenuItemsClassName,
    submenuItemLinkClassName,
  } = props;

  // Functions:
  const handleListItemClick = (e) => {
    e.target.classList.contains(menuItemTextClassName) &&
      e.target.nextSibling.classList.toggle(`${submenuClassName}_visible`);
  };

  const items = children.map((element) => {
    const key = generateUniqueKey();

    return (
      <SubmenuItem
        key={key}
        name={element.itemName}
        link={element.itemLink}
        className={submenuItemLinkClassName}
      />
    );
  });

  return (
    <li className={menuItemClassName} onClick={handleListItemClick}>
      <p className={menuItemTextClassName}>{name}</p>
      <div className={submenuClassName}>
        <ul className={submenuItemsClassName}>{items}</ul>
      </div>
    </li>
  );
}

export default MenuListItem;
