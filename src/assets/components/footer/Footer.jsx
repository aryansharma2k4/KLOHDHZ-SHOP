import React from 'react';

function Footer() {
  return (
    <div className='fixed inset-x-0 bottom-0 text-center py-4 bg-black text-white'>
      <div className='font-mono font-semibold'>
        Copyright © KLOHDHZ SHOP 🤍 2024. All rights reserved.
      </div>
      <a 
        className='font-bold font-mono' 
        target='_blank' 
        rel="noopener noreferrer"
        href="https://github.com/aryansharma2k4"
      >
        GITHUB
      </a>
      <a 
        className='font-bold font-mono px-2' 
        target='_blank' 
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/aryan-sharma-410a5b276/"
      >
        LINKEDIN
      </a>
    </div>
  );
}

export default Footer;
