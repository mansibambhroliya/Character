import React from 'react'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap';
import { Link } from "react-router-dom";
import API from 'fetch-api';
import Navbar from './Navbar';


export default function Blog() {

  let [comment, setcomment] = useState([]);


  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      setcomment(json)
    })



  return (
    <>
      <Navbar />
      <div>
        <div className="row g-0 pb-5 ">
          <div className="col-12 blog ">
            <img src={require('../img/girl.webp')} height='600px'></img>
          </div>
        </div>
        

        <div className="row g-0 d-flex">
        <div className='ps-5'> 
          <h1>Comments</h1>
        </div>
          <div className="col-7 pt-5">
            <div className="container mx-4">
              {
                comment.map((item) => {
                  return (
                    <>

                      {/* <h1>{item.id}heello</h1> */}
                      <div className='d-flex pb-4 shadow ps-4 pt-3'>
                        <div  className=''>
                          <Link to={`/commentpost/${item.id}`}>
                            <img src={require('../img/tan.jpg')} className='short-img'></img>
                          </Link>

                        </div>
                        <div>
                          <span className='ps-3 fw-semibold '>{item.title}</span><br></br>
                          <span className='ps-3 pe-3'>3w</span>
                          <span className='pe-3'>3 likes</span>
                          <span>Reply</span><br></br>
                          
                          <Link to={`/comment/${item.id}`} className='ps-3 text-decoration-none orange fw-semibold'>view more...
                          </Link>         

                        </div>
                      </div>
                
                    </>
                  )
                })
              }
            </div>
          </div>

          <div className="col-5">
            <span className=''>
              <div className="p-5">
                <h1 className=''>About </h1>
                <hr className='w-25 shadow'></hr>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo quod eius repudiandae quos incidunt sequi placeat, illum maiores sint a minima illo aspernatur ipsum, animi distinctio, aliquam voluptatibus! Sunt, vero quibusdam! Consequuntur voluptate repudiandae est corporis, recusandae harum voluptatum animi, alias iure doloremque asperiores quo nihil. Non optio architecto ipsum blanditiis voluptatum error repudiandae asperiores vitae officia voluptas aliquam earum amet saepe magnam, ab, eligendi voluptates, expedita reiciendis ipsam! Aperiam repellendus perferendis et soluta possimus. In, dolor. Et ipsa in perspiciatis excepturi perferendis, explicabo modi id nobis, incidunt libero eos commodi ducimus fugit quisquam facilis vitae eaque sit! Dolores magnam, voluptate voluptatem culpa tenetur eligendi rem nobis ipsam illo temporibus inventore, numquam animi quia eos nam nulla, praesentium quaerat deserunt a ducimus quibusdam officiis voluptatum voluptas earum. Quidem, tempora nihil. Sit obcaecati id ratione accusantium sapiente sunt earum amet officiis doloremque! Non nisi iure cupiditate tenetur. Quisquam, necessitatibus qui repudiandae, est adipisci sint facilis accusantium incidunt vero ut iure cupiditate deserunt rem quae voluptas voluptillo ipsa eaque vel numquam nihil, quidem pariatur, optio cupiditate. Sapiente dolorum ipsam nostrum eveniet tempora perferendis nihil, culpa totam impedit optio deleniti voluptatibus ea facilis quas quidem accusantium ratione ad dolor odit velit beatae error voluptas nemo! Quae adipisci cupiditate sapiente obcaecati dolorum, facere similique consequuntur labore minus illum dolores quis officia quas fugiat. Eligendi corporis iste unde!

              </div>




            </span>
          </div>
        </div>
      </div>
    </>
  )
}
