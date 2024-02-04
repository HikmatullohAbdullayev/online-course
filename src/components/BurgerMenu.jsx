import React from 'react';

function BurgerMenu(props) {
    return (
        <nav className='  '>
         
          <ul className='flex flex-col  gap-12   '>

              <li className='  hover:text-primary  '> Home  </li>
              <li className=' hover:text-primary  '>  Courses  </li>
              <li className=' hover:text-primary  '> About Us  </li>
              <li className=' hover:text-primary  '>  Pricing  </li>
              <li className='  hover:text-primary  '>  Contact  </li>
                  
            </ul>
          </nav>
    );
}

export default BurgerMenu;