import React, { useState } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showImage,setShowImage]=useState(true);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
  };

  return (
    <header className="bg-white shadow-md">
         <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">  {/* Combined logo and title */}
        <span className="flex justify-center w-11 h-11 rounded-tl-lg bg-gradient-to-b from-white to-gray-200 border border-gray-300 border-opacity-20">
             <p className="rounded-full w-10 h-10 top-8 left-8 bg-gradient-to-br from-purple-700 to-purple-900"></p>
        </span>
          <h1 className="text-xl font-bold ">Untitled UI</h1> 
       
        <nav className="hidden md:flex space-x-6 md:ml-8">
            <ul className="flex  space-x-4 pt-5">
                <li className="mb-4">
                <span className="block text-lg font-semibold leading-6 text-left hover:text-gray-200">Home</span>
                </li>
                <li className="mb-4">
                <span href="#" className="block text-lg font-semibold leading-6 text-left hover:text-gray-200">Products</span>
                </li>
                <li className="mb-4">
                <span href="#" className="block text-lg font-semibold leading-6 text-left hover:text-gray-200">Resources</span>
                </li>
                <li className="mb-4">
                <span href="#" className="block text-lg font-semibold leading-6 text-left hover:text-gray-200">Pricing</span>
                </li>
                
            </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <img
            src={isMenuOpen ? 'https://res.cloudinary.com/dwhafna5q/image/upload/v1728292325/close-512__1_-removebg-preview_lasgbt.png' : 'https://res.cloudinary.com/dwhafna5q/image/upload/v1727989973/menu-removebg-preview_hbhdrg.png'}
            alt={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="w-8 h-7 mr-3 ml-72"
          />
        </button>

        {/* Mobile menu content (right-sided) */}
        <div className={`fixed right-0 top-0 w-full h-full bg-gray-900 bg-opacity-75 z-50 transition duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
  <div className="flex flex-col justify-end items-end  p-4">
        <button className="text-white hover:text-gray-200" onClick={toggleMenu}>
          Cancel
        </button>
        </div>
<div className='flex justify-start items-start'>
    <nav className="flex flex-col ml-7 space-y-4">
      <a href="#" className="block text-lg font-semibold leading-6 text-slate-50 hover:text-gray-200">Home</a>
      <a href="#" className="block text-lg font-semibold leading-6 text-slate-50 hover:text-gray-200">Products</a>
      <a href="#" className="block text-lg font-semibold leading-6 text-slate-50 hover:text-gray-200">Resources</a>
      <a href="#" className="block text-lg font-semibold leading-6 text-slate-50 hover:text-gray-200">Pricing</a>
    </nav>
  </div>
  </div>

 

        
       
      </div>
     
      {(showImage &&  <div className="hidden md:flex md:justify-end md:mt-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/6c1f/e88a/3b9e8dfddf4a065581b04df49638ca9c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pR4n0jCHJZwn6xQjanoJEOK9~jH-jCjsedUgRWB2WO3Kkb5zftzYQvq15XHRHuKHi6~M6Bdlkq5uz2~2uo2G2l4Z2xdBxMCxYU-i2TjZTKg4newZPLGCQGkmqxHY6wnzE-8dXINYkJ1kA0ojA3tfrSAw-48gA20efqvgj8fdYVH3a7OO3Z8KY6Bpt1hn~aofV0p3RpYI1k9T40WnihkHhRR8JANkQCnyK2zPF2dH8JQNmo1VjiPlbjVVZz9dx~KmLdfwxVdspJbLBSPu9cqFLFZghKbvbE-zenHhnOajbQdoz4QBM4MnDhAPfQ1LkDCGWB-Q1gzmzRcYy0YqiSP1kg"
            alt="avatar"
            className="rounded-full w-14 h-14"
          />
        </div>
      )}
         </div>

         <div className="h-auto p-16 gap-16">
          <div className="w-auto h-auto p-2 pl-4 pr-10 rounded-tl-lg border-l-0 border-t-0 border-r-0 border-b-0 gap-4 flex items-center justify-center">
            <button className="text-xs font-medium text-center text-purple-700 px-6 py-2 bg-slate-100 rounded-md">New feature</button>
            <div className="w-auto h-auto gap-4">
              <button className="text-xs font-medium text-center text-purple-700">Check out the team dashboard</button>
            </div>
        </div>
        <div>
        <h1 className='text-4xl font-semibold leading-tight tracking-tighter text-center'>Beautiful analytics to grow smarter</h1>
        <p className='text-lg font-normal leading-7 text-center text-gray-400'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <div className='mt-6 md:flex md:justify-center md:items-center md:ml-36'>
          <button className='md:w-[150px] md:h-[50px] bg-purple-700 text-white w-full h-auto p-4 pl-6 pr-6 rounded-lg border-l-1 border-t-0 border-r-0 border-b-0  gap-4'>SignUp</button>
            <button className='md:w-[150px] md:h-[50px] text-black mt-5 bg-white w-full h-auto p-4 pl-6 pr-6 rounded-lg border-l-0 border-t-0 border-r-0 border-b-0  gap-4 text-center'> Demo</button>
        
        </div>
        <div className='md:w-[900px] md:h-[500px] w-96 h-56 rounded-lg  border-4 border-gray-800 items-center ml-6 md:mt-10 md:flex md:justify-center md:ml-56 '>
            <img src='https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lCxh4HkZRzbhpDbBiKOIV4mTVjBzbRQEgg268Lidl98wjBj2Wy~HFf38IOf9bSiu024iK11vw3bUThEXuZ1EQr8iz-d-A4lLP-0H5WdFF6f1~FGYO8TdmSq8X8uhKk7MXZmGd9oJtb--Sn5YpNWO6FkIg6sC3THVqXfMJwv9sHOIQZws8bYk~bAfEOG-hPecEulCPusFJ7JQfkyZ8hSv6Oi-G9JQEPBe2TSYX2hyoLVsiIAKdTdg0pm0op5iMX6ml4REkX712ytyjD~BCK6NNofR~KEXKn0GMvp344Se4FUDbdCaGJiKqJXObLSTQrYQiYwf8fY9YuAH0Z6NB4gPUA' alt='alter' className='w-96 h-56 md:w-[890px] md:h-[490px] rounded-lg' />
        </div>
     
     </div>
    </header> 
    
  );
}

export default Header;