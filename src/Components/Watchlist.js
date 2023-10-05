import { useEffect, useState } from "react";
import genreids from "./genreId";

export default function Watchlist(props){
    let {watchList,handleRem} = props;
    let [genreList,setGenreList]= useState(["All Genre"]);
    let [currGenre,setCurrGenre]= useState("All Genre");
    let [search,setSearch]= useState("");

    let handleFilter=(genre)=>{
        setCurrGenre(genre);
    }

    let handleSearch=(e)=>{
        setSearch(e.target.value);
    }

    useEffect(()=>{
        let temp = watchList.map((movieObj)=>{
            return genreids[movieObj.genre_ids[0]]
        })
        temp = new Set(temp);
        setGenreList(["All Genre",...temp]);
    },[watchList])

    return(
        <>
        <div className="flex place-content-center">
            {genreList.map((genre)=>{
                return <div onClick={()=>handleFilter(genre)}
                className={currGenre==genre?"hover:cursor-pointer bg-sky-500 m-2 p-2 rounded-lg font-medium text-zinc-50"
            :"hover:cursor-pointer bg-gray-300 m-2 p-2 rounded-lg font-medium text-zinc-50"}>{genre}</div>
            })}
        </div>
        <div className="flex place-content-center">
          <input onChange={handleSearch} value={search} type="text" className="bg-gray-300 border-none outline-none p-2 mb-3 rounded-lg text-center" placeholder="Search Movie Here"/>
        </div>
        <div>
            <table className="w-[95vw] ml-8 mr-8 border-2">
                <thead className="">
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Popularity</th>
                        <th>Genre</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {watchList.filter((obj)=>{
                        if(currGenre=="All Genre"){
                            return true;
                        }else{
                            return genreids[obj.genre_ids[0]]==currGenre;
                        } 
                    }).filter((movieObj)=>{
                        return movieObj.title.toLowerCase().includes(search.toLowerCase());
                    }).map((MovieObj)=>{
                        return(
                        <tr>
                            <td className="flex items-center p-3">
                                <img className="h-[4rem] w-[5rem] mr-3" src={`https://image.tmdb.org/t/p/original/${MovieObj.poster_path}`}/>
                                <div>{MovieObj.title}</div>
                            </td>
                            <td className="p-3 text-center">{MovieObj.vote_average}</td>
                            <td className="p-3 text-center">{MovieObj.popularity}</td>
                            <td className="p-3 text-center">{genreids[MovieObj.genre_ids[0]]}</td>
                            <td onClick={()=>handleRem(MovieObj)} className="text-rose-600 hover:cursor-pointer">Delete</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </>
    )
}