
interface ResourceCardsPy {

    title:string;
    description:string;
    resourceLink:string;


}

const DocsPy = ({title, description, resourceLink}: ResourceCardsPy)=>{

    return(
        <>
         
         <div className="flex flex-col gap-3"> 
           
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="text-sm text-gray-400">{description}</p>
             <a className="text-blue-500 " href={resourceLink} >
                Open Resource
             </a>
         </div>

        </>
    )
}

export default DocsPy;