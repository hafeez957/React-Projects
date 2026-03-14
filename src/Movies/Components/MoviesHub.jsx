import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MoviesHub = () => {

    let[movies,setMovies]=useState([])
    let[movie,setMovie]=useState('')
    // useEffect(()=>{
    //     console.log('hi');
    // },[])

    let fetchApi=async ()=>{
        let apidata=await axios.get(`https://www.omdbapi.com/?s=${movie}&apikey=224ff4ce`)
        setMovies(apidata.data.Search || []);
        console.log(movies.Search);
    }

    let handleSubmit=async (e)=>{
        e.preventDefault()
        fetchApi()
    }
    let handleInput=(e)=>{
        setMovie(e.target.value);
        
    }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 absolute top-10 left-90 ">
  
  {/* Search */}
  <form 
    onSubmit={handleSubmit} 
    className="w-full max-w-md flex mb-8"
  >
    <input
      onChange={handleInput}
      type="text"
      placeholder="Search movie..."
      className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
    />
    <button
      type="submit"
      className="px-4 py-2 bg-gray-800 text-white rounded-r-md"
    >
      Search
    </button>
  </form>

  {/* Movies */}
  <div className="w-full max-w-5xl grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {movies.map((movie, index) => {
      const { Title, Year, Poster } = movie;

      return (
        <div key={index} className="bg-white rounded-md overflow-hidden">
          <img
            src={Poster}
            alt={Title}
            className="w-full h-64 object-cover"
          />
          <div className="p-3">
            <h2 className="text-sm font-medium">{Title}</h2>
            <p className="text-xs text-gray-500">{Year}</p>
          </div>
        </div>
      );
    })}
  </div>

</div>
  )
}

export default MoviesHub





// complete minimal simple
//  <div>
      
//       <form action="" onSubmit={handleSubmit}>
//         <input onChange={handleInput} type="text" placeholder='enter movie' />
//         <button>Search</button>

//       </form>

//       <div className='flex flex-wrap flex-row gap-2'>
//         {movies.map((movie)=>{
//             let{Title,Year,Type,Poster}=movie
//             return(
//                 <div className='bg-red-200 w-70'>
//                     <img src={Poster} alt="" />
//                     <h1>{movie.Title}</h1>
                
//                 </div>
//             )
//         })}
        
//       </div>
//     </div>