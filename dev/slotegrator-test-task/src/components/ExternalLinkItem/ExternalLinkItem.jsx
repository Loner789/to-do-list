// IMPORTS:
import React from 'react';
import { ExternalLink } from 'react-external-link';

// EXTERNAL ITEM LINK COMPONENT:
function ExternalLinkItem(props) {
  // Constants:
  const { icon, text = '', link, className } = props;

  return (
    <li className='external-link'>
      <ExternalLink
        rel='noreferrer'
        target='_blank'
        href={link}
        className={className}
        style={{ backgroundImage: `url(${icon})` }}
      >
        {text}
      </ExternalLink>
    </li>
  );
}
export default ExternalLinkItem;
