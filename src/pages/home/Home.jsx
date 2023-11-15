import React from 'react'
import Hero from '../../components/home/hero/Hero'
import Company from '../../components/home/company/Company'
import GetStarted from '../../components/home/getStarted/GetStarted'
import OurApproach from '../../components/home/ourApproch/OurApproach'
import GrowWith from '../../components/home/growWith/GrowWith'
import BestService from '../../components/home/bestService/BestService'
import OurService from '../../components/home/ourService/OurService'
import OurPricing from '../../components/home/ourPricing/OurPricing'
import TalkMarquee from '../../components/shared/talkMarquee/TalkMarquee'

const Home = () => {
    return (
        <>
            <Hero />
            <Company />
            <GetStarted />
            <OurApproach />
            <GrowWith />
            <BestService />
            <OurService />
            <OurPricing />
            <TalkMarquee />
        </>
    )
}

export default Home