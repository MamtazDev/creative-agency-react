import React from 'react'
import './BestService.css'
import profileOne from '../../../assets/home1/profile1.png'
import profileTwo from '../../../assets/home1/profile2.png'
import profileThree from '../../../assets/home1/profile3.png'
import profileFour from '../../../assets/home1/profile4.png'
import videoImg from '../../../assets/home1/videoImg.png'
import playBtn from '../../../assets/home1/playBtnMobile.png'
import { Modal } from 'react-bootstrap'

const BestService = () => {
    return (
        <section class="all_mb">
            <div class="container">
                <div class="row inner_mb gy-3">
                    <div class="col-md-6">
                        <p class="sectionHeader text-center text-md-start">
                            Provide the <span class="txt_curve bestTxt">best service</span> with
                            out of the box <span class="headerHilight">ideas</span>
                        </p>
                    </div>

                    <div class="col-md-6">
                        <p class="commonPara text-center text-md-start">
                            we are a passionate team of digital marketing enthusiasts
                            dedicated to helping businesses succeed in the digital world.
                            With years of experience and a deep understanding of the
                            ever-evolving online landscape, we stay at the fore front of
                            industry trends and technologies.
                        </p>
                    </div>
                </div>

                <div class="row gy-3">
                    <div class="col-lg-4">
                        <div class="bestServiceImg h-100">
                            <div class="card_mb">
                                <p class="sectionHeader initialColor txtOpacity">920 <span
                                    class="headerHilightSec">+</span></p>
                                <p class="commonPara initialColor">Project finish with superbly</p>
                            </div>
                            <div class="d-flex justify-content-start gap-1 align-items-center">
                                <div class="d-flex profileImg align-items-center">
                                    <img class="img-fluid" src={profileOne} alt="img" />
                                    <img class="img-fluid" src={profileTwo} alt="img" />
                                    <img class="img-fluid" src={profileThree} alt="img" />
                                    <img class="img-fluid" src={profileFour} alt="img" />
                                </div>
                                <button class="sectionHeader initialColor txtOpacity ">+</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-8">
                        <div class="videoInner d-inline-block text-center w-100 h-100">
                            <img class="img-fluid h-100 object-fit-cover" src={videoImg} alt="img" />
                            <p class="sectionHeader text-white text-center txtOpacity bg-red txtPosition">How We Work
                            </p>

                            <button type="button" class="playBtn" data-bs-toggle="modal"
                                data-bs-target="#exampleModal1">
                                <img class="d-none d-md-block img-fluid" src={playBtn} alt="img" />
                                <img class="d-block d-md-none img-fluid" src={playBtn}
                                    alt="img" />
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default BestService