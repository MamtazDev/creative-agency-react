import React from 'react'
import Marquee from 'react-fast-marquee'
import starIcon from '../../../assets/home1/star.png'

const TalkMarqueSlider = () => {
    return (
        <Marquee direction={'right'}>
            <div class="d-flex align-items-center gap-2">
                <img src={starIcon} alt="star" />
                <p>Let's Talk Now</p>
            </div>
        </Marquee>
    )
}

export default TalkMarqueSlider