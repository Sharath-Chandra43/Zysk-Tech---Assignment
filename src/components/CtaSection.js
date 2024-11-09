import React from 'react'

const CtaSection = () => {
  return (
    <div className='w-full h-auto p-4 gap-8 '>
        <div  className='w-full h-auto gap-8'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-black font-semibold'>Start your free trial</h1>
                <p className='text-gray-400'>Join over 4,000+ startups already growing with Untitled.</p>
            </div>
            <div className='mt-6'>
          <button className='bg-purple-700 text-white w-full h-auto p-4 pl-6 pr-6 rounded-lg border-l-1 border-t-0 border-r-0 border-b-0  gap-4'>Get Started</button>
          <button className='text-black mt-5 bg-white w-full h-auto p-4 pl-6 pr-6 rounded-lg border-l-1 border-t-1 border-r-1 border-b-1  gap-4'>Learn More</button>
        </div>
        </div>
    </div>
  )
}

export default CtaSection