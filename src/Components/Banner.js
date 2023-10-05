import axios from "axios";
import {useEffect, useState} from "react";

export default function Banner(){
    let[movie,setMovie]=useState([]);

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=ce0d6f36665f19658b1a7b769103acc4')
        .then(function(resl){
        setMovie(resl.data.results[0]);
        // console.log(resl.data.results[0]);
    })
    },[])

    return(
        <div className="flex justify-around relative">
            <div className="h-[70vh] w-4/5 bg-centre bg-cover " 
            style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}}>
        </div>
        <div className="flex justify-around absolute bottom-0  bg-slate-900/50 w-full">
            <p className="text-white text-xl font-semibold">{movie.title}</p>
        </div>
        </div> 
    )
}

