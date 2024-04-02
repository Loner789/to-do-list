// IMPORTS:
import './SubmenuItem.scss';
import React from 'react';
import { Link } from 'react-router-dom';

// SUBMENU ITEM COMPONENT:
function SubmenuItem(props) {
  // Constants:
  const { name, link, className } = props;

  return (
    <li className='submenu-item'>
      <Link to={link} target='blank' className={className}>
        {name}
      </Link>
    </li>
  );
}

export default SubmenuItem;
