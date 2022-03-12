import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {
  
  const [pageNumber, setpageNumber] = useState(0);

  useEffect(() => {
      axios.get(`${BASE_URL}/movies?size=12&page=0`)
      .then(reponse => {
          const data = reponse.data as MoviePage;
          console.log(data);
          setpageNumber(data.number);
      });    
  }, []);


  return (
    <>
      <Pagination></Pagination>
      <div className="container">
        <div className="row">
        <div className="col">
            <MovieCard></MovieCard>
          </div> <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard></MovieCard>
          </div> <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard></MovieCard>
          </div> <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard></MovieCard>
          </div> <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard></MovieCard>
          </div>
        </div>
      </div>
    </>
  );
}

export default Listing;
