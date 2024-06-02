import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./movie.css"
const Movie = () => {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState('');
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLists = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('https://movie-backend-if4n.onrender.com/api/lists/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLists(response.data);
    };

    fetchLists();
  }, []);

  const handleSearch = async () => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=5a78e36b`);
    setMovies(response.data.Search);
  };

  const handleAddMovie = async (listId, movie) => {
    const token = localStorage.getItem('token');
    await axios.put(
      '/api/lists',
      {
        listid: listId,
        imdbID: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Optionally update state or refetch lists
  };

  const handleCreateList = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      '/api/lists',
      {
        name: newListName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setLists([...lists, response.data]);
    setNewListName('');
  };

  return (
    <div className="outer">
    <div className='left'>
      <h1>Movie Library Project</h1>
      <div>
        <input
          type="text"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          placeholder="New list name"
        />
        <button onClick={handleCreateList}>Create List</button>
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search movies..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {movies.map((movie) => (
          <div className='block list-item' key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <select className='select' onChange={(e) => handleAddMovie(e.target.value, movie)} defaultValue="">
              <option value="" disabled>
                Add to list
              </option>
              {lists.map((list) => (
                <option key={list._id} value={list._id}>
                  {list.name}
                </option>
              ))}
            </select> <br />
            <img src={movie.Poster} alt={movie.title} />   
            
          </div>
        ))}
      </div>
      </div>
     
      <div  className='right'>
        <h1>My Movie Lists</h1>
          {lists.map((list) => (
            <div key={list._id} onClick={() => navigate(`/lists/${list._id}`)}>
              <h2 className='playlist-name'>{list.name}</h2>
            </div>
          ))}
      </div>
    </div>  );
};

export default Movie;
