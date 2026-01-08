import React,{Fragment} from 'react';
import Header from "../components/Header";
import BlogPage from "../templates/Blog";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";
import CallToAction from "../components/CallToAction";
import Funfact from '../components/Funfact';

const PageBlog = () => {
    return (
        <Fragment>
            <Header/>
            <BlogPage blog_type={'grid'} sidebar={true} sidebar_position={'left'}/>
            {/* <CallToAction/> */}
            {/* <Funfact/>
            <br></br> <br></br> */}
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageBlog;