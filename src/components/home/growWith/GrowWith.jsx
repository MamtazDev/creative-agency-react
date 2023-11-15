import React from 'react'
import growWithImg from '../../../assets/home1/growWith.png'
import rightArrow from '../../../assets/home1/rightArrow.png'

const GrowWith = () => {
    return (
        // < !--Grow with Start-- >
        <section class="growWith all_mb">
            <div class="container">
                <div class="row align-items-center gy-5">
                    <div class="col-md-6 pe-md-5">
                        <div class="grothImg text-center">
                            <img class="img-fluid" src={growWithImg} alt="bg" />
                        </div>
                    </div>
                    <div class="col-md-6 ps-md-5">
                        <div class="text-center text-md-start">
                            <p class="sectionHeader mb-1">
                                <span class="txt_curve">Grow with</span> The Digital
                                Creative Agency <span class="headerHilight">You Can</span> Trust?
                            </p>
                            <p class="commonPara mb-4">
                                Our digital marketing experts have put together thousandsof
                                successfuldigital marketing campaigns for businesses looking to
                                increase leads, phone calls,transactions, and qualified
                                website traffic.
                            </p>
                            <a href="#" class="stayBtn">
                                Learn More
                                <img src={rightArrow} alt="Go" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // {/* <!--Grow with End-- > */ }
    )
}

export default GrowWith