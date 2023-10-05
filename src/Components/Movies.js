import MovieCard from "./MovieCard";
import axios from "axios";
import {useEffect, useState} from "react";
import Pagination from './pagination';
// import Watchlist from "./Watchlist";

export default function Movies(props){
    let{watchList,handleAdd,handleRem,pageNo,handleNext,handlePrev}=props
    let[movies,setMovies]=useState([]);
    
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=ce0d6f36665f19658b1a7b769103acc4&page=${pageNo}`)
        .then(function(res){
        // console.log(res.data.results);
        setMovies(res.data.results);
    })
    },[pageNo])
 
    return(
        <div>
            <div className="text-2xl font-bold m-5 text-center">
                Trending Movies
            </div>
            <div className="p-5 flex justify-around flex-wrap">
               {movies.map((movieObj)=>{
                return <MovieCard key={movieObj.id}
                                    movieObj={movieObj}
                                    name={movieObj.title} 
                                    link={movieObj.backdrop_path}
                                    watchList={watchList}
                                    handleAdd={handleAdd}
                                    handleRem={handleRem}/>
               })}
            </div>
            <Pagination  pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
        </div>
    )
}