import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import ReactImageMagnify from 'react-image-magnify';



// const API = "https://dummyjson.com/products/1"
export default function Singleproduct() {


    const params = useParams();

    let [val, setval] = useState([]);
    let [image, setimage] = useState([]);
    let [img, setimg] = useState("");

    useEffect(() => {

        axios.get(`https://dummyjson.com/products/${params.id}`)
            .then(function (response) {
                // handle success
                // console.log(response.data);
                setval(response.data);
                console.log(response.data.images);
                setimg(response.data.thumbnail)
                setimage(response.data.images);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [params.id])

const imgclick = (i) =>{
    setimg(image[i]);
}


    return (

        <>
            <div className="container">
                <div className="row mt-5 ">
                    <div className="col-2">
                        <ul>
                            <li className=''>
                                {/* <img src={val.thumbnail} alt="" /> */}
                                {
                                    image.map((item,i) => {
                                        return (
                                            <>
                                                <img src={item} className="mb-3 single-img" alt="" onMouseOver={() => {imgclick(i)}}/>
                                                

                                            </>
                                        );
                                    })
                                }

                            </li>
                        </ul>
                    </div>
                    <div className="col-5 py-5"  >
                        {/* {
              image.map((item) => {
                return(
                  <>
                    <img src={image[0]} alt="" key={item._id} />
                  </>
                );
              })
            } */}
                        {/* <img src={image[0]} /> */}
                        <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src:img
              },
              largeImage: {
                src: img,
                width: 1200,
                height: 1800
              }
            }} />


                    </div>
                    <div className="col-5">
                        <div className='fs-5 fw-semibold py-3'>Fevicryl Mould It, Clay Set for Modelling and Sculpting, Air Dry Clay for Art and Craft Art Clay</div>
                        <div>
                            <span className='search rounded-1 fs-5 p-1 text-dark me-3'>{val.rating}</span>
                            <span className='text-warning'>
                                <IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar>
                                <IoIosStarOutline></IoIosStarOutline>
                            </span>
                        </div>
                        <div className='my-3'>

                            <span className='txtcolor fw-semibold'>7,1236 Ratings & 918 Reviews</span>
                        </div>
                        <div className='greenfont fw-semibold pt-3'>Special Price</div>
                        <div className='fs-3 fw-semibold pb-3'>Rs.{val.price}</div>
                        <div>
                            <span className='fw-semibold'>discountPercentage : </span>
                            <span className='fw-semibold greenfont'>{val.discountPercentage}%</span>
                        </div>
                        <div className='txtcolor pt-2 fw-semibold'>{val.description}</div>
                        <div className='py-3'>
                            <span className='fw-semibold'>Quantity : </span>
                            <span className='greenfont fw-bold'>{val.stock}</span>
                        </div>

                    </div>
                </div>

                <div className="row p-5">
                    <div className="col-12 fs-3 fw-semibold border-bottom">
                        Review
                    </div>
                    <div className="col-12 pt-3 txtcolor">
                        Our Brand's Products is one of the most versatile and go-to makeup products that can instantly glam up your look, whether you're doing a quick fix or putting on an elaborate party makeup, lipstick is a must-have for your makeup bag. Lipsticks make you slay wherever you go, regardless of how you do your hair, eye makeup, or outfit! It's amazing how a lipstick can transform you from drab to diva when you apply the right shade correctly and the benefits of wearing lipstick you get.

                        When you wear lipstick, you are able to step out of your comfort zone and bring your outfit, and your personality to the forefront. If you're into makeup, lipstick is one thing you can't miss, as it gives your personality a touch of glamour, style, and grace. Despite what you may think of lipstick, there are some surprising advantages and some interesting hacks that come to them, don't you think? You'll always be glad you bought that tiny little bullet! Take a look at some of the bullet as well as liquid lipstick benefits below.
                    </div>
                </div>

            </div>

        </>
    );
}