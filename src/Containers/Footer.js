import React from "react";
import '../Containers/Footer.css'
import linkdinIcon from '../Containers/images/2986060_linkdin_logo_media_social_icon.svg'
import instaIcon from '../Containers/images/5279112_camera_instagram_social media_instagram logo_icon.png'
import twitterIcon from '../Containers/images/104461_twitter_icon.svg'

import youtubeIcon from '../Containers/images/1964418_logo_media_play_social_youtube_icon.png'
import appIcon1 from '../Containers/images/appStore.png'
import appIcon2 from '../Containers/images/GooglePlay.png'

import { Dropdown } from "react-bootstrap";
export default function Footer() {
    return (
        <>
            <div className="footer-head mt-5">
                <div className="footerHead container">
                    <div className="footer-head-title"><h1>Foody</h1></div>
                    <div className="footer-head-dropdowns">
                        <div className="dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    State
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/Kerala">Kerala</Dropdown.Item>
                                    <Dropdown.Item href="#/AndhiraPradesh">Andhira Pradesh</Dropdown.Item>
                                    <Dropdown.Item href="#/Karnataka">Karnataka</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    language
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/Malayalam">Malayalam</Dropdown.Item>
                                    <Dropdown.Item href="#/Telugu">Telugu</Dropdown.Item>
                                    <Dropdown.Item href="#/Kannada">Kannada</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer-body ">
                <div className="footer-links">
                    <h5>About Foody</h5>
                    <ul>
                        <li><a href="/">Who we are</a></li>
                        <li><a href="/">blog</a></li>
                        <li><a href="/">Work with us</a></li>
                        <li><a href="/">Investors Relations</a></li>
                        <li><a href="/">Report Fraud</a></li>
                        <li><a href="/">Contact us</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h5>Foodyverse</h5>
                    <ul>
                        <li><a href="/">Foody</a></li>
                        <li><a href="/">Blinkit</a></li>
                        <li><a href="/">Feeding India</a></li>
                        <li><a href="/">Hyperpure</a></li>
                        <li><a href="/">Foodyland</a></li>
                        
                    </ul>
                </div>
                <div className="footer-links">
                    <h5>For Restaturants</h5>
                    <ul>
                        <li><a href="/">partners with us</a></li>
                        <li><a href="/">Apps for you</a></li>
                        <li><a href="/">Work with us</a></li>
                        <li><a href="/">Foody for enterprises</a></li>
                        
                    </ul>
                </div>
                <div className="footer-links">
                    <h5>Learn more</h5>
                    <ul>
                        <li><a href="/">Privacy</a></li>
                        <li><a href="/">Securitiy</a></li>
                        <li><a href="/">Terms</a></li>
                        <li><a href="/">Sitemap</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h5>Social Links</h5>
                    <div className="media-links">
                        <ul>
                            <li><a href="/"><img src={linkdinIcon} alt=""></img></a></li>
                            <li><a href="/"><img src={twitterIcon} alt=""></img></a></li>
                            <li><a href="/"><img src={instaIcon} alt=""></img></a></li>
                            <li><a href="/"><img src={youtubeIcon} alt=""></img></a></li>

                        </ul>
                    </div>
                    <div className="footer-appicon">
                        <img id="playstoreicon" src={appIcon1} alt=""></img>
                        <img id="googleplayIcon" src={appIcon2} alt=""></img>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <p>
                    By continuing past this page, you agree to our Terms of Service,
                    Cookie Policy, Privacy Policy and Content Policies.
                    All trademarks are properties of their respective owners.
                    2008-2023 © Foody™ Ltd. All rights reserved.
                </p>
            </div>
        </>
    )
}