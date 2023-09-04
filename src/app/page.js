import React from 'react';
import Navbar from "@/app/navbar";
import MainBody from "@/app/mainBody";
import MyCarousel from "@/app/MyCarousel";
import nextJs from '../../public/next.svg'
import html from '../../public/html.svg'
import dummy from '../../public/dummy.jpeg'
import Card from "@/app/card";
import Contact from "@/app/contact";

const Home = () => {
    return (
        <>
            <Navbar />
            <MainBody />
            <MyCarousel />
            <Card />
            <Contact />
        </>
    );
};

export default Home;