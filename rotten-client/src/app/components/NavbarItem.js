import React from 'react'

function NavbarItem({item}) {
    
  return (
    <div className='text-white cursor-pointer hover:text-gray-300 transition'>
        {item}
    </div>
  )
}

export default NavbarItem