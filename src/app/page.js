import React from 'react';
import Navbar from "@/app/navbar";
import MainBody from "@/app/mainBody";
import MyCarousel from "@/app/MyCarousel";
import nextJs from '../../public/next.svg'
import html from '../../public/html.svg'
import dummy from '../../public/dummy.jpeg'
import Card from "@/app/card";
import Contact from "@/app/contact";
import Timeline from "@/app/timeline";

const Home = () => {
    return (
        <>
            <Navbar />
            <MainBody />
            <Card />
            <Timeline />
            <MyCarousel />
            <Contact />
        </>
    );
};

export default Home;