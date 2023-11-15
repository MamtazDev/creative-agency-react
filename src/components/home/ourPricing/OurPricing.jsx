import React from 'react'
import './OurPricing.css'
import pricingBasic from '../../../assets/home1/priceBasic.png'
import checkIcon from '../../../assets/home1/check.png'
import ckeckHover from '../../../assets/home1/ckeckHover.png'
import pricingPro from '../../../assets/home1/pricePro.png'
import priceEnterprice from '../../../assets/home1/priceEnterprice.png'


const OurPricing = () => {
    return (
        // < !--Our Pricing Start-- >
        <section class="all_mb">
            <div class="container">
                <p class="sectionHeader text-center inner_mb">Our <span class="txt_curve">Pricing</span></p>
                <div class="billed_heading mb-5">
                    <p class="fs_24 headerHilight">Billed Monthly</p>
                    <div class="form-check form-switch">
                        <input class="form-check-input toggle_desing" type="checkbox" id="flexSwitchCheckChecked" />
                    </div>
                    <p class="fs_24 ">Billed Yearly</p>
                </div>
                <div class="row gy-3 justify-content-center">
                    <div class="col-md-6 col-lg-4">
                        <div class="d-flex flex-column pricing_card h-100">
                            <div class="flex-grow-1">
                                <div class="p_card_head d-flex justify-content-start align-items-center mb-2">
                                    <img src={pricingBasic} alt="img" />
                                    <div class="text-start pricing_text">
                                        <p class="cardPara">For individuals</p>
                                        <p>Basic</p>
                                    </div>
                                </div>
                                <p class="price_details cardPara mb-3">
                                    Lorem ipsum dolor sit amet doloroli sitiol conse ctetur elit.
                                </p>
                                <p class="price">$99 <span>/monthly</span></p>
                                <p class="darkFont fw-medium mb-3">What’s included</p>
                                <div class="d-flex flex-column gap-2">
                                    <div
                                        class="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                        <img class="checkOpacity" src={checkIcon} alt="#" />
                                        <img class="checkOpacityHover" src={ckeckHover} alt="#" />
                                        <span> 4 Social Media Account</span>

                                    </div>
                                    <div
                                        class="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                        <img class="checkOpacity" src={checkIcon} alt="#" />
                                        <img class="checkOpacityHover" src={ckeckHover} alt="#" />
                                        <span> Free Platform Access</span>
                                    </div>
                                    <div
                                        class="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                        <img class="checkOpacity" src={checkIcon} alt="#" />
                                        <img class="checkOpacityHover" src={ckeckHover} alt="#" />
                                        <span>Dedicated support</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button class="pricing_btn">Get Started</button>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="d-flex flex-column pricing_card h-100">
                            <div class="flex-grow-1">
                                <div class="p_card_head d-flex justify-content-start align-items-center mb-2">
                                    <img src={pricingPro} alt="img" />
                                    <div class="text-start pricing_text">
                                        <p class="cardPara">For Startups</p>
                                        <p>Pro</p>
                                    </div>
                                </div>
                                <p class="price_details cardPara mb-3">
                                    Lorem ipsum dolor sit amet doloroli sitiol conse ctetur elit.
                                </p>
                                <p class="price">$199 <span>/monthly</span></p>
                                <p class="darkFont fw-medium mb-3">What’s included</p>
                                <div class="d-flex flex-column gap-2">
                                    <div
                                        class="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                        <img class="checkOpacity" src={checkIcon} alt="#" />
                                        <img class="checkOpacityHover" src={ckeckHover} alt="#" />
                                        <span> 4 Social Media Account</span>
                                    </div>
                                    <div
                                        class="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                        <img class="checkOpacity" src={checkIcon} alt="#" />
                                        <img class="checkOpacityHover" src={ckeckHover} alt="#" />
                                        <span>Free Platform Access</span>
                                    </div>
                                    <div
                                        class="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                        <img class="checkOpacity" src={checkIcon} alt="#" />
                                        <img class="checkOpacityHover" src={ckeckHover} alt="#" />
                                        <span>Dedicated support</span>
                                    </div>
                                    <div
                                        class="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                        <img class="checkOpacity" src={checkIcon} alt="#" />
                                        <img class="checkOpacityHover" src={ckeckHover} alt="#" />
                                        <span>Weekly Backup</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button class="pricing_btn">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="d-flex flex-column pricing_card h-100">
                            <div class="flex-grow-1">
                                <div class="p_card_head d-flex justify-content-start align-items-center mb-2">
                                    <img src={priceEnterprice} alt="img" />
                                    <div class="text-start pricing_text">
                                        <p class="cardPara">For big companies</p>
                                        <p>Enterprise</p>
                                    </div>
                                </div>
                                <p class="price_details cardPara mb-3">
                                    Lorem ipsum dolor sit amet doloroli sitiol conse ctetur elit.
                                </p>
                                <p class="price">$399 <span>/monthly</span></p>
                                <p class="darkFont fw-medium mb-3">What’s included</p>
                                <div class="d-flex flex-column gap-2">
                                    <div
                                        class="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                        <img class="checkOpacity" src={checkIcon} alt="#" />
                                        <img class="checkOpacityHover" src={ckeckHover} alt="#" />
                                        <span>4 Social Media Account</span>
                                    </div>
                                    <div
                                        class="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                        <img class="checkOpacity" src={checkIcon} alt="#" />
                                        <img class="checkOpacityHover" src={ckeckHover} alt="#" />
                                        <span>Free Platform Access</span>
                                    </div>
                                    <div
                                        class="darkFont fw-normal d-flex justify-content-start align-items-center gap-3">
                                        <img class="checkOpacity" src={checkIcon} alt="#" />
                                        <img class="checkOpacityHover" src={ckeckHover} alt="#" />
                                        <span>Dedicated support</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button class="pricing_btn">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <!--Our Pricing End-- >
    )
}

export default OurPricing