import React from 'react'
import './TalkMarquee.css'
import TalkMarqueSlider from '../talkMarqueSlider/TalkMarqueSlider'

const TalkMarquee = () => {
    return (

        <section>
            <div class="marqueeContainer">
                <div class="marquee d-flex">
                    <TalkMarqueSlider />
                    <TalkMarqueSlider />
                    <TalkMarqueSlider />
                    <TalkMarqueSlider />
                    <TalkMarqueSlider />
                    <TalkMarqueSlider />
                    <TalkMarqueSlider />
                </div>
            </div>
        </section>

    )
}

export default TalkMarquee