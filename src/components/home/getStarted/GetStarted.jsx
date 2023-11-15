import React from 'react'
import './GetStarted.css'
import rightArrow from '../../../assets/home1/rightArrow.png'
import getStartedOne from '../../../assets/home1/getStarted1.png'
import getStartedTwo from '../../../assets/home1/getStarted2.png'
import getStarted3 from '../../../assets/home1/getStarted3.png'

const GetStarted = () => {
    return (
        // < !--Get started with us Start-- >
        <section class="all_mb">
            <div class="container">

                <div class="inner_mb d-flex justify-content-between align-items-center">
                    <p class="sectionHeader text-center text-md-start"><span class="txt_curve">Get started</span> with
                        us<br class="d-none d-md-block" /> simply and
                        quickly
                    </p>
                    <div class="d-none d-md-block">
                        <a href="#" class="stayBtn">
                            Start with us
                            <img class="img-fluid" src={rightArrow} alt="" />
                        </a>
                    </div>
                </div>

                <div class="row gy-3 justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <div class="getStartedInner d-flex justify-content-start align-items-start gap-2 h-100">
                            <div class="getStatedImg">
                                <img class="img-fluid" src={getStartedOne} alt="User" />
                            </div>
                            <div>
                                <span>Create Account</span>
                                <p class="cardPara">
                                    Users must create an account to
                                    access various services on
                                    Brandmuse
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="getStartedInner d-flex justify-content-start align-items-start gap-2 h-100">
                            <div class="getStatedImg">
                                <img class="img-fluid" src={getStartedTwo} alt="User" />
                            </div>
                            <div>
                                <span>Explore the Website</span>
                                <p class="cardPara">
                                    Learn about the agency's services,
                                    projects, team, and values.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="getStartedInner d-flex justify-content-start align-items-start gap-2 h-100">
                            <div class="getStatedImg">
                                <img class="img-fluid" src={getStarted3} alt="User" />
                            </div>
                            <div>
                                <span>Request a Quote</span>
                                <p class="cardPara">
                                    Looking for a specific service, they
                                    can request a quote fromthe agency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-block d-md-none text-center">
                    <a href="#" class="stayBtn mt-3">
                        Start with us
                        <img class="img-fluid" src={rightArrow} alt="icon" />
                    </a>
                </div>
            </div>
        </section>
        // {/* <!--Get started with us End-- > */ }
    )
}

export default GetStarted