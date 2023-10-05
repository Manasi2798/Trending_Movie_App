import Watchlist from './Components/Watchlist';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Movie from './Components/Movies';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { useEffect,useState } from 'react';


function App() {
  let[watchList,setWatchList]=useState([]);
  let[pageNo,setPage]=useState(1);
    
    let handlePrev = ()=>{
        if(pageNo>1){
            setPage(pageNo-1);
        }
    }

    let handleNext = ()=>{
        setPage(pageNo+1);
    }

    let handleAdd = (movieObj)=>{
        // console.log(id);
        let newWatchlist = [...watchList,movieObj];
        localStorage.setItem("MovieApp",JSON.stringify(newWatchlist));
        setWatchList(newWatchlist);
    }
    
    let handleRem = (movieObj)=>{
        // console.log(id);
        let filterWatchlist = watchList.filter((movie)=>{
            return movie.id!= movieObj.id;
        })
        localStorage.setItem("MovieApp",JSON.stringify(filterWatchlist));
        setWatchList(filterWatchlist);
    }

    useEffect(()=>{
      let fromStorage = localStorage.getItem("MovieApp");
      if(!fromStorage){
        return;
      }
      setWatchList(JSON.parse(fromStorage));
      },[])

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={
          <>
          <Banner/>
          <Movie watchList={watchList}
                  handleAdd={handleAdd}
                  handleRem={handleRem}
                  setWatchList={setWatchList}
                  pageNo={pageNo}
                  handleNext={handleNext}
                  handlePrev={handlePrev}/>
          </>
        }></Route>
        <Route path='/watchlist' element={
          <>
          <Watchlist watchList={watchList}
                      handleRem={handleRem}/>
          </>
        }></Route>
      </Routes>
    </BrowserRouter>
    // <>
    //   <Navbar/>
    //   <Banner/>
    //   <Movie/>
    //   <Watchlist/>
    // </>
  );
}

export default App;
