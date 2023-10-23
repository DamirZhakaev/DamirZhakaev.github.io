import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OtherPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_TMDB_KEY;

    axios
      .get("https://api.themoviedb.org/3/discover/movie", {
        params: {
          api_key: API_KEY,
          language: "en-US",
          sort_by: "popularity.desc",
        },
      })
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const buyTicket = (movie) => {
    toast.success(`Bought a ticket for ${movie.title}!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Cinema Ticket Prices</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Movie</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{/* Здесь должен быть жанр фильма */}</td>
              <td>{movie.release_date}</td>
              <td>{movie.vote_average}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => buyTicket(movie)}
                >
                  Buy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OtherPage;
