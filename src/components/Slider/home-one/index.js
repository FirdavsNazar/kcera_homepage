
// the previous one

// import React from 'react';
// import SlickSlider from '../../UI/Slick'
// import SliderData from '../../../data/Slider/home-1'
// import {Link} from "react-router-dom";


// const NextArrow = ({className, onClick}) => {
//     return (
//         <button className={className} onClick={onClick}><i className="fa fa-angle-right"/></button>
//     )
// };

// const PrevArrow = ({className, onClick}) => {
//     return (
//         <button className={className} onClick={onClick}><i className="fa fa-angle-left"/></button>
//     )
// };

// const Slider = () => {
//         const settings = {
//             arrows: true,
//             dots: false,
//             nextArrow: <NextArrow/>,
//             prevArrow: <PrevArrow/>,
//             responsive: [
//                 {
//                     breakpoint: 500,
//                     settings: {
//                         arrows: false,
//                         dots: true
//                     }
//                 }
//             ]
//         };

//         return (
//             <div className={'slider-area'}>
//               <SlickSlider settings={settings}>
//                 {SliderData.map(item => (
//                   <div key={item.id} className="slider-item">
//                     {item.bg.endsWith('.mp4') ? (
//                       // If bg is a video file, render a video tag
                      
//                       <video src={require(`../../../assets/img/${item.bg}`)} autoPlay muted loop style={{ width: '100%', height: '100%' }} />
//                     ) : (
//                       // If bg is not a video, use the existing background image code
                      
//                       <div
//                         className="slider-item"
//                         // style={{
//                         //   backgroundImage: `url(${require('../../../assets/img/' + item.bg)})`,
//                         // }}
//                       ></div>
//                     )}
//                     <div className="container">
//                       <div className="row">
//                         <div className="col-xl-7">
//                           {/* <div className="slider-content">
//                             <h2>{item.title}</h2>
//                             <p>{item.text}</p>
//                             <Link
//                               to={`${process.env.PUBLIC_URL + item.btnLink}`}
//                               className="btn btn-brand"
//                             >
//                               {item.btnText}
//                             </Link>
//                           </div> */}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </SlickSlider>
//             </div>
//           );
          
//     }
// ;

// export default Slider;


// After update/////

import React, { useState, useEffect } from 'react';
import SlickSlider from '../../UI/Slick';
import SliderData from '../../../data/Slider/home-1';
import { Link } from "react-router-dom";

const NextArrow = ({ className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            <i className="fa fa-angle-right" />
        </button>
    );
};

const PrevArrow = ({ className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            <i className="fa fa-angle-left" />
        </button>
    );
};

const Slider = () => {
    const [isMobile, setIsMobile] = useState(false); // To check if the device is mobile
    const [showImage1, setShowImage1] = useState(false); // Control visibility of first image
    const [showImage2, setShowImage2] = useState(false); // Control visibility of second image

    useEffect(() => {
        const checkIfMobile = window.innerWidth <= 500; // Check if the device is mobile
        setIsMobile(checkIfMobile);

        if (checkIfMobile) {
            // Start alternating images on mobile
            setShowImage1(true); // Initially show the first image

            const interval = setInterval(() => {
                setShowImage1(prev => !prev); // Toggle between the two images
                setShowImage2(prev => !prev); // Toggle the second image as well
            }, 7000); // Alternate every 7 seconds

            // Cleanup interval on unmount
            return () => clearInterval(interval);
        }
    }, []);


    const settings = {
        arrows: true,
        dots: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 4000,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="slider-area">
            <SlickSlider settings={settings}>
                {SliderData.map(item => (
                    <div key={item.id} className="slider-item">
                        {/* Video element - Always visible on all devices */}
                        <video
                            src={require(`../../../assets/img/${item.bg}`)}
                            autoPlay
                            muted
                            loop
                            className="slider-video"
                        />

                        {/* Image element 1 - Visible for 2 seconds, and alternates every 2 seconds */}
                        {isMobile && showImage1 && item.bg.endsWith('.mp4') && (
                            <img
                                src={require('../../../assets/img/slider/main_mobile1.png')} // First image
                                alt="Background 1"
                                className="slider-image"
                                style={{ width: '100%', height: '100%' }}
                            />
                        )}

                        {/* Image element 2 - Visible for 2 seconds, and alternates every 2 seconds */}
                        {isMobile && showImage2 && item.bg.endsWith('.mp4') && (
                            <img
                                src={require('../../../assets/img/slider/main_mobile3.png')} // Second image
                                alt="Background 2"
                                className="slider-image"
                                style={{ width: '100%', height: '100%' }}
                            />
                            
                        )}

                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7">
                                    {/* Uncomment if needed
                                    <div className="slider-content">
                                        <h2>{item.title}</h2>
                                        <p>{item.text}</p>
                                        <Link
                                            to={`${process.env.PUBLIC_URL + item.btnLink}`}
                                            className="btn btn-brand"
                                        >
                                            {item.btnText}
                                        </Link>
                                    </div>
                                    */}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </SlickSlider>
        </div>
    );
};

export default Slider;