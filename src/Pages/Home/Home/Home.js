import React from 'react';
import MobileCategory from '../MobileCategory/MobileCategory';
import Slider from '../Slider/Slider';
import AdvertizedProduct from './AdvertizedProduct/AdvertizedProduct';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <MobileCategory></MobileCategory>
            <AdvertizedProduct></AdvertizedProduct>
        </div>
    );
};

export default Home;