import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';
import HomeReview from '../HomeReview/HomeReview';
import OurAchivement from '../OurAchivement/OurAchivement';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import './Home.css'
const Home = () => {
    return (
        <main>
            <Header></Header>
            <ChooseUs></ChooseUs>
            <Services></Services>
            {/* <OurAchivement></OurAchivement> */}
            <HomeReview></HomeReview>
            <Footer></Footer>
        </main>
    );
};

export default Home;