import React from 'react'

const Header = () => {
  return (
    <div  className='sm:bg-amber-600 bg-amber-700 w-full'>
       
            
       <ul className='flex justify-center items-center text-amber-400 gap-4 font-semibold text-xl'>
       <h1 className='sm: font-bold text-amber-400 md:black-500 mr-20 flex  p-7 text-2xl'> Explore</h1>
 
 
       <li>Home</li>     
        <li>About</li>
        <li> Contact</li>
       </ul>
    </div>
  )
}

export default Header