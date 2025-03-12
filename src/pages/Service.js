import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageAbout from "../components/About/page";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import Testimonial from "../components/Testimonials/home-two";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/direction/map_2.jpg'
import ServiceThumb2 from '../assets/img/direction/map_3.jpg'

const PageService = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
               bgImg={require('../assets/img/direction/direction_main2_2.jpg')}
                title={
                    <span style={{ color: 'black' }}>
                      {/* DIRECTION */}
                    </span>
                  }
            />
            <PageAbout
                title={'DIRECTION'}
                heading="CK TOOL CK TOOL"
                thumb={ServiceThumb}
                content="<a> <strong>Address: </strong> </a>   
                               <LI> Megadong 1007-ho, SKN Technopark, Sagimakgol-ro 124,<br> Jungwon-gu, Seongnam-si, Gyeonggi-do, South Korea </LI>
                                <a> <strong>Email: </strong> </a>
                                <LI> cktoolcom@gmail.com </LI>
                                <a> <strong>Number: </strong></a>
                                <LI> (+82) 031-605-1115 </LI>
                                <a> <strong>Fax: </strong></a>
                                <LI> (+82) 070-8731-1114</LI>"
                                
            />
            <PageAbout
                title={'DIRECTION'}
                heading="CK TOOL Busan branch"
                thumb={ServiceThumb2}
                content={`<a><strong>Address:</strong></a>
                                <LI>112-ho, 1-dong, Busan Industrial Supplies Distribution Complex, Gweagam-ro 37, Sasang-gu, Busan , South Korea</LI>
                                <a><strong>Email:</strong></a>
                                <LI>cktoolted@gmail.com</LI>
                                <a><strong>Number:</strong></a>
                                <LI>(+82) 051-319-0981</LI>
                                <a><strong>Fax:</strong></a>
                                <LI>(+82) 051-319-0983</LI>`}
/>
            {/* <Services classes="sm-top"/> */}
            {/* <PricingTable/> */}
            {/* <Testimonial/> */}
            {/* <BrandLogo/> */}
            {/* <Funfact classes="sp-top"/> */}
            {/* <CallToAction/> */}
            <br></br> <br></br> <br></br><br></br><br></br>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};


export default PageService;