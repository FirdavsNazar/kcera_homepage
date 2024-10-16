import React from 'react';
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import {Link} from "react-router-dom";
import Logo from '../../assets/img/main2.png'

function Footer() {
    return (
        <footer className="footer-area sp-bottom">
            <div className="container">
                <div className="row mtn-40">
                    <div className="col-lg-4 order-4 order-lg-0">
                        <div className="widget-item">
                            <div className="about-widget">
                                <Link to={`${process.env.PUBLIC_URL + "/"}`}>
                                    <img src={Logo} alt="main2"/>
                                </Link>

                                <Text>
                                &copy; {new Date().getFullYear()} CKTOOLS. All Rights Reserved.
                                </Text>
                                <hr></hr>
                                <Text>
                                   CKTOOL WEB DEVELOPER:   <b> NAZAROV FIRDAVS </b>
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Information">
                            <List classes="widget-list">
                                <LI><Link to={`${process.env.PUBLIC_URL + "/home-one"}`}>Our company</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/about"}`}>About us</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/team"}`}>Our products</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/services"}`}>Direction</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Contact">
                            <List classes="widget-list">
                                <LI> <strong>Email: </strong> </LI>
                                <LI> cktoolcom@gmail.com </LI>
                                <LI> <strong>Number: </strong></LI>
                                <LI> ((+82) 031-605-1115) </LI>
                                <LI> <strong>Fax: </strong></LI>
                                <LI> ((+82) 070-8731-1114)</LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <Widget title="Address">
                            <address>
                                Megadong1011, SKN technopark, Sagimakgol-ro124, Jungwon-gu, Seongnam-si, Gyonggi-do, S.Korea <br/> <br/>
                            </address>
                        </Widget>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;