export default function MovieCard(props){

    function isContain(movieObj){
        for(let i=0;i<props.watchList.length;i++){
            if(props.watchList[i].id==movieObj.id)
            return true;
        }
        return false;
    }
    return(
        <div className="h-[40vh] w-[180px]  bg-cover bg-center rounded-xl m-5 hover:scale-110 duration-500 hover:cursor-pointer relative" 
            style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${props.link})`}}>

        {isContain(props.movieObj)?
        <div onClick={()=>props.handleRem(props.movieObj)}
        className="flex absolute top-1 right-1 text-sm p-1 bg-black rounded-lg">
        &#10060;</div>
        :
        <div onClick={()=>props.handleAdd(props.movieObj)} 
        className="flex absolute top-1 right-1 text-sm p-1 bg-black rounded-lg">
        &#128525;</div>
        }

        <div className="flex justify-around absolute text-center bottom-0 bg-slate-900/50 rounded-b-xl w-full text-white text-l font-normal">
            {props.name}
        </div>
        </div>
    )
}

