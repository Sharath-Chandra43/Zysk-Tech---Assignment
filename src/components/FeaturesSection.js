import React from 'react'
import { FaChartLine } from 'react-icons/fa'
import { GoZap } from 'react-icons/go'
import { IoChatbubblesOutline } from 'react-icons/io5'

const FeaturesSection = () => {
  return (
    <div className='w-full h-auto p-16 gap-12'>
        <div className='flex flex-col justify-center'>
            <h1 className='items-center text-purple-700 font-bold'>Features</h1>
            <p className='font-semibold text-xl '>Cutting-edge features for advanced analytics</p>
        </div>
        <h1 className='text-gray-400 font-mono'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</h1>
        <div className='w-96 h-90 flex justify-center mt-9'>
            <div className='w-[284px] h-[578.87px] top-[1px] left-[45px]'>
                <div className=' shadow-x-[10.87px] shadow-y-[10.87px] shadow-blur-[21.74px] shadow-color-[rgba(16,24,40,0.08)]'>
                    <div className='w-[284px] h-[577.51px]'>
                       
                            <img src='https://s3-alpha-sig.figma.com/img/91ca/8938/7f26a92b60f8e7bf4bfe8c9f528cf3c1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRdZXCDEigCb~J8-AQil1Stf83Lp2xGQX9V2PJRMbdAg7JuKOzP9LKfVGaY042IFlYY57B6C-OaLN5J2j7nHFNVJe3it6nrHNWG2ZBxqe4jO~sd3Hs~jk8-tLEWfvQ2AuJbfvqv2TaVdR6RabAhoRXdMPqRQtzHXCSLzv~Um79CzX2WjCnAmWQLby1twkiqu1RRiaMcuchGzs0GXJeDXHlTwyqWf8aDiEw9Fisnm6gIJYtnzQ8VoaYPqpied5tSyAUHv0jxTuawEkCw99Z4Rt6PptZvpZB7sEIB2UOYnsT640cPGk5UNZ2vR4p-3IA8u~J6zlX4X9fxWkEK7sJDkMQ' alt='mobile' className='w-[254.78px] h-[551.69px] top-[21.74px] ml-14' />
                     
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full h-auto p-4'>
        <div className="flex items-center flex-col mb-4">
            <IoChatbubblesOutline size='32' />
            <h1 className=" font-medium text-2xl">Share team inboxes</h1>
            <p className='text-gray-400 text-3xl'>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
            <button className='text-purple-700 mt-4'>Learn more </button>
        </div>

        <div className="flex items-center flex-col mb-4">
            <GoZap size='32' />
            <h1 className=" font-medium text-2xl">Deliver instant answers</h1>
            <p className='text-gray-400 text-3xl'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
            <button className='text-purple-700 mt-4'>Learn more </button>
        </div>

        <div className="flex items-center flex-col mb-4">
            <FaChartLine size='32' />
            <h1 className=" font-medium text-2xl">Manage your team with reports</h1>
            <p className='text-gray-400 text-3xl'>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
            <button className='text-purple-700 mt-4'>Learn more </button>
        </div>

        </div>
    </div>
  )
}

export default FeaturesSection