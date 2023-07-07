import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import API from 'fetch-api';



export default function Commentpost() {

  const [val, setval] = useState([]);
  const params = useParams();

useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(response => response.json())

    .then(json => {
      setval(json)
    })
},[params.id])

 


  return (
    <>
      <div className=''>
        <div className="row g-0">
          <div className="col-12 blog p">
            <img src={require('../img/sky.jpeg')} height='480px'></img>
          </div>
        </div>
        <div className="row g-0">
         
         
              
          <div className="col-4">
            <div className='img-post'>
              <img src={require('../img/girls.jpeg')}  className='img-post position-absolute border border-5 border-white rounded-circle ms-5 '></img>
              <div className='p-1' ></div>
            </div>

          </div>
          <div className="col-8 pad pt-3">
            <div>
              <p className='p-1 fw-semibold'>{val.title}</p>
            </div>
            <div className='p-2'>
              <p>{val.body}</p>
            </div>
          </div>


          
        </div>
      </div>
    </>
  )
}
