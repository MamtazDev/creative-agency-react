import React from 'react'
import './OurApproach.css'
import rightArrowBlack from '../../../assets/home1/rightArrowblack.png'

const OurApproach = () => {
    return (
        //  < !--Our approach Start-- >
        <section class="all_mb ourApproch">
            <div class="container">
                <div class="text-center">
                    <span>Our approach</span>
                    <p>
                        Our tech-enabled marketing services help your
                        business grow online leads, calls, and revenue.
                    </p>
                    <a href="#" class="approchBtn">
                        Let’s Talk
                        <img class="img-fluid" src={rightArrowBlack} alt="Go" />
                    </a>
                </div>
            </div>
        </section>
        // {/* <!--Our approach End-- > */ }
    )
}

export default OurApproach