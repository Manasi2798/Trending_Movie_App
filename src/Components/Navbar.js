import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div className="flex text-lg align-middle">
            <img src="https://w7.pngwing.com/pngs/314/157/png-transparent-logo-clapperboard-product-design-marketing-movie-tape-text-service-logo.png"alt="movie-logo" className="w-16 p-3"/>
            <Link to={'/'} className="font-semibold p-3 text-sky-500 hover:cursor-pointer hover:cursor-pointer">Movies</Link>
            <Link  to={'/watchlist'} className="font-semibold p-3 text-sky-500 hover:cursor-pointer hover:cursor-pointer">Watchlist</Link>
        </div>
    )
}