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

import ServiceThumb from '../assets/img/direction/01_map.png'

const PageService = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
               bgImg={require('../assets/img/direction/00_main.jpg')}
                title={
                    <span style={{ color: 'black' }}>
                      {/* DIRECTION */}
                    </span>
                  }
            />
            <PageAbout
                title={'DIRECTION'}
                heading="KCERA"
                thumb={ServiceThumb}
                content="<a> <strong>Address </strong> </a>   <br/>
                                <a> Megadong 1011-ho, SKN Technopark, Sagimakgol-ro 124, Jungwon-gu, Seongnam-si, Gyeonggi-do, South Korea </a> <br/>
                                <a> <strong>Email </strong> </a> <br/>
                                <a> kceraexport@gmail.com </a> <br/>
                                <a> <strong>Number </strong></a> <br/>
                                <a> (+82) 070-8731-1115 </a>  <br/>
                                <a> <strong>Fax </strong></a> <br/>
                                <a> (+82) 070-8731-1114</a>"
                                
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