// import React from 'react';
// import Content from "../../UI/Content";
// import Thumbnail from "../../UI/Thumbnail";

// const About = ({title,heading,content,thumb}) => {
//     return (
//         <div className="page-about-wrapper sm-top">
//             <div className="container">
//                 <div className="row align-items-lg-center">
//                     <div className="col-md-6 col-lg-7 order-1">
//                         <Content classes="about-content ml-0">
//                             <h6>{title}</h6>
//                             <h2 dangerouslySetInnerHTML={{__html: heading}}/>
//                             <p dangerouslySetInnerHTML={{__html: content}}/>
//                         </Content>
//                     </div>

//                     <div className="col-md-6 col-lg-5 order-0 order-md-1">
//                         <Thumbnail classes="about-thumb" imgSrc={thumb}/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;


import React from 'react';
import Content from "../../UI/Content";

const About = ({ title, heading, content, mapLink }) => {
    return (
        <div className="page-about-wrapper sm-top">
            <div className="container">
                <div className="row align-items-lg-center">
                    <div className="col-md-6 col-lg-7 order-1">
                        <Content classes="about-content ml-0">
                            <h6>{title}</h6>
                            <h2 dangerouslySetInnerHTML={{ __html: heading }} />
                            <p dangerouslySetInnerHTML={{ __html: content }} />
                        </Content>
                    </div>

                    <div className="col-md-6 col-lg-5 order-0 order-md-1">
                        <div className="about-thumb">
                            <iframe
                                src={mapLink}
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
