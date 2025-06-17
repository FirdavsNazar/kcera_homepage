import React from 'react';
import From from "./From";
import ContactInfo from "./ContactInfo";

const ContactPage = () => {
    return (
        <div className={'contact-page-area-wrapper sp-y'}>
            <div className="container">
                <div className="contact-content-wrap">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-form-area contact-method">
                                <h3>Send us a Message</h3>
                                <From/>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="contact-information contact-method">
                                <div className="contact-info-con">
                                    <h3>Contact Info</h3>
                                    <ContactInfo
                                        address="Megadong 1011-ho, SKN Technopark, Sagimakgol-ro 124, Jungwon-gu, Seongnam-si, Gyeonggi-do, South Korea <hr> kceraexport@gmail.com <br/>(+82) 31-605-1115 <br> kcera.kr <br/>"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;