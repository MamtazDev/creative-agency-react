import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import footerBrandLogo from '../../../assets/home1/headerLogo.png'
import userIcon from '../../../assets/home1/user.png'
import instagramIcon from '../../../assets/home1/instagram.svg'
import facebookIcon from '../../../assets/home1/facebook.svg'
import twitterIcon from '../../../assets/home1/Twitter.svg'


const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="row gy-3">
                    <div class="col-lg-3">
                        <div class="text-center text-lg-start">
                            <Link to="/">
                                <img class="img-fluid" src={footerBrandLogo} alt="Logo" />
                            </Link>
                            <p class="mt-3">
                                We growing up your business with our creativity
                            </p>
                        </div>
                    </div>

                    <div class="col-md-3 col-lg-2 offset-1">
                        <ul class="text-center text-md-start">
                            <li>Links</li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>

                            <li>
                                <Link to="/service">Service</Link>
                            </li>

                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>

                            <li>
                                <Link to="/contact-us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-4 col-lg-2">
                        <ul class="text-center text-md-start">
                            <li>Official info</li>
                            <li>
                                <p>101 Independence Avenue,USA.</p>
                            </li>
                            <li>
                                <p>2-888-452-1505</p>
                            </li>
                            <li>
                                <p>Info.mail@gmail.com</p>
                            </li>
                        </ul>
                    </div>

                    <div class="col-md-5 col-lg-4">
                        <div class="footerEnd text-center text-md-start">
                            <span class="d-block mb-3">Follow us</span>
                            <div class="socialLink d-flex justify-content-center justify-content-md-start align-items-center ">
                                <Link to="www.instagram.com" target='_blank' class="d-block overflow-hidden">
                                    <img src={instagramIcon} alt="instagram" />
                                </Link>

                                <Link to="www.facebook.com" target='_blank' class="d-block overflow-hidden">
                                    <img src={facebookIcon} alt="facebook" />
                                </Link>

                                <a to="www.twitter.com" class="d-block overflow-hidden" target='_blank'>
                                    <img src={twitterIcon} alt="Twitter" />
                                </a>
                            </div>
                            <div
                                class="footerForm d-flex justify-content-center justify-content-md-start gap-2 align-items-center align-items-md-start">
                                <div class="subscribe d-flex align-items-center gap-2 ">
                                    <img src={userIcon} alt="User" />
                                    <input type="email" name="email" placeholder="Enter your email" />
                                    <button class="d-block d-md-none">Subscribe</button>
                                </div>
                                <button class="d-none d-md-block">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <p class="text-center">© 2023 Maxwell Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer