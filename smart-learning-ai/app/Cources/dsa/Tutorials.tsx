import Link from 'next/link'
import Image from 'next/image'

import appnaCollage from "../../../assets/apacollage.png"
import striver from '../../../assets/striver.png'
import kunal from '../../../assets/kunalKushvah.png'

export default function Tutorials(){
 


    const tutorailsData =[
        { 
            id:1,
            bannerImg:striver,
            title:"TUF A to Z DSA playlist",
            description:"A comprehensive beginner to advanced playlist ",
            link:"https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"
        },
        {
            id:2,
            bannerImg:kunal,
            title:"Java + DSA + Interview Preparation Course",
            description:"Data structures with java ",
            link:"https://www.youtube.com/watch?v=rZ41y93P2Qo&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&index=1"
        },
        {   
            id:3,
            bannerImg:appnaCollage,
            title:"Complete C++ DSA Course | Data Structure",
            description:"",
            link:"https://www.youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt"
        }
    ]
    return(
        <main>
            <section>
               <h1 className='text-center text-4xl '>Tutorials and Playlists</h1>
            <div className='flex gap-5 mt-10 '>
               {tutorailsData.map((item)=>(
                    <div key={item.id} className='flex flex-col gap-1 hover-scale-105  bg- cursor-pointer bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-yellow-500 transition'>
                    <Image src={item.bannerImg} alt={item.title} className='w-70 h-40 rounded'/> 
                    <h2>{item.title}</h2>
                    <p className='text-gray-500 '>{item.description}</p>
                    <a href={item.link}>Open Resource</a>
          </div>
            
               ))
               } </div>

            </section>
        </main>
    )
}

















