import {useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./movie.css"
const MovieList = () => {
  const { id } = useParams();
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get(`https://movie-backend-if4n.onrender.com/api/lists/getmoviebyid/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setList(response.data);
    };

    fetchList();
  }, [id]);

  if (!list) {
    return <div>Loading...</div>;
  }

  return (

    <div>
      <Link to="/movielist" className="links">Back to Home</Link>
      <h1>Playlist Name : {list.name}</h1>
      <div>
        {list.movies.map(movie => (
          <div key={movie.imdbID} className='list-item'>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
