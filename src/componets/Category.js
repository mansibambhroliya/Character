import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

export default function Category() {

  const params = useParams();

  let [val, setval] = useState([]);

  useEffect(() => {

    axios.get(`https://dummyjson.com/products/category/${params.id}`)
      .then(function (response) {
        // handle success
        console.log(response.data.products);
        setval(response.data.products)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [params.id])
  return (
    <>
      <Navbar />
      <div className="row gx-0 ps-5 pt-5">
        <div>

          {/* {params.id} */}
          {/* {val.title} */}
        </div>
        {
          val.map((item) => {
            return (
              <>

                <div className="col-3 mb-5">
                  <Link to={`/singleproduct/${item.id}`} className="text-secondary text-decoration-none">
                    <div className=' thumbnail' >
                      <div className='d-flex justify-content-center '>
                        <img src={item.thumbnail} className=" mb-3" /></div>
                      <div className='text-center'>
                        <div className=' p-1' >{item.title}</div>
                        <div className=' p-2 '>{item.description} </div>
                        <div className="fs-5 fw-bold">Rs. {item.price} - <span className='p-3'>{item.discountPercentage}%</span></div>
                      </div>
                    </div>
                  </Link>
                </div>

              </>
            )
          })
        }

      </div>

    </>
  )
}
