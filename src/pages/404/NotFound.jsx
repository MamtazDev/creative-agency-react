import React from 'react'
import Header from '../../components/shared/header/Header'
import Footer from '../../components/shared/footer/Footer'
import notFound404 from '../../assets/home1/404.png';

const NotFound = () => {
    return (
        <>
            <Header />
            <div class="text-center mt_150 mb_150">
                <img class="img-fluid " style={{ height: '525px' }} src={notFound404} alt="notfound" />
            </div>
            <Footer />
        </>
    )
}

export default NotFound