import React from 'react';
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import {Link} from "react-router-dom";
import Logo from '../../assets/img/bottom_logo.png';
import PageBlog from '../../pages/BlogGridLeftSidebar';
import BlogDetailsPage from '../../templates/BlogDetails';

function Footer() {
    return (
        <footer className="footer-area sp-bottom">
            <div className="container">
                <div className="row mtn-40">
                    <div className="col-lg-4 order-4 order-lg-0">
                        <div className="widget-item">
                            <div className="about-widget">
                                <Link to={`${process.env.PUBLIC_URL + "/"}`}>
                                    <img src={Logo} alt="bottom"/>
                                </Link>

                                <Text>
                                &copy; 2013 CK TOOL all rights reserved. 
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Information">
                            <List classes="widget-list">
                                <LI><Link to={`${process.env.PUBLIC_URL + "/home-one"}`}>HOME</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/about"}`}>ABOUT</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/services"}`}>DIRECTION</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/team"}`}>PRODUCT</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "blog-grid-left-sidebar"}`}>TECH NEWS</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/contact"}`}>CONTACT</Link></LI>
                                <LI><a href="https://drive.google.com/file/d/1wS3HxZgPc20GI8zT32Nt9Li0zWpW_0yw/view?usp=drive_link" target="blank" className="tel-no">CATALOGUE</a></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Contact">
                            <List classes="widget-list">
                                <LI> <strong>Email: </strong> </LI>
                                <LI> kceraexport@gmail.com </LI>
                                <LI> <strong>Number: </strong></LI>
                                <LI> (+82) 031-605-1115 </LI>
                                <LI> <strong>Fax: </strong></LI>
                                <LI> (+82) 070-8731-1114</LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <Widget title="Address">
                            <address>
                            Megadong 1011-ho, SKN Technopark, Sagimakgol-ro 124, Jungwon-gu, Seongnam-si, Gyeonggi-do, South Korea <br/> <br/>
                            </address>
                        </Widget>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;