import React from 'react';
// import Button from 'react-bootstrap';
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";



export default function Navbar() {

    let [val, setval] = useState([]);
    let [category, setcategory] = useState([]);

    useEffect(() => {

        axios.get('https://dummyjson.com/products/categories')
            .then(function (response) {
                // handle success
                // console.log(response);
                setval(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])




    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function handle() {
        setShow(false);
    }


    return (
        <>
            <div className=''>
                <div className='pt-4 pt-3 '>
                    <div className="container-fluid">
                        <div className='row g-0'>

                            <div className='col-4 d-flex align-items-center '>
                                <div className=" btn fw-bold outline">
                                    <button onClick={handleShow}>Category</button>

                                    <Offcanvas show={show} onHide={handleClose} className="black">
                                        <Offcanvas.Header closeButton>
                                            <h1 className='text-white'>Categories</h1>
                                        </Offcanvas.Header>
                                        <hr className='text-white border-2'></hr>
                                        <Offcanvas.Body>



                                            {/* {val.data.category[0]} */}
                                            {
                                                val.map((item) => {
                                                    return (
                                                        <>

                                                            <Link to={`/category/${item}`} className="orange-hover text-decoration-none text-white text-capitalize border-botton " ><div onClick={handle}>{item}<hr className='hr'></hr></div></Link>
                                                            {/* <button onClick={(e) => handleclick(e.target.value)} value={item}>{item}</button> */}

                                                        </>
                                                    )
                                                })
                                            }
                                        </Offcanvas.Body>
                                    </Offcanvas>
                                </div>

                            </div>
                            <div className='col-4 ' align="center">
                                <img src={require('../img/logo.jpg')} width="200px"></img>
                            </div>
                            <div className='col-4 d-flex font-icon  d-flex align-items-center  '>
                                <div className='hover'>
                                    <AiOutlineHeart className='icon '></AiOutlineHeart>
                                    <span className=' pe-3 ps-2'>WHISHLIST</span>
                                </div>
                                <div className='hover'>
                                    <HiOutlineShoppingBag className='icon'></HiOutlineShoppingBag>
                                    <span className='ps-2 pe-3'>CART</span>
                                </div>
                                <div className='hover'>
                                    <AiOutlineUser className='icon'></AiOutlineUser>
                                    <span className='ps-2 pe-3'>ACCOUNT<BiChevronDown></BiChevronDown></span>
                                </div>


                                {/* ----------------------------------------- */}


                            </div>
                        </div >
                    </div>
                </div>

            </div>
            <div className='row pt-4 pb-0 g-0'>
                <div className="col-lg-12">
                    <div className='link d-flex justify-content-center fw-bold text-decoration-none orange '>

                        <Link to="/" className='link orange txthover pe-5'>Home</Link>
                        <Link to="about" className='link orange txthover pe-5'>About</Link>
                        <Link to="contact" className='link orange txthover pe-5 '>Contact</Link>
                        <Link to="review" className='link orange txthover '>Blog</Link>
                    </div>
                </div>
            </div><hr></hr>

        </>
    )
}
