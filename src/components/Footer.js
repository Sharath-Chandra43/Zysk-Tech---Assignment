import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-white text-gray-300 py-8">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-2   lg:grid-cols-6 gap-8">
            <div>
                <h2 className="text-lg font-bold text-gray-700 mb-4">Product</h2>
                <ul>
                    <li className="text-black font-normal">Overview</li>
                    <li className="text-black font-normal">About us</li>
                    <li className="text-black font-normal">Features</li>
                    <li className="text-black font-normal">Careers</li>
                    <li className="text-black font-normal">Solutions</li>
                    <li className="text-black font-normal">Features</li>
                    <li className="text-black font-normal">Careers</li>
                    <li className="text-black font-normal">Solutions</li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg font-bold text-gray-700 mb-4">Company</h2>
                <ul>
                    <li className="text-black font-norma"l>About US</li>
                    <li className="text-black font-normal">Careers</li>
                    <li className="text-black font-normal">Press</li>
                    <li className="text-black font-normal">News</li>
                    <li className="text-black font-normal">Media kit</li>
                    <li className="text-black font-normal">Contact</li>
                  
                </ul>
            </div>
            <div>
                <h2 className="text-lg font-bold text-gray-700 mb-4">Resources</h2>
                <ul>
                  
                    <li className="text-black font-normal">Blog</li>
                    <li className="text-black font-normal">Newsletter</li>
                    <li className="text-black font-normal">Events</li>
                    <li className="text-black font-normal">Help Center</li>
                    <li className="text-black font-normal">Tutorials</li>
                    <li className="text-black font-normal">Support</li>
                    
                </ul>
            </div>
            <div>
                <h2 className="text-lg font-bold text-gray-700 mb-4">Use Cases</h2>
                <ul>
                    <li className="text-black font-normal">startups</li>
                    <li className="text-black font-normal">Enterprise</li>
                    <li className="text-black font-normal">Goverment</li>
                    <li className="text-black font-normal">SaaS centre</li>
                    <li className="text-black font-normal">Marketplaces</li>
                    <li className="text-black font-normal">Ecommerce</li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg font-bold text-gray-700 mb-4">Social</h2>
                <ul>
                    <li className="text-black font-normal">Twitter</li>
                    <li className="text-black font-normal">LinkedIn</li>
                    <li className="text-black font-normal">Facebook</li>
                    <li className="text-black font-normal">Github</li>
                    <li className="text-black font-normal">AngelList</li>
                    <li className="text-black font-normal">Dribble</li>
                    
                </ul>
            </div>
            <div>
                <h2 className="text-lg font-bold text-gray-700 mb-4">Legal</h2>
                <ul>
                    <li className="text-black font-normal">Terms</li>
                    <li className="text-black font-normal">Privacy</li>
                    <li className="text-black font-normal">Cookies</li>
                    <li className="text-black font-normal">Licenses</li>
                    <li className="text-black font-normal">Settings</li>
                    <li className="text-black font-normal">Contact</li>
                    </ul>
            </div>
            <div className='flex flex-col'>
            <div className="flex items-center">  {/* Combined logo and title */}
                <span className="flex justify-center w-11 h-11 rounded-tl-lg bg-gradient-to-b from-white to-gray-200 border border-gray-300 border-opacity-20">
                    <p className="rounded-full w-10 h-10 top-8 left-8 bg-gradient-to-br from-purple-700 to-purple-900"></p>
                </span>
                <h1 className="text-2xl font-bold text-black pl-4">Untitled UI</h1> {/* Added pl-4 for spacing */}
                </div>
            <div>
                <p className="text-sm text-gray-400">&copy; 2077 Untitled UI. All rights reserved.</p>
            </div>
        </div>
    </div>
    </div>
</footer>
    </div>
  )
}

export default Footer