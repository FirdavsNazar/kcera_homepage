import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/page";
import Services from "../components/Services";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/Logo_CK.png'

const PageTeam = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/about/about_page_header.png')}
                title={
                    <span style={{ color: 'black' }}>
                    PRODUCTS
                    </span>
                  }
            />
            <About
                // title={'Our Team'}
                heading="PROVIDE THE BEST END MILLS <br/> AND DRILLS"
                thumb={ServiceThumb}
                content="<b>CKTOOL</b> always try to provide the best Business Solutions for Clinets to grow up their Business very sharply and smoothly. We voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
            />
            <br></br><br></br>
            <Services/>
            <BrandLogo/> 
            <Funfact classes="sp-top"/>
            {/* <CallToAction/> */}
            <br></br> <br></br> 
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageTeam;