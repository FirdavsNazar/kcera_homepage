// Main part which didn't change anything

import React from 'react';

const PageHeader = ({bgImg,title,content}) => {
    return (
        <div className="page-header-area bg-img" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-8 m-auto text-center">
                        <div className="page-header-content-inner">
                            <div className="page-header-content">
                                <h2>{title}</h2>
                                <p>{content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;


// It's match only for video

// import React from 'react';

// const PageHeader = ({ bgVideo, title, content }) => {
//     return (
//         <div className="page-header-area">
//             <div className="video-background">
//                 <video autoPlay muted loop className="bg-video">
//                     <source src={bgVideo} type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             </div>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-10 col-xl-8 m-auto text-center">
//                         <div className="page-header-content-inner">
//                             <div className="page-header-content">
//                                 <h2>{title}</h2>
//                                 <p>{content}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PageHeader;



// It's for both, video and IMg

// import React from 'react';

// const PageHeader = ({ bgVideo, bgImage, title, content }) => {
//     return (
//         <div className="page-header-area" style={{ position: 'relative', height: '460px' }}>
//             {bgVideo && (
//                 <div className="video-background">
//                     <video autoPlay muted loop className="bg-video">
//                         <source src={bgVideo} type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//             )}
//             {bgImage && !bgVideo && (
//                 <div 
//                     className="image-background" 
//                     style={{
//                         backgroundImage: `url(${bgImage})`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                         height: '100%',
//                         width: '100%',
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                     }}
//                 ></div>
//             )}
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-10 col-xl-8 m-auto text-center">
//                         <div className="page-header-content-inner">
//                             <div className="page-header-content">
//                                 <h2>{title}</h2>
//                                 <p>{content}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PageHeader;




