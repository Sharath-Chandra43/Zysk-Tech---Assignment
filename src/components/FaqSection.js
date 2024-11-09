import React from 'react'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'

const FaqSection = () => {
  return (
    <div className='mb-20'>
    <div className="w-full">
  <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
  <div className="space-y-4">
    <div className="border-b border-gray-200 flex flex-col justify-start">
      <button className="w-full flex justify-between items-center p-4 text-left">
        <span className='font-semibold font-sans'>Is there a free trial available?</span>
        <CiCircleMinus size='24'/>
      </button>
      <div className="p-4">
        <p className='text-left'>Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
      </div>
    </div>
    <div className="border-b border-gray-200">
      <button className="w-full flex justify-between items-center p-4 text-left">
        <span className='font-semibold font-sans'>Can I change my plan later?</span>
         <CiCirclePlus size='24' />
      </button>
      <div className="p-4">
        <p>...</p>
      </div>
    </div>
    <div className="border-b border-gray-200">
      <button className="w-full flex justify-between items-center p-4 text-left">
        <span className='font-semibold font-sans'>What is your cancellation policy?</span>
         <CiCirclePlus size='24' />
      </button>
      <div className="p-4">
        <p>...</p>
      </div>
    </div>
    <div className="border-b border-gray-200">
      <button className="w-full flex justify-between items-center p-4 text-left">
        <span className='font-semibold font-sans'>Can other info be added to an invoice?</span>
         <CiCirclePlus size='24' />
      </button>
      <div className="p-4">
        <p>...</p>
      </div>
    </div>
    <div className="border-b border-gray-200">
      <button className="w-full flex justify-between items-center p-4 text-left">
        <span className='font-semibold font-sans'>How does billing work?</span>
         <CiCirclePlus size='24' />
      </button>
      <div className="p-4">
        <p>...</p>
      </div>
    </div>
    <div className="border-b border-gray-200">
      <button class="w-full flex justify-between items-center p-4 text-left">
        <span className='font-semibold font-sans'>How do I change my account email?</span>
         <CiCirclePlus size='24' />
      </button>
      <div class="p-4">
        <p>...</p>
      </div>
    </div>

  </div>
  <div className='w-full h-auto flex flex-col justify-center p-4 gap-8 mt-20'>
        <div className='w-32 h-14 flex  ml-44'>
            <img src='https://s3-alpha-sig.figma.com/img/a48e/1aea/866434aa73c311701a963ddc75997754?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=giTRibkmJRZjuoe51ZzkkJhYfsGD-He~HLHlXCw5EyeuCzHKC1isi~e1QnRW9UvfIq562pPD6pFFDiHVjdLXulxMmx53pLtqI~nh3ZiPRZH4MEHjgNro0b4VyFitte6sbp2i22OmVl-IibuS9IAqtlg2KkqbxFqD3jrLEHonjqTSWr8me2l1NkrbkJgOXhO3~QifquFJgiXay6A9xTMiOvLPImYIwQWnLqrsz06Z7mgnL~v7388thcx7VypeVOAmHZ-BOU4TEncUBzpSCGn0HcUAHCgvtK0bYNis2IF4BaSiq0-8zBLUnI6a67KkdSbjCY08dLByZW~1BSyxpvnmxQ' alt='img' className='w-10 h-10'/>
            <img src='https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=By3GomLLaiJN2DNoO8RZDNAMyWP~n-DPrdMOmE2zrEm8HA07yD0Nfn-9mXSUCaxNCQu420DRy3D~QKsq2abRLUqkbaTtoSJkk0oiKFufN7Ef7w~OycCWfOxOxTXD6PUCPgrpSvfgqVr0mOdgxtHIdTM2MZJetoWtOtm0mgCjfIrL6olXlEhWOYHxIEXn0vA6HViYCmiQ4ehc5yXoOJyRBPO7lM6QwCnkrNYuxyZVNAn94TBH9iGztALHuuSGdVKz8gS5z2COPjHAq-pH8GglQkf-2o22s4EDKO8J0Ij2gCA-d~9FduR~aMT35kgboSXo~w7IjWxD47qoT2r08sVkjA' alt='img' className='w-10 h-10'/>
            <img src='https://s3-alpha-sig.figma.com/img/7ab6/3dcb/71188af6aa830e9296f62671157262d1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gmDHyTADmFh2qcBkpgaK8~zuePjTFOvV0B0yYBx8e1UHG9a0JJsLGH28m79eX9~lDnbrtGI5gWlGkVXwRhxukzgMoIT1sZTI2aEqRlqqKgBorZ6s3kVOq9uJd6dCohMb7K9FTd8~UU2IHicxuV2Er5A~VpC4YT1YA1UlTfMWjnM-SGXLWwZLUm8-EbiWqSu-XIEqPQzIeBd4d2Xx~2SufLTkz049wh-EoUU8QE1wbFdFMMTqkih62N4PJk8dM23owQ2NVgKkRd6~d4TuCpGkFw31duhLbKwQ-6lxRO5ApvgZ09J8H6wqzbFoVSKXfOmM5I9T4q9Ralj0V4fCWSIqrQ' alt='img' className='w-10 h-10'/>
        </div>
        <div className='w-[303px] h-auto gap-8 ml-20 '>
            <h1 className='font-medium text-black'>Still have questions?</h1>
            <p className='text-gray-400'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        </div>
        <button className='bg-purple-700 text-white w-1/2 ml-28 h-auto p-4 pl-6 pr-6 rounded-lg border-l-1 border-t-0 border-r-0 border-b-0  gap-4'>Get In Touch</button>
  </div>
</div>
    </div>
  )
}

export default FaqSection