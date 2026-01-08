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

import ServiceThumb1 from '../assets/img/direction/01_map.png'
import ServiceThumb2 from '../assets/img/direction/map_3.jpg'

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
                    title="1. DIRECTION"
                    heading="KCERA"
                    content={`<div>
                        <p><strong>Address </strong></p>
                        <p>Megadong 1011-ho, SKN Technopark, Sagimakgol-ro 124, Jungwon-gu, Seongnam-si, Gyeonggi-do, South Korea</p>
                        <p><strong>Email </strong></p>
                        <p>kceraexport@gmail.com</p>
                        <p><strong>Tel </strong></p>
                        <p>(+82)70-8731-1115</p>
                        <p><strong>Fax:</strong></p>
                        <p>(+82)70-8731-1114</p>
                    </div>`}
                    mapLink="https://www.google.com/maps?q=Megadong%201011-ho,%20SKN%20Technopark,%20Sagimakgol-ro%20124,%20Jungwon-gu,%20Seongnam-si,%20Gyeonggi-do,%20South%20Korea&output=embed"
                />
                
                <PageAbout
                    title="2. DIRECTION"
                    heading="KCERA Busan branch"
                    content={`<div>
                        <p><strong>Address </strong></p>
                        <p>112-ho, 1-dong, Busan Industrial Supplies Distribution Complex, Gweagam-ro 37, Sasang-gu, Busan, South Korea</p>
                        <p><strong>Email </strong></p>
                        <p>cktoolted@gmail.com</p>
                        <p><strong>Tel </strong></p>
                        <p>(+82)51-319-0981</p>
                        <p><strong>Fax </strong></p>
                        <p>(+82)51-319-0983</p>
                    </div>`}
                    mapLink="https://www.google.com/maps?q=Busan%20Industrial%20Supplies%20Distribution%20Complex,%20Gweagam-ro%2037,%20Sasang-gu,%20Busan,%20South%20Korea&output=embed"
                />
                
                <PageAbout
                    title="3. DIRECTION"
                    heading="KCERA TURKEY SUBSIDIARY <br/>
                    (TİGER KESİCİ TAKIMLAR SANAYİ VE TİCARET LİMİTED ŞİRKETİ)"
                    content={`<div>
                        <p><strong>Address </strong></p>
                        <p>Evka 3 Mh., 129/18. Sk. 11E D:a, 35050 Bornova/İzmir</p>
                        <p><strong>Number </strong></p>
                        <p>+905336862947</p>
                    </div>`}
                    mapLink="https://www.google.com/maps?q=Evka%203%20Mh.%20129/18%20sk.%20NO:11/A%20Bornova%20Izmir%2035050&output=embed"
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