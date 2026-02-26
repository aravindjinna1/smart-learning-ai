import DocxCards from './DocxCards'

const data = [
    {
        id:1,
        title:"Python Notes from Begining",
        description:"Begineer to Advanced Learning Docs which covers 70% syllabue",
        resourceLink:"https://automatetheboringstuff.com/"
    },
    {
        id:2,
        title:"Python + DSA notes",
        description:"DSA using python with most important topics covered",
        resourceLink:"https://docs.google.com/document/d/1SCX-OL_nECEuv7fEnbAfxJWTnEX-36hgykKFiZx05aA/edit?tab=t.0"
    },
      {
        id:3,
        title:"Python + DSA notes",
        description:"DSA using python with most important topics covered",
        resourceLink:"https://docs.google.com/document/d/13E51mYCcebv7mHu7Iaueycw888oMbkCp/edit"
    }
]


export default function ResourceContent(){
  
    return(
      <>
              <h1 className="text-white text-4xl font-bold  text-center mt-10">Notes and Documents</h1>

       <div className='mt-10 flex flex-col md:flex-row gap-5 md:gap-0'>
{/* grid-cols-1 md:grid-cols-2 */}
        {data.map((item)=>(
            <div key={item.id} className=' border border-gray-800  hover:border-indigo-500 transition transition-transform delay-100 ease-in-out hover:scale-102 text-white bg-[#111827] rounded-2xl py-10 px-10 max-w-100 mx-5'>
            <DocxCards key={item.id}
            {...item}/>
            </div>
        ))}

       </div>
      </>
    )
}