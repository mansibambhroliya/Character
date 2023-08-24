import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap';
import { BsSearch } from "react-icons/bs";
import Navbar from './Navbar';
import { Link } from "react-router-dom";


export default function Home() {

  let [val, setval] = useState([]);
  let [search, setsearch] = useState("");
  let [category, setcategory] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')

      .then(function (response) {
        // handle success
        // console.log(response);
        setval(response.data.products)
        console.log(response.data.products)
        // setstatus(true)
      })
      .catch(function (error) {
        console.log(error);
      })

  })




  return (
    <>

      <Navbar />


      <div className="background spacer">
        <div className="container-fluid">
          <div className="row gx-0">
            <div className="row justify-content-center ">
              <div className=' col-12  search-div d-flex'>
                <span className='search px-4 py-1'><BsSearch className=''></BsSearch></span>
                <div className='text-box d-flex justify-content-center  ps-3'>  <input type='text' placeholder='Search for Products' className='text-box' onChange={(e) => setsearch(e.target.value)}></input> </div>

              </div>
            </div>

            {
              val.filter((value) => {
                if (search === "") {
                  return value
                }
                else if (value.category.toLowerCase().includes(search.toLowerCase())) {
                  return value
                }
              })

                .map((item) => {
                  return (
                    <>
                      {/* <img src={item.image} alt="" width="100px"></img> */}
                      <div className="col-lg-3 line p-4 pb-5 ">
                        <Link to={`/singleproduct/${item.id}`} className="text-secondary text-decoration-none">

                          <div className="">

                            <img src={item.thumbnail} alt="" width="320px" height='210px' className='image-fluide'></img>

                          </div>
                          <div className="text-center ">
                            <div className="p-1" >{item.title} </div>
                            <div className="p-2" >{item.description} </div>
                            <div className="fs-5 fw-bold">Rs. {item.price} - <span className='p-3'>{item.discountPercentage}%</span></div>

                          </div>
                        </Link>

                      </div>

                    </>
                  )
                })
            }
          </div>
        </div>
      </div>


    </>
  )




  return (
    <>
      <h1>load</h1>
    </>
  );
}




