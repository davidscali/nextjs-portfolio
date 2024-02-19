import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import withFadeIn from '@functional/withFadeIn';
import { useIsMobile } from '@functional/useIsMobile';
import Button from '@ui/Button';
import CalmDown from "public/aboutme/Kepp_Calm.png";
import TheBest from "public/aboutme/thebest.jpg";
import National from"public/aboutme/National.png";

function AboutMe() {

    const isMobile = useIsMobile();

    return (
        <div id="Here's a little more about me" className="About me max-w-5xl py-20 border-b select-none border-slate-700 
            mx-6
            md:mx-20
            lg:mx-40
        ">
            <h1 className="text-3xl text-left text-white font-bold">More about me</h1>
            <br />
            <div className="text-mm font-bold text-left">
             <ul className="ml-6">
                <li style={{ position: "relative" }}>   
                <div className="text-base mt-4">
                <span style={{ position: "absolute", left: "-30px", top: "5px" }}>▶</span>
                I'm passionate about transforming data into meaningful insights, but when I'm not immersed in numbers, you'll often find me hitting the pavement for a run. Running a few times a week helps me clear my head and recharge.                </div>
                </li>
             </ul>
             </div>
             {!isMobile ? ( //desktop
                        <div className={`img-desktop max-w-2xl mx-auto mt-9`}>
                            <Image
                                src={TheBest.src}
                                alt="TheBest"
                                width={5000}
                                height={0}
                                className='w-[500px] h-auto -center rounded-xl'
                                draggable={false}
                                priority={true}
                            />                     
                            <Image
                                src={CalmDown.src}
                                alt="CalmDown"
                                width={5000}
                                height={0}
                                className='w-[100px] absolute top-[245px] right-[200px]  rounded-xl mt-4 opacity-100 border-2 border-gray-400'
                                draggable={false}
                                priority={true}
                            />                 
                        </div>
                    ) : ( //mobile
                        <div className={`img-mobile max-w-full`}>
                            <Image
                                src={TheBest.src}
                                alt="TheBest"
                                width={2000}
                                height={0}
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            />
                            <Image
                                src={CalmDown.src}
                                alt="CalmDown"
                                width={2000}
                                height={0}
                                className='w-full h-auto rounded-xl mt-6'
                                draggable={false}
                                priority={true}
                            />
                        </div>
                    )}

            <div className="text-mm text-left">
            <ul className="ml-6">
                <li style={{ position: "relative" }}>   
                    <div className="text-base mt-4">
                    <span style={{ position: "absolute", left: "-30px", top: "5px" }}>▶</span>
                    I have an immense passion for the fascinating intricacies of the animal kingdom. Delving into the behaviors of animals - captivate me.
                    </div>
                </li>     
             </ul>
            <ul style={{ listStyleType: 'circle' }} className="ml-6"> 
             <li>
                My dream is to utilize cutting-edge data analytics techniques to contribute meaningfully to the sustainable coexistence of marine life in today's world.
            </li> 
            </ul>    
             {!isMobile ? ( //desktop
                        <div className={`img-desktop max-w-2xl mx-auto mt-9`}>
                            <Image
                                src={National.src}
                                alt="National"
                                width={5000}
                                height={0}
                                className='w-[180px] absolute top-[680px] right-[180px]  rounded-xl mt-4 opacity-100 border-2 border-gray-400'
                                draggable={false}
                                priority={true}
                            />                     
                        </div>
                    ) : ( //mobile
                        <div className={`img-mobile max-w-full`}>
                            <Image
                                src={National.src}
                                alt="National"
                                width={2000}
                                height={0}
                                className='w-full h-auto rounded-xl'
                                draggable={false}
                                priority={true}
                            />
                        </div>
                    )}


            </div>

    </div> 
        
    );
}

export default withFadeIn(AboutMe);