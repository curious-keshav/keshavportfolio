import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import { motion } from 'framer-motion';
import project1 from "../../public/images/projects/e-buy.png";
import project2 from "../../public/images/projects/sortify.png";
import project3 from "../../public/images/projects/steeleye.png";
import project4 from "../../public/images/projects/talkit.png";
import project5 from "../../public/images/projects/gym.png";
import project6 from "../../public/images/projects/cryptoin.png";
import TransitionEffect from '@/components/TransitionEffect';
// import { ComputersCanvas } from "../components/canvas";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            {/* Background shape */}
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'></div>
            {/* Project link */}
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' >
                <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} priority sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw,33vw' />
            </Link>
            {/* Project details */}
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2' >
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-md'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark  sm:px-4 sm:text-base'>Visit Project</Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4' >
            {/* Background shape */}
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'></div>
            {/* Project link */}
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg' >
                <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
            </Link>
            {/* Project details */}
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2' >
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <div className=' w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank" className=' text-lg font-semibold underline md:text-base'>Visit</Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon /></Link>
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <>
            <Head>
                <title>Keshav Verma | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            {/* Page transition effect */}
            <TransitionEffect />
                    
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                <AnimatedText className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" text="Imagination Trumps Knowledge!" />
                {/* <motion.div className="w-full h-screen mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl">
                    <ComputersCanvas />
                </motion.div> */}
                    <div className='grid grid-cols-12 gap-24 gap-y-32  xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                type={"Featured"}
                                title={"E-BUY"}
                                img={project1}
                                summary={"Modern UI E-Commerce Website With Various Functionalities. Tech Stacks Are React JS, HTML, CSS, Firebase, Redux, Stripe."}
                                github={"https://github.com/curious-keshav/e-Buy"}
                                link={"https://e-buyy.netlify.app/"}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                link="https://github.com/curious-keshav/gym_management_system"
                                github="https://github.com/curious-keshav/gym_management_system"
                                title="GYM Management System "
                                img={project5}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                link="https://www.figma.com/proto/jYdKmPgQrLb6MqXsXpnUbA/Cryptoin-App?type=design&node-id=26-57&t=NodGfeBtqpkdRbjA-0&scaling=scale-down&page-id=0%3A1"
                                github="https://www.figma.com/file/jYdKmPgQrLb6MqXsXpnUbA/Cryptoin-App?type=design&node-id=0%3A1&mode=design&t=NodGfeBtqpkdRbjA-1"
                                title="Cryptoin App UI"
                                img={project6}
                            />
                        </div>
                        <div className='col-span-12 '>
                            <FeaturedProject
                                type={"Featured"}
                                title={"TALK-IT"}
                                img={project4}
                                summary={"Blockchain Chat App (Hackathon Group Project) || Implemented Metamask authentication, allowing secure and seamless login and authentication process for users including features for adding friends and implementing real-time chat functionality ||  Tech Stack: ReactJS , NodeJS , NextJS , Metamask , Solidity , Ethereum "}
                                github={"https://github.com/curious-keshav/TalkIt"}
                                link={"https://e-buyy.netlify.app/"}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                link="https://sortifyvisualizer.netlify.app/"
                                github="https://github.com/curious-keshav/Sortify-the-visualizer"
                                title="Sortify Visualizer"
                                img={project2}
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                link="https://keshav-steeleye.netlify.app/"
                                github="https://github.com/curious-keshav/Keshav_Verma_frontEnd"
                                title="Steel-Eye Assignment"
                                img={project3}
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects
