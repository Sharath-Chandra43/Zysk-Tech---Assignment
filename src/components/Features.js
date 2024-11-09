import React from 'react'
import { FaChartLine, FaRegSmile } from 'react-icons/fa'
import { GoZap } from 'react-icons/go'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { MdKeyboardCommandKey } from 'react-icons/md'
import { TbMessageCircleHeart } from 'react-icons/tb'

const Features = () => {
  return (
    <div className='w-full '>
        <div className="bg-white shadow-md rounded-lg p-4">
            <div>
                <h1 className='text-purple-700 text-center font-bold mb-4'>Features</h1>
                <h2 className='font-semibold to-black text-3xl'>Analytics that feels like it’s from the future</h2>
            </div>
            <p className='text-gray-400 text-3xl'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        </div>
        <div className='w-full h-auto p-4 '>
        <div className="flex items-center flex-col mb-4">
            <IoChatbubblesOutline size='32' />
            <h1 className=" font-medium text-2xl">Share team inboxes</h1>
            <p className='text-gray-400 text-3xl'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
        </div>

        <div className="flex items-center flex-col mb-4">
            <GoZap size='32' />
            <h1 className=" font-medium text-2xl">Deliver instant answers</h1>
            <p className='text-gray-400 text-3xl'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
        </div>

        <div className="flex items-center flex-col mb-4">
            <FaChartLine size='32' />
            <h1 className=" font-medium text-2xl">Manage your team with reports</h1>
            <p className='text-gray-400 text-3xl'>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
        </div>

        <div className="flex items-center flex-col mb-4">
            <FaRegSmile size='32' />
            <h1 className=" font-medium text-2xl">Connect with customers</h1>
            <p className='text-gray-400 text-3xl'>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
        </div>

        <div className="flex items-center flex-col mb-4">
            <MdKeyboardCommandKey size='32' />
            <h1 className=" font-medium text-2xl">Connect the tools you already use</h1>
            <p className='text-gray-400 text-3xl'>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
        </div>

        <div className="flex items-center flex-col mb-4">
        <TbMessageCircleHeart size='32' />
            <h1 className=" font-medium text-2xl">Our people make the difference</h1>
            <p className='text-gray-400 text-3xl'>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
        </div>
        </div>
    </div>
  )
}

export default Features