
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


import React from 'react';
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
    const settings = {
        arrows: true,
        dots: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 500,
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
                        {/* Video element */}
                        {item.bg.endsWith('.mp4') && (
                            <video
                                src={require(`../../../assets/img/${item.bg}`)}
                                autoPlay
                                muted
                                loop
                                className="slider-video"
                            />
                        )}

                        {/* Image element */}
                        <img
                            src={require(`../../../assets/img/slider/main_mobile.png`)}
                            alt="Background"
                            className="slider-image"
                            style={{ width: '100%', height: '100%' }}
                        />

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
