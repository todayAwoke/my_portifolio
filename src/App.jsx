import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./App.css";
import "./components/Header.css"
import Porfile from "./assets/Photo.jpg";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.jpg";
import Project3 from "./assets/project3.jpg";
import Project4 from "./assets/project4.jpg";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import { useEffect, useState } from "react";

function App() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0a0l7kp', 'template_orivcky', form.current, 'k0FfFK_lalSy7U739')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    const handlemessage = () => {
        alert("Thank you for contacting me. I will get back to you as soon as possible.")
    }
    const [scrolling, setScrolling] = useState(false);

    const onPageScroll = () => {
        if (window.pageYOffset > 200) {
            setScrolling(true)
        } else {
            setScrolling(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", onPageScroll)
        return () => {
            window.removeEventListener("scroll", onPageScroll)
        }
    }, [])

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (

        <div className="max-w-4xl m-auto relative">
            <header className={`fixed left-0 right-0 top-0 z-20 ${scrolling ? 'border-b border-gray-900' : ''} bg-black transition-all duration-300`}>
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-white">
                                <a href="/">My Portfolio</a>
                            </h1>
                        </div>
                        <button
                            className="sm:hidden text-white focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                            <svg className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <nav className={`absolute bg-black top-full left-0 right-0 w-full transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} sm:static sm:block sm:bg-transparent`}>
                            <ul className="flex flex-col sm:flex-row gap-4 p-4 sm:p-0 justify-center">
                                <li>
                                    <a href="/my_portifolio" className="text-white hover:text-gray-300 transition duration-300">Home</a>
                                </li>
                                <li>
                                    <a href="#projects" className="text-white hover:text-gray-300 transition duration-300">Projects</a>
                                </li>
                                <li>
                                    <a href="#technologies" className="text-white hover:text-gray-300 transition duration-300">Technologies</a>
                                </li>
                                <li>
                                    <a href="#aboutme" className="text-white hover:text-gray-300 transition duration-300">About me</a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-white hover:text-gray-300 transition duration-300">Contact me</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="relative mt-28">
                {/* Intro/Banner section */}
                <section>
                    <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
                        <div>
                            <h2 className="font-bold text-4xl">Hello, I'm Awoke,</h2>
                            <div>
                                <h2 className="font-bold text-4xl mt-1 gradient-text">MERN Stack Developer</h2>
                            </div>
                            <div>
                                <p className="mt-4 text-gray-400">
                                    I am a Junior Full Stack Developer using the latest technologies. In addition to this, I have basic knowledge of networking and system design. Currently, I am developing an Eye Bank Management System for Ethiopia with my team.
                                </p>
                                <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                                    <a href="../assets/my_cv.pdf" download>Download Resume</a>
                                </button>
                            </div>
                        </div>
                        <div className="relative flex justify-center items-center after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[220px] before:absolute before:bottom-0 before:-right-10">
                            <div className="relative w-[220px] h-[220px] rounded-full overflow-hidden">
                                <img src={Porfile} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Projects section */}
                <section id="projects">
                    <div className="container m-auto px-4 sm:py-12">
                        <h2 className="text-2xl font-semibold">Projects</h2>
                        <div className="flex flex-col sm:flex-row gap-10 mt-11">
                            <div className="border border-gray-500 rounded-md p-5 flex-1">
                                <img src={Project1} className="w-full h-auto" />
                                <h3 className="text-2xl font-semibold mt-8">
                                    Addis Ababa vital registration system
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                    Responsive web based system for Addis Ababa viral registration system using PHP as backend
                                    and for the Frontend: HTML5, CSS3 (SCSS),Tailwind, ReactJS

                                </p>
                                <div className="flex mt-12 gap-2">
                                    <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                                        Live preview
                                    </button>
                                    <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                                        <a target="_blank" href="https://github.com/todayAwoke/Vital-Registration-PHP.git">

                                            Checkout github
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <div className="border border-gray-500 rounded-md p-5 flex-1">
                                <img src={Project2} className="w-full h-auto" />
                                <h3 className="text-2xl font-semibold mt-8">
                                    Eye Bank Management System
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                    Responsive web based system for eye bank Management system using mern stack
                                    for Frontend: HTML5, CSS3 (SCSS),Tailwind, ReactJS
                                    for backend:NodeJS, ExpressJS, MongoDB
                                </p>
                                <div className="flex gap-2 mt-12">
                                    <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                                        Live preview
                                    </button>
                                    <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                                        <a href='https://github.com/Abe-Tiz/Eyebank-managemt-system'>Checkout github</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row  gap-10 mt-11">
                            <div className="border border-gray-500 rounded-md p-5 flex-1">
                                <img src={Project3} className="w-full h-auto" />
                                <h3 className="text-2xl font-semibold mt-8">
                                    Hasab aninomiry website
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                    Responsive website for aninomiry chat with others and experts
                                    using Mern stack
                                    and other new technologies
                                </p>
                                <div className="flex gap-4 mt-12">
                                    <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                                        Live preview
                                    </button>
                                    <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                                        <a href='https://github.com/todayAwoke/intermshiphasab'>Checkout github</a>
                                    </button>
                                </div>
                            </div>
                            <div className="border border-gray-500 rounded-md p-5 flex-1">
                                <img src={Project4} className="w-full h-auto" />
                                <h3 className="text-2xl font-semibold mt-8">
                                    Addis Ababa compas network installation
                                </h3>
                                <p className="text-gray-400 text-sm mt-2">
                                    using packet tracer we developed full flegided compas area network

                                </p>
                                <div className="flex gap-2 mt-12">
                                    <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                                        Live preview
                                    </button>
                                    <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                                        Checkout github
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Technoglies section */}
                <section className="py-10" id="technologies">
                    <div className="container m-auto px-4">
                        <h2 className="text-2xl font-semibold">Technologies</h2>
                        <div className="mt-14">
                            <div>
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold">HTML</h2>
                                    <p className="text-gray-500">Advanced</p>
                                </div>
                                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold">CSS,Tailwind,Chakar ui & Bootstrap</h2>
                                    <p className="text-gray-500">Advanced</p>
                                </div>
                                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold">
                                        JavaScript, TypeScript
                                    </h2>
                                    <p className="text-gray-500">Basic</p>
                                </div>
                                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                            </div>

                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold">next</h2>
                                    <p className="text-gray-500">Basic</p>
                                </div>
                                <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold">React</h2>
                                    <p className="text-gray-500">Advanced</p>
                                </div>
                                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <h2 className="font-semibold">PHP</h2>
                                    <p className="text-gray-500">Basic</p>
                                </div>
                                <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Additional skills section */}
                <section>
                    <div className="container m-auto px-4 py-14">
                        <h2 className="text-2xl font-semibold">
                            Additional technologies and skills
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
                            <div>
                                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                                    Networking
                                </p>
                            </div>
                            <div>
                                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                                    System analysis and Design
                                </p>
                            </div>
                            <div>
                                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                                    Teamwork
                                </p>
                            </div>
                            <div>
                                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                                    Git
                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
                            <div>
                                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                                    Database Development
                                </p>
                            </div>
                            <div>
                                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                                    Packet Tracer
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-8" id="aboutme">
                    <div className="container m-auto px-4">
                        <h2 className="text-2xl font-semibold">About me</h2>
                        <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
                            <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                                <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                                <p>
                                    Joined the university of Addis Ababa and then select my field,Information system
                                    in the university of Addis Ababa. Started my IT with good team member
                                </p>
                            </div>
                            <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                                <h3 className="absolute left-0 text-lg font-semibold">2023/4</h3>
                                <p>
                                    within meantime I have token internship in different company and most of as software development.
                                </p>
                            </div>
                            <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                                <p>
                                    I developed interactive website for Dream tutor and consultant service
                                </p>
                            </div>
                            <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                                <p>
                                    I  have been working 3 month project at Shayashone company and the project is for mister of education
                                </p>
                            </div>
                            <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                                <p>
                                    Know I am ready to develop real project using MERK,and other technologies stack
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="py-8" id="contact">
                    <div className="container m-auto px-4">
                        <h2 className="text-2xl font-semibold">Contact me</h2>
                        <p className="mt-12">
                            I am always open to new projects and I am always looking for new opportunities. If you have any questions or suggestions, feel free to contact me.
                        </p>
                        <form
                            id="contactForm" class="form-container"
                            ref={form} onSubmit={sendEmail}>

                            <div class="flex flex-col gap-4">
                                <input id="nameInput" class="input" type="text" name="user_name" placeholder="Your name" />
                                <input id="emailInput" class="input" type="email" name="user_email" placeholder="Your email" />
                                <textarea id="messageInput" class="input" name="message" placeholder="Your message"></textarea>
                                <button onClick={handlemessage} type="submit" class="btn">Send</button>
                            </div>
                        </form>
                    </div>
                </section >
            </main >
            <footer>
                <div className="container m-auto flex justify-between px-4 py-6">
                    <div>
                        <p className="text-gray-300 text-sm">Copyright @ 2024:Awoke Dejenie</p>
                    </div>
                    <div>
                        <ul className="flex gap-4">
                            <li>
                                <a target="_blank" href="https://www.facebook.com">
                                    <img src={Facebook} className="w-5" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/in/awoke-dejenie-043ab1232?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPsbze7JBTHCr8%2Bthj3%2FRbw%3D%3D">
                                    <img src={LinkedIn} className="w-5" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.instagram.com/awoke.2121?igsh=YzljYTk1ODg3Zg==">
                                    <img src={Instagram} className="w-5" />
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </footer >
            {
                scrolling && (
                    <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
                        window.scrollTo(0, 0);
                    }}>
                        <img src={ArrowDown} />
                    </button>
                )
            }
        </div >
    );
}

export default App;
