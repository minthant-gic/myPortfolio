'use client'
import React from 'react';
import email from '../../public/email.svg'
import Image from "next/image";
import linkedin from "../../public/linkedin.png";
import facebook from "../../public/facebook.png";
import github from "../../public/github.png";

const Contact = () => {
    const openGmail = () => {
        const emailAddress = 'minthantmg169@mail.com';
        const mailtoLink = `mailto:${emailAddress}`;

        window.open(mailtoLink);
    };
    return (
        <div>
            <div className="text-center flex justify-center items-center font-mono text-2xl mt-16">
                Tell me about your next project
            </div>
            <div className="mt-10 mb-14" onClick={openGmail}>
                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center px-2 py-4 mt-4 border">
                        <div className="mr-6">Get in touch</div>
                        <div>
                            <Image src={email} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t flex justify-between items-center">
                <div className="text-xs py-4 px-2">
                    ©2023 All rights reserved.
                </div>
                <div className="flex">
                    <a className="cursor-pointer px-2" href="https://www.linkedin.com/in/min-thant-2620411b3/">
                        <Image src={linkedin} alt='' className="w-6 h-6"/>
                    </a>
                    <div className="ml-2 mr-2 hidden">
                        /
                    </div>
                    <a className="cursor-pointer px-2" href="https://www.facebook.com/min.thant.925/">
                        <Image src={facebook} alt='' className="w-6 h-6"/>
                    </a>
                    <div className="ml-2 mr-2 hidden">
                        /
                    </div>
                    <a className="cursor-pointer px-2" href="https://github.com/Minthantmg">
                        <Image src={github} alt='' className="w-6 h-6"/>
                    </a>

                </div>
            </div>

        </div>
    );
};

export default Contact;