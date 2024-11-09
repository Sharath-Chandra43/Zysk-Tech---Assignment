import React from 'react'
import { FaChartLine, FaRegSmile } from 'react-icons/fa'
import { GoZap } from 'react-icons/go'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { MdKeyboardCommandKey } from 'react-icons/md'
import { TbMessageCircleHeart } from 'react-icons/tb'

const Features = () => {
  return (
    <div className="w-full h-auto p-16 gap-16">
    <div className="bg-white shadow-md rounded-lg p-4 text-center">
      <h1 className="text-purple-700 font-bold mb-4 md:text-2xl">Features</h1>
      <h2 className="font-semibold to-black text-3xl">Analytics that feels like it’s from the future</h2>
      <p className="text-gray-400 text-xl">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      <div className=" flex flex-col items-center justify-center mb-4 rounded-lg p-9">
        <IoChatbubblesOutline size='32' className='mb-3' />
        <h1 className="font-medium text-xl">Share team inboxes</h1>
        <p className="text-gray-400 text-xs">Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
      </div>
      <div className="flex flex-col items-center mb-4 justify-center rounded-lg p-9">
        <GoZap size='32' className='mb-3'/>
        <h1 className="font-medium text-xl">Deliver instant answers</h1>
        <p className="text-gray-400 text-xs">An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
      </div>
      <div className="flex flex-col items-center justify-center mb-4 p-9">
        <FaChartLine size='32' className='mb-3'/>
        <h1 className="font-medium text-xl">Manage your team with reports</h1>
        <p className="text-gray-400 text-xs">Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
      </div>
      <div className="flex flex-col items-center justify-center mb-4 p-9">
        <FaRegSmile size='32' className='mb-3' />
        <h1 className="font-medium text-xl">Connect with customers</h1>
        <p className="text-gray-400 text-xs">Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
      </div>
      <div className="flex flex-col items-center justify-center mb-4 p-9">
        <MdKeyboardCommandKey size='32' className='mb-3'/>
        <h1 className="font-medium text-xl">Connect the tools you already use</h1>
        <p className="text-gray-400 text-xs">Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
      </div>
      <div className="flex flex-col items-center justify-center mb-4 p-9">
        <TbMessageCircleHeart size='32' className='mb-3'/>
        <h1 className="font-medium text-xl">Our people make the difference</h1>
        <p className="text-gray-400 text-xs">We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
      </div>
    </div>
  </div>
  )
}

export default Features