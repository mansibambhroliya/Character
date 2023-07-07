import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


export default function Singlecomment() {
  const params = useParams();

  let [post, setpost] = useState([]);


  fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
    .then(response => response.json())
    .then(json => {
      setpost(json)
    }, [params.id])

  return (
    <>
      <div className="row g-0 mt-5 d-flex align-items-center" >
        {
          post.map((item) => {
            return (
              <>

        <div className="col-3 ">
          <div className='d-flex justify-content-center'>
            <img src={require('../img/chin.webp')} height='250' className='img-post w-75 rounded-circle ms-4 shadow'></img>
          </div>

        </div>
        <div className="col-9  ">
          <div>
            <p className='p-1'>{item.email}</p>
          </div>
          <div className='p-2 w-75'>
            <p>{item.name}</p>
          </div>
          <div>
            <p className='w-75'>{item.body}</p>
          </div>
          
          
        </div>

        <p className='d-flex justify-content-center'><hr className='mt-4 width' align=''></hr></p>



          </>
              )
            })
          }
      </div>
    </>
  )
}
