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

import ServiceThumb from '../assets/img/direction/map.png'

const PageService = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
               bgImg={require('../assets/img/direction/direction_main2.png')}
                title={
                    <span style={{ color: 'black' }}>
                      {/* DIRECTION */}
                    </span>
                  }
            />
            <PageAbout
                title={'DIRECTION'}
                heading="CK TOOL"
                thumb={ServiceThumb}
                content="<a> <strong>Address: </strong> </a>   
                               <LI> Megadong 1007-ho, SKN Technopark, Sagimakgol-ro 124, Jungwon-gu, Seongnam-si, Gyeonggi-do, South Korea </LI>
                                <a> <strong>Email: </strong> </a>
                                <LI> cktoolcom@gmail.com </LI>
                                <a> <strong>Number: </strong></a>
                                <LI> ((+82) 031-605-1115) </LI>
                                <a> <strong>Fax: </strong></a>
                                <LI> ((+82) 070-8731-1114)</LI>"
            />
            

            {/* <Services classes="sm-top"/> */}
            {/* <PricingTable/> */}
            {/* <Testimonial/> */}
            {/* <BrandLogo/> */}
            <Funfact classes="sp-top"/>
            {/* <CallToAction/> */}
            <br></br> <br></br>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageService;