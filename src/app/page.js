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
import Project from "@/app/project";

const Home = () => {
    return (
        <>
            <div className="flex justify-center w-full">
                <div className="max-w-6xl w-full">
                    <Navbar />
                    <MainBody />
                    <Card />
                    <Timeline />
                    <Project />
                    <MyCarousel />
                    <Contact />
                </div>
            </div>
        </>
    );
};

export default Home;