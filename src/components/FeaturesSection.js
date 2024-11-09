import React from 'react'
import { FaChartLine } from 'react-icons/fa'
import { GoZap } from 'react-icons/go'
import { IoChatbubblesOutline } from 'react-icons/io5'

const FeaturesSection = () => {
  return (
    <div className='w-full h-auto p-16 gap-12'>
        <div className="flex flex-col justify-center items-center text-xl">  <h1 className="text-purple-700 font-bold">Features</h1>
            <p className="font-semibold text-3xl text-black">Cutting-edge features for advanced analytics</p>
            <h1 className="text-gray-400 font-mono text-xl">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</h1>
            <div className="w-full h-auto flex items-center justify-center   mt-60 p-24 md:mb-0">
            <div className="w-full h-auto relative  shadow-x-[10.87px] shadow-y-[10.87px] shadow-blur-[21.74px] shadow-color-[rgba(16,24,40,0.08)]">
                <img src="https://s3-alpha-sig.figma.com/img/91ca/8938/7f26a92b60f8e7bf4bfe8c9f528cf3c1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FRdZXCDEigCb~J8-AQil1Stf83Lp2xGQX9V2PJRMbdAg7JuKOzP9LKfVGaY042IFlYY57B6C-OaLN5J2j7nHFNVJe3it6nrHNWG2ZBxqe4jO~sd3Hs~jk8-tLEWfvQ2AuJbfvqv2TaVdR6RabAhoRXdMPqRQtzHXCSLzv~Um79CzX2WjCnAmWQLby1twkiqu1RRiaMcuchGzs0GXJeDXHlTwyqWf8aDiEw9Fisnm6gIJYtnzQ8VoaYPqpied5tSyAUHv0jxTuawEkCw99Z4Rt6PptZvpZB7sEIB2UOYnsT640cPGk5UNZ2vR4p-3IA8u~J6zlX4X9fxWkEK7sJDkMQ" alt="mobile" className="w-[175px] h-auto object-cover  absolute -top-80 " />
                <img src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lCxh4HkZRzbhpDbBiKOIV4mTVjBzbRQEgg268Lidl98wjBj2Wy~HFf38IOf9bSiu024iK11vw3bUThEXuZ1EQr8iz-d-A4lLP-0H5WdFF6f1~FGYO8TdmSq8X8uhKk7MXZmGd9oJtb--Sn5YpNWO6FkIg6sC3THVqXfMJwv9sHOIQZws8bYk~bAfEOG-hPecEulCPusFJ7JQfkyZ8hSv6Oi-G9JQEPBe2TSYX2hyoLVsiIAKdTdg0pm0op5iMX6ml4REkX712ytyjD~BCK6NNofR~KEXKn0GMvp344Se4FUDbdCaGJiKqJXObLSTQrYQiYwf8fY9YuAH0Z6NB4gPUA" alt="laptop" className="w-[700px] h-auto object-cover relative md:-top-80 left-[190px] hidden md:block" />
            </div>
            </div>
        </div>

        <div className='w-full h-auto p-4 md:grid md:grid-cols-3 md:-mt-80'>
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

        </div>
    </div>
  )
}

export default FeaturesSection