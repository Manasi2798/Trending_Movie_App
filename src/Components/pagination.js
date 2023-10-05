export default function Pagination({pageNo,handleNext,handlePrev}){
   
    return(
        <div className="flex justify-center bg-slate-400">
            <div onClick={handlePrev} className="ml-3 mr-3 hover:cursor-pointer"><i class="fa-solid fa-arrow-left"></i></div>
            <div className="ml-3 mr-3">{pageNo}</div>
            <div onClick={handleNext} className="ml-3 mr-3 hover:cursor-pointer"><i class="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}