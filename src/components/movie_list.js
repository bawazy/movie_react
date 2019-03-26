import React from 'react'


 const movie_list= props => {
   
   return(props.mlist.map((movie,index)=>(
     
    <div key={index} >
      <img src={movie.Poster} alt=''/>
      <h1 > Title:{movie.Title} </h1> 
      <h3 >Year Released:{movie.Year}</h3><br></br>
    </div>
    )) 
  )
 
}
export default movie_list