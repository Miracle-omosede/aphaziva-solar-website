import React from "react";
import "./Hero.css";
import "./herostyle.css";
import { sliderData } from "./slider-data";
import { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import SolarHouse from "./solar-house.png";
import { BsHeadset } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { TbSolarPanel } from "react-icons/tb";
import { VscSettingsGear } from "react-icons/vsc";
import { TbBatteryAutomotive } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";

import Men from "./business-man.jpg";
import Ladderman from "./man-with-helment.jpg";
import SolarBatteries from "./wall-power.jpeg";
import Pannel from "./pannel.png";
import Africa from "./Africa.png";
import Workmen from "./solar-workers.mp4";
import Rooftop from "./rooftop.mp4";
import { BsFillPeopleFill} from "react-icons/bs";
import { GrSolaris } from "react-icons/gr";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { GiEarthAfricaEurope } from "react-icons/gi";
import CountUp, { useCountUp } from 'react-countup';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  useCountUp({
    ref: 'counter',
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div>
      <header className="py-4">
        <div className="container">
          <input type="checkbox" name="" id="check" />

          <div className="logo-container">
            <h3 className="logo font-extrabold cursor-pointer">
              alpha{" "}
              <span>
                <span className="text-[#FFA404] font-extrabold">ziva </span>
              </span>
            </h3>
          </div>

          <div className="nav-btn mt-7">
            <div className="nav-links">
              <ul>
                <li className="nav-link">
                  <a href="#t">Home</a>
                </li>
                <li className="nav-link">
                  <a href="#t">
                    Products<ion-icon name="caret-down-outline"></ion-icon>
                  </a>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <a href="#t">Link 1</a>
                      </li>
                      <li className="dropdown-link">
                        <a href="4#">Link 2</a>
                      </li>
                      <li className="dropdown-link">
                        <a href="3#">Link 3</a>
                      </li>
                      <li className="dropdown-link">
                        <a href="#2">Link 4</a>
                      </li>
                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li className="nav-link">
                  <a href="f#">
                    Services<ion-icon name="caret-down-outline"></ion-icon>
                  </a>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <a href="f#">Link 1</a>
                      </li>
                      <li className="dropdown-link">
                        <a href="f#">Link 2</a>
                      </li>
                      <li className="dropdown-link">
                        <a href="#f">Link 3</a>
                      </li>
                      <li className="dropdown-link">
                        <a href="#f">Link 4</a>
                      </li>
                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li className="nav-link">
                  <a href="#2">About</a>
                </li>
              </ul>
            </div>

            <div className="log-sign md:p-0 md:m-0 my-10 contact-btn">
              <a
                href="#1"
                className="btn solid flex items-center font-semibold gap-2"
              >
                <span>
                  <BsHeadset />
                </span>
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          <div className="hamburger-menu-container">
            <div className="hamburger-menu">
              <div></div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section>
          <div className="hero-container">
            <video autoPlay loop muted playsInline className="background-clip">
              <source src={Workmen} type="video/mp4"></source>
            </video>
            <div className="content flex items-center justify-center">
              <div className="md:w-2/4">
                <h1 className="text-white font-bold font-poppins text-5xl text-center uppercase">
                  Power your future with reliable solar solutions.
                </h1>
                <p className="py-5 md:text-lg text-center text-white">
                  Explore the limitless potential of renewable energy with our
                  state-of-the-art solar solutions. Embrace sustainability,
                  independence, and a greener tomorrow.
                </p>
                <button className="flex justify-center mx-auto bg-[#FFDB00] flex-row items-center gap-2 py-3 px-5 rounded-lg">
                  <span className="">
                    <FaPlay />
                  </span>
                  <span className="text-sm font-semibold">
                    Begin your transition with us.
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-[85rem] mx-auto px-[2rem] flex flex-col overflow-x-hidden mt-20 md:mr-0">
            <div className="grid grid-cols-12 gap-10 relative">
              <div className="md:col-span-6 col-span-12 pr-20 md:pr-0  flex flex-col items-start justify-center w-full">
                <h2 className="text-[#FFA404] uppercase my-5 font-bold text-2xl">
                  our service
                </h2>
                <h1 className="capitalize text-[#1F2541] font-bold text-5xl">
                  We drive the transition to reliable energy
                </h1>
              </div>
              <div className="md:col-span-6 col-span-12 w-full h-full flex items-center text-[#1F2541] justify-center pr-20 md:pr-0">
                <p>
                  We drive the transition to more sustainable reliable and
                  affordable energy systems. With our innovative technologies,
                  we energize society!{" "}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 w-full my-16 gap-10 overflow-hidden">
              <div className="md:col-span-6 col-span-12 flex flex-col gap-8 overflow-hidden">
                <div className="flex flex-row gap-3 overflow-hidden">
                  <div className="text-white flex items-start">
                    <div className="rounded-full bg-[#FFA404] p-6 text-2xl">
                      <TbSolarPanel />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 md:mr-0  mr-24">
                    <h1 className="text-[#37416b] font-semibold text-xl">
                      Solar Pannel Services
                    </h1>
                    <p className="text-sm text-[#1F2541]">
                      Gain energy independence with our seamless solar panel
                      installations. Trust our reputable company for clean,
                      sustainable energy that reduces your carbon footprint.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-3 md:mr-0 mr-24">
                  <div className="text-white flex items-start">
                    <div className="rounded-full bg-[#FFA404] p-6 text-2xl">
                      <VscSettingsGear />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="text-[#37416b] font-semibold text-xl">
                      Hydro Power plant Services
                    </h1>
                    <p className="text-sm text-[#1F2541]">
                      Harness hydroelectric power for a greener future with our
                      expert plant services. Trust our reputable company to
                      maximize efficiency and sustainability, unlocking the
                      immense potential of water.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-3 md:mr-0 mr-24">
                  <div className="text-white flex items-start">
                    <div className="rounded-full bg-[#FFA404] p-6 text-2xl">
                      <TbBatteryAutomotive />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="text-[#37416b] font-semibold text-xl">
                      Battery maintenance Services
                    </h1>
                    <p className="text-sm text-[#1F2541]">
                      Optimize the performance and lifespan of your batteries
                      with our expert maintenance services. Trust us to ensure
                      reliable power when you need it most.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 flex flex-col items-center justify-center w-3/4">
                <div className="w-full service-container bg-black rounded-lg">
                  <div className="overlay"></div>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="background-clip2 object-cover rounded-lg h-80 w-full md:"
                  >
                    <source src={Rooftop} type="video/mp4"></source>
                  </video>
                </div>
                <div className="my-4">
                  <h1 className="text-sm text-[#37416b] ">
                    As a leading supplier of solar materials, we not only
                    provide exceptional products but also offer expert
                    maintenance services to optimize the performance and
                    lifespan of your batteries. Trust us to ensure reliable
                    power when you need it most.
                  </h1>

                  <div>
                    <button className="text-sm gap-2 text-[#37416b] font-semibold my-4 flex items-center justify-center">
                      <span>Learn more</span>
                      <span className="text-[#FFA404] text-lg">
                        <BsArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---services explanations----- */}
          <div className="h-[99vh]">
            <div className="slider">
              {sliderData.map((slide, index) => {
                return (
                  <div
                    className={
                      index === currentSlide ? "slide current" : "slide"
                    }
                    key={index}
                  >
                    {index === currentSlide && (
                      <div>
                        <img
                          src={slide.image}
                          alt="slide"
                          className=" md:h-[100vh] object-cover md:object-fill"
                        />
                        <div className="slider-content flex h-full justify-center w-full items-center flex-col py-28">
                          <div className="mx-auto max-w-[85rem] w-full items-center md:px-10 px-4">
                            <h1 className="text-white flex md:w-[60%] md:text-4xl text-4xl font-bold tracking-wider">
                              {slide.heading}
                            </h1>
                            <p className="md:text-2xl font-semibold md:w-[60%] py-4">
                              {slide.desc}
                            </p>
                            <div className="flex md:gap-10">
                              {/* <BsArrowLeft
                        className="arrow prev fill-white text-white"
                        onClick={prevSlide}
                      />
                      <BsArrowRight
                        className="arrow next fill-white text-white"
                        onClick={nextSlide}
                      /> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col w-full items-center justify-center">
            <div className="md:w-2/4 flex flex-col items-center justify-center pt-10">
              <h1 className="font-bold text-yellow-500 text-2xl uppercase">
                our happy customers
              </h1>
              <p className="text-5xl text-center text-[#1B213E] font-bold">
                Providing value to our clients through ongoing Products.
              </p>
            </div>

            <div className="w-full md:hidden flex justify-center items-center">
                  <img src={Africa} alt="Africa" className="w-3/4" />
            </div>

            <div className="grid grid-cols-12">
              <div className="md:col-span-6 col-span-12 flex flex-col gap-5 items-center justify-center">
                <div className="flex items-cetner">
                  <div className="flex flex-row gap-3">
                    <div className="flex items-center justify-center text-5xl text-yellow-500">
                      < GiEarthAfricaEurope />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-5xl">
                      <CountUp end={1200} enableScrollSpy/>+
                      </span>
                      <span className="text-sm font-bold">Clients across Africa</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-cetner">
                  <div className="flex flex-row gap-3">
                    <div className="flex items-center justify-center text-yellow-500 text-5xl">
                      < GrSolaris/>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-5xl"><CountUp end={100} enableScrollSpy />+</span>
                      <span className="text-sm font-bold">Energy Solutiions</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-cetner">
                  <div className="flex flex-row gap-3">
                    <div className="flex items-center text-5xl justify-center text-yellow-500">
                      < BsFillPatchCheckFill />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-5xl"><CountUp end={100} enableScrollSpy />%</span>
                      <span className="text-sm font-bold">Efficiency</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 md:flex items-center justify-center w-full hidden">
                <div>
                  <img src={Africa} alt="Africa" className="md:w-3/4" />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="max-w-[85rem] mx-auto px-[2rem] /4 flex flex-col mt-20">
              <div className="grid grid-cols-12  gap-10">
                {/* <div className="md:col-span-6 col-span-12 flex flex-col items-center md:items-start justify-center w-full">
                  <h2 className="text-[#FFA404] uppercase my-4 font-bold text-2xl">
                    save the enviroment
                  </h2>
                  <h1 className="capitalize text-[#1F2541] font-bold md:text-left text-center text-5xl">
                    We are building a sustainable future.
                  </h1>
                </div> */}
                <div className="md:col-span-6 col-span-12 w-full h-full flex items-center text-[#1F2541] justify-center md:text-left text-center">
                  {/* <p>
                    We drive the transition to more sustainable reliable and
                    affordable energy systems. With our innovative technologies,
                    we energize society!{" "}
                  </p> */}
                </div>
              </div>
            </div>

            <div className="quote-form mt-10">
              <div className="hero min-h-screen bg-base-200 pt-10 quote-form">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-white">
                      Request a Quote now!
                    </h1>
                    <p className="py-6 text-white">
                      Simplify procurement. Get tailored quotes from us with a
                      few clicks. Streamline your decision-making process today.
                    </p>
                  </div>
                  <div
                    className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
                    id="border"
                  >
                    <div className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Firstname</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Tell us your first name"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Lastname</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Tell us your last name"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="text"
                          placeholder="email"
                          className="input input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Comment</span>
                        </label>
                        <textarea
                          type="textarea"
                          placeholder="Tell us what you want..."
                          className="py-5 input input-bordered"
                        />
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary uppercase">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
          <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
