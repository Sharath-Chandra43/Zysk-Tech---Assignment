import React from 'react'
import { TbArrowUpRight } from 'react-icons/tb'

const BlogSection = () => {
  return (
    <div className="w-full">
    <h2 className="text-xl font-sans text-purple-600 mb-4 ml-3 text-left">Our Blog</h2>
    <div className="space-y-4">
        <div className="bg-white rounded-lg shadow-md p-6 text-left">
            <div>
            <h1 className='text-bold text-2xl font-bold font-sans'>Lastest blog posts</h1>
            <h3 className="text-lg text-gray-400 mb-2">Tool and strategies modern teams need to help their companies grow.</h3>
            </div>
        <div className='flex flex-col mt-8'>
            <img src='https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ilSuag86s-4bHROY2s4ehp7e0qsHudYd0U460ewFwBw76NdxJ0VDzjibpT5mQF92Tfr6pcVDmX-dJL6KnTm0TNrOtXeQg1d~mlODANgzJSqgxC9Iu4sFeNm5H1hiLdR4Xx456zOpnUYrsyxPrPWkt48XdjG0r2x6VSLwaD0B82VHXEBbqWcMAE0ePTYI2FrYq1HKMzCyXTMc8M4FpJ8Io2S57FQ46ZFcPIUR8OtTJIGZtAueVWqPHLhPZosaweqvIKlbC26~YNV41NY~uhWF4PyYPRlwdamv~mGhmUXNbkwUcB39KZmmXYl6PKDbKasPnXQ0CSeCrgsBi3K5km610Q' alt='blog' className='w-96 h-80' />
            <div className='w-full h-auto gap-8 mt-8'>
            <p class="text-purple-700">Design</p>
            <div className='flex mt-3'>
             <h1 className='font-bold font-sans text-black'>UX review presentations</h1>
             <TbArrowUpRight size='32' className='ml-3' />
             </div>
             <p className='text-gray-500'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
             <div className='flex mt-3'>
             <img src='https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=By3GomLLaiJN2DNoO8RZDNAMyWP~n-DPrdMOmE2zrEm8HA07yD0Nfn-9mXSUCaxNCQu420DRy3D~QKsq2abRLUqkbaTtoSJkk0oiKFufN7Ef7w~OycCWfOxOxTXD6PUCPgrpSvfgqVr0mOdgxtHIdTM2MZJetoWtOtm0mgCjfIrL6olXlEhWOYHxIEXn0vA6HViYCmiQ4ehc5yXoOJyRBPO7lM6QwCnkrNYuxyZVNAn94TBH9iGztALHuuSGdVKz8gS5z2COPjHAq-pH8GglQkf-2o22s4EDKO8J0Ij2gCA-d~9FduR~aMT35kgboSXo~w7IjWxD47qoT2r08sVkjA' alt='img' className='w-10 h-10'/>
                <div className='flex flex-col ml-3'>
                <p class="text-black font-semibold font-sans">Olivia Rhye</p>
                <p class="text-gray-500">20 Jan 2024</p>
                </div>
            </div>
            </div>

        </div>
        <div className='flex flex-col mt-8'>
            <img src='https://s3-alpha-sig.figma.com/img/a4c5/2ab3/a3c522719b54dd45b1795921034a3f00?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=akTWfdKG0X3yCcleRklzWD0j4tjPlX8LnMZmiwdY2d1ih9H~fMORhFAZecq9Xb4jntKWk36nF~J4IeCYgzTSy4kIiHyonQl45z8XTX7Nrv84gRnv4ES1scfOxTTvH7I0r~-9H48QzyTF3WWbW0335g95faa6ZpjjqFYlATHolIWta3CP1UbQfgOa1IjI-VB~Utxa~ReeIiYtvv729MPbS9m71IPEeLzCqS4wL6L6tVOituYdKgYsIh4Eu6ZiHc1giC2Nx2F7571a2uECD4uhudy0phoCtLiLpqRvjP6854b3Suc-mqW5wEg68US4WECNZCJLyD3gWfGv0F-yipxokQ' alt='blog' className='w-96 h-80' />
            <div className='w-full h-auto gap-8 mt-8'>
            <p className="text-purple-700 font-bold">Product</p>
            <div className='flex mt-3'>
             <h1 className='font-bold font-sans text-black'>Mirating to Linear 101</h1>
             <TbArrowUpRight size='32' className='ml-3' />
             </div>
             <p className='text-gray-500'>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p>
             <div className='flex mt-3'>
             <img src='https://s3-alpha-sig.figma.com/img/a48e/1aea/866434aa73c311701a963ddc75997754?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=giTRibkmJRZjuoe51ZzkkJhYfsGD-He~HLHlXCw5EyeuCzHKC1isi~e1QnRW9UvfIq562pPD6pFFDiHVjdLXulxMmx53pLtqI~nh3ZiPRZH4MEHjgNro0b4VyFitte6sbp2i22OmVl-IibuS9IAqtlg2KkqbxFqD3jrLEHonjqTSWr8me2l1NkrbkJgOXhO3~QifquFJgiXay6A9xTMiOvLPImYIwQWnLqrsz06Z7mgnL~v7388thcx7VypeVOAmHZ-BOU4TEncUBzpSCGn0HcUAHCgvtK0bYNis2IF4BaSiq0-8zBLUnI6a67KkdSbjCY08dLByZW~1BSyxpvnmxQ' alt='img' className='w-10 h-10'/>
                <div className='flex flex-col ml-3'>
                <p className="text-black font-semibold font-sans">Phoenix Baker</p>
                <p className="text-gray-500">19 Jan 2024</p>
                </div>
            </div>
            </div>

        </div>
        <div className='flex flex-col mt-8'>
            <img src='https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ilSuag86s-4bHROY2s4ehp7e0qsHudYd0U460ewFwBw76NdxJ0VDzjibpT5mQF92Tfr6pcVDmX-dJL6KnTm0TNrOtXeQg1d~mlODANgzJSqgxC9Iu4sFeNm5H1hiLdR4Xx456zOpnUYrsyxPrPWkt48XdjG0r2x6VSLwaD0B82VHXEBbqWcMAE0ePTYI2FrYq1HKMzCyXTMc8M4FpJ8Io2S57FQ46ZFcPIUR8OtTJIGZtAueVWqPHLhPZosaweqvIKlbC26~YNV41NY~uhWF4PyYPRlwdamv~mGhmUXNbkwUcB39KZmmXYl6PKDbKasPnXQ0CSeCrgsBi3K5km610Q' alt='blog' className='w-96 h-80' />
            <div className='w-full h-auto gap-8 mt-8'>
            <p className="text-purple-700 font-bold">Software Engineering</p>
            <div className='flex mt-3'>
             <h1 className='font-bold font-sans text-black'>UX review presentations</h1>
             <TbArrowUpRight size='32' className='ml-3' />
             </div>
             <p className='text-gray-500'>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>
             <div className='flex mt-3'>
             <img src='https://s3-alpha-sig.figma.com/img/7ab6/3dcb/71188af6aa830e9296f62671157262d1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gmDHyTADmFh2qcBkpgaK8~zuePjTFOvV0B0yYBx8e1UHG9a0JJsLGH28m79eX9~lDnbrtGI5gWlGkVXwRhxukzgMoIT1sZTI2aEqRlqqKgBorZ6s3kVOq9uJd6dCohMb7K9FTd8~UU2IHicxuV2Er5A~VpC4YT1YA1UlTfMWjnM-SGXLWwZLUm8-EbiWqSu-XIEqPQzIeBd4d2Xx~2SufLTkz049wh-EoUU8QE1wbFdFMMTqkih62N4PJk8dM23owQ2NVgKkRd6~d4TuCpGkFw31duhLbKwQ-6lxRO5ApvgZ09J8H6wqzbFoVSKXfOmM5I9T4q9Ralj0V4fCWSIqrQ' alt='img' className='w-10 h-10'/>
                <div className='flex flex-col ml-3'>
                <p className="text-black font-semibold font-sans">Lana Steiner</p>
                <p className="text-gray-500">18 Jan 2024</p>
                </div>
            </div>
            </div>

        </div>
            
            
        
        <div className="text-center mt-4">
            <button  className="text-blue-500 hover:underline py-2 px-6 font-bold">View all posts</button>
        </div>
    </div>
</div>
</div>
  )
}

export default BlogSection