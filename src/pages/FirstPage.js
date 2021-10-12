import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

function FirstPage() {
  const history = useHistory();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`https://api.tvmaze.com/search/shows?q=all`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div className="m-auto w-screen h-screen grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {data?.map((movie, index) => (
        <div
          className="flex flex-col items-center justify-center max-w-md bg-gray-100 rounded-md shadow-lg p-3 cursor-pointer"
          onClick={() =>
            history.push({
              pathname: "/summary",
              state: {
                movieData: movie.show,
              },
            })
          }
        >
          <img
            src={movie.show.image.medium}
            alt=""
            loading="lazy"
            className="rounded-md w-64 h-52 mt-3 "
          />
          <h2 className="font-bold mt-4 mb-2">{movie.show.name}</h2>
          <h3 className="font-semibold mb-1">Release date: {movie.show.premiered}</h3>
          <h3 className="font-medium mb-1">Language: {movie.show.language}</h3>
          <h3 className="font-semibold mb-4">Rating: {movie.show.rating.average}</h3>
        </div>
      ))}
    </div>
  );
}

export default FirstPage;
