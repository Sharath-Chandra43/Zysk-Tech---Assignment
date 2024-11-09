import React from 'react'
import { GoZap } from 'react-icons/go'

const TestimonialSection = () => {
  return (
    <div className='w-full h-auto p-16 gap-16'>
        <div className='w-full h-auto p-4  md:p-14'>
        <div className='flex justify-center items-center '>
        <GoZap size='32' className='text-green-500 mr-2' />
        <h1 className='text-black font-semibold text-2xl md:text-3xl'>Sisyphus</h1>
        </div>
        <div>
         <h1 className='text-black font-semibold text-3xl mt-3 mb-5 md:text-4xl'>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h1>
        </div>

        <div className='flex flex-col justify-center items-center'>
            
            <img src='https://s3-alpha-sig.figma.com/img/fcd7/e604/94e98ef4a34b3228a1783b7f500b0df6?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z5nn27swxAsGqmOi34~sN0fh8AouNKkxSCreVglokY1iR84Sbk4qicM87bTEyeFYLBl2pIODfasT-jRFbeDKfGscx49hBL84rM89DFOsJ9GYstIc3Rf3iAdbNBuGURQn3n1vfrRCQSyAA69pHK7WzdWyBAMTApGeYmj97eKGB05z4N6UMvWqCQsTW4MkP2I1ZQv0e5glrFRRsQlxOkXRdnOoy-SCtfdBqQRZ5f2KFsF8kQPCMOaMb4sxE-3qXU5KWXieCwdXV8VVwqQMjKAZ25qtPADUSu~KQ-cs2q67w5hR60Ppqs064SW0uMqodJKszOmQdzsGDhCJBicHUQOR1w'className='w-10 h-10'  alt='avatar'/>
            <h1 className='font-bold text-black'>Candice Wc</h1>
            <p className='text-gray-400'>Product Manager, Sisyphus</p>
        </div>
        </div>
    </div>
  )
}

export default TestimonialSection