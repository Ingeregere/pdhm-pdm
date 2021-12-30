import React, {useEffect, useState} from 'react';
import whatsappimage from "../../assets/images/whatsappimage.svg";
import {Link} from "react-router-dom";
import './style.css'

const Footer = () => {
    return (
        <>
            <div className="mt-3">
                <footer className="py-4 bgfooter ">
                    <div className="row mx-4">
                        <div className="sectionFooter offset-1 col-md-2 col-sm-12 mb-2">
                            <h5 className={'text-white'}>Accueil</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 "><Link to={"/Business-plan"} className="nav-link p-0 text-dark all_link">Business plan</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/Règlement"} className="nav-link p-0 text-dark all_link">Règlement</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/Historique"} className="nav-link p-0 text-dark all_link">Historique</Link></li>
                                <li className="nav-item mb-2 "><Link to={"/Procedure"} className="nav-link p-0 text-dark all_link">Manuel de procedure</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-12 offset-1 mb-2 sectionFooter">
                            <h5 className={'text-white'}>PDH/M-PDM</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2 text-white"><Link to={'/Vision'} className="nav-link p-0 text-dark all_link">Vision</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/Mission"} className="nav-link p-0 text-dark all_link">Mission</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/Nos-partenaires"} className="nav-link p-0 text-dark all_link">Nos Partenaire</Link></li>
                                <li className="nav-item mb-2 text-white"><Link to={"/Innovation"} className="nav-link p-0 text-dark all_link">Innovation</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 offset-1 sectionFooter col-sm-12">
                            <form>
                                <div className="d-flex w-100 gap-2 mb-4">
                                    <input id="newsletter1" type="email" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-dark ml-2" type="button">S'abonner</button>
                                </div>
                                <h5 className={'text-white'}>S'abonner pour recevoir dernier annonce</h5>
                            </form>
                        </div>
                    </div>

                    <div className="border-top text-center">
                        <p className={'designed text-dark mt-5'} >
                            &copy; {new Date().getFullYear()} PDHM-PDM All rights reserved.designed by EB-COMPANY
                        </p>

                    </div>

                </footer>
                <div className={'whatsapp_float'}>
                    <a href={'https://wa.me/25772042890'} target={'_blank'}>
                        <img src={whatsappimage}/>
                    </a>
                </div>
            </div>


        </>
    );
};

export default Footer;