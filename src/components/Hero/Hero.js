import React from "react";
import "./Hero.css";
import "./herostyle.css";
import emailjs from '@emailjs/browser';
import { sliderData } from "./slider-data";
import { useState, useEffect, useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { TbSolarPanel } from "react-icons/tb";
import { VscSettingsGear } from "react-icons/vsc";
import { TbBatteryAutomotive } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { TbSend } from "react-icons/tb"
import  logo from "./logo.png"
import { Link } from "react-scroll"
import Africa from "./Africa.png";
import Workmen from "./solar-workers.mp4";
import Rooftop from "./rooftop.mp4";
import { BsFillPeopleFill} from "react-icons/bs";
import { GrSolaris } from "react-icons/gr";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { GiEarthAfricaEurope } from "react-icons/gi";
import CountUp, { useCountUp } from 'react-countup';
import Speedometer from './speedometer.png'
import Tool from "./tool.png"
import Distance from "./distance.png"
import Products from "../Products/Products";
import "../Products/Products.css"
import {BiMenuAltRight} from 'react-icons/bi'
import { MdHeadsetMic } from "react-icons/md"
import ScrollToTop from "react-scroll-to-top";
import OutsideClickHandler from "react-outside-click-handler";

// app password 92DPc59WAxL3

const Result =() => 
{
  return (
    <p>Your message has been successfully sent</p>
  )
}

const Hero = () => {
  const [menuOpened, setMenuOpened]= useState(false)
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }
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

  const form = useRef();
  const [result, showResult] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3r2tmvu', 'template_wnf4ll6', form.current, 'U-SMYtjDzq329-nph')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true)
  };

  return (
    <div>
      <div className="scroll-top">
        <ScrollToTop
          smooth
          className=" w-10 pl-1 self-center 
              bg-[#ffdb00]"
          top="20"
          id="fill"
        />
      </div>

      <header className="py-4 bg-white">
        <div className="container bg-white flex items-center">
          {/* <input type="checkbox" name="" id="check" /> */}

          <div className="logo-container">
            {/* <h3 className="logo font-extrabold cursor-pointer">
              alpha{" "}
              <span>
                <span className="text-[#FFA404] font-extrabold">ziva </span>
              </span>
            </h3> */}
            <div className="cursor-pointer">
              <img src={logo} alt="company" className="w-2/4 md:w-1/5" />
            </div>
          </div>

          <OutsideClickHandler
            onOutsideClick={() => {
              setMenuOpened(false);
            }}
          >
            <div
              className="h-menu flexCenter md:mt-0 mt-10 gap-3 text-black"
              style={getMenuStyles(menuOpened)}
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                href=""
              >
                About Us
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                href=""
              >
                Services
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                href=""
              >
                Projects
              </Link>
              {/* <a href="">Get Started</a> */}

              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className="py-3 px-6 rounded-lg text-black bg-[#ffdb00] gap-2 flex items-center"
              >
                <MdHeadsetMic />
                <span>Contact Us</span>
              </Link>
            </div>
          </OutsideClickHandler>

          <button
            className="menu-icon md:hidden flex text-black items-center menu justify-center"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </button>
        </div>
      </header>
      <main>
        <section className="">
          <div className="hero-container">
            <video autoPlay loop muted playsInline className="background-clip">
              <source src={Workmen} type="video/mp4"></source>
            </video>
            <div className="content flex items-center justify-center">
              <div className="md:w-2/4">
                <h1 className="text-white font-bold font-poppins text-2xl md:text-5xl text-center uppercase">
                  Transform Your Energy Future with Our Solar Solutions and
                  Embrace Sustainability.
                </h1>
                <p className="py-5 md:text-lg text-center text-white">
                  Discover Limitless Renewable Energy Potential with Our
                  Advanced Solar Solutions. Embrace Sustainability,
                  Independence, and a Greener Tomorrow.
                </p>
                <button className="flex text-black justify-center mx-auto bg-[#FFDB00] flex-row items-center gap-2 py-3 px-5 rounded-lg">
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
        </section>
        <section className="bg-white">
          <div
            className="max-w-[85rem] bg-white mx-auto px-[2rem] flex flex-col overflow-x-hidden pt-20 md:mr-0"
            id="services"
          >
            <div className="grid grid-cols-12 md:gap-10 bg-white gap-0 relative text-black">
              <div className="md:col-span-6 col-span-12 md:pr-0  flex flex-col items-start justify-center w-full">
                <h2 className="text-[#FFA404] uppercase my-5 font-bold text-2xl">
                  our services
                </h2>
                <h1 className="capitalize text-[#1F2541] font-bold text-2xl md:text-5xl">
                  We drive the transition to reliable energy
                </h1>
              </div>
              <div className="md:col-span-6 col-span-12 w-full h-full flex items-center text-[#1F2541] justify-center py-5 md:pr-0">
                <p>
                  We're Pioneering the Transition to Sustainable, Reliable, and
                  Affordable Energy Systems with Our Innovative Technologies,
                  Empowering Society with Clean and Accessible Energy!{" "}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 w-full my-16 md:gap-10 gap-0 overflow-hidden">
              <div className="md:col-span-6 col-span-12 flex flex-col md:gap-8 gap-10 overflow-hidden">
                <div className="flex flex-row gap-3 overflow-hidden">
                  <div className="text-white flex items-start">
                    <div className="rounded-full bg-[#FFA404] p-6 text-2xl">
                      <TbSolarPanel />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 md:mr-0 ">
                    <h1 className="text-[#37416b] font-semibold text-xl">
                      Solar Panel Services
                    </h1>
                    <p className="text-sm text-[#1F2541]">
                      Take Control of Your Energy Future with Our Seamless Solar
                      Panel Installations, Empowering You with Clean and
                      Sustainable Energy that Helps Reduce Your Carbon
                      Footprint. Trust us for Reliable and
                      Environmentally-Friendly Energy Solutions.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-3 md:mr-0 md">
                  <div className="text-white flex items-start">
                    <div className="rounded-full bg-[#FFA404] p-6 text-2xl">
                      <VscSettingsGear />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="text-[#37416b] font-semibold text-xl">
                      Load Assessment and Evaluation
                    </h1>
                    <p className="text-sm text-[#1F2541]">
                      Our Experts Conduct Accurate and Precise Evaluations of
                      Your Energy Load Requirements, Ensuring that Your Solar
                      System is Customized to Meet Your Specific Energy Needs
                      and Performs Optimally.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-3 md:mr-0">
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
                      Maximize the Performance and Lifespan of Your Batteries
                      with Our Expert Maintenance Services. Trust Us to Ensure
                      Reliable Power When You Need It Most, So You Can Have
                      Peace of Mind Knowing Your Energy System is Always Ready
                      to Go.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 mt-16 md:mt-0 flex flex-col items-center justify-center w-full">
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
                <div className="md:my-4 my-9">
                  <h1 className="text-sm text-[#37416b] ">
                    Get More Than Just Exceptional Solar Products from Us - We
                    Also Offer Expert Maintenance Services to Help You Maximize
                    the Performance and Lifespan of Your Batteries. Trust Us to
                    Ensure Reliable Power When You Need It Most, So You Can
                    Enjoy a Hassle-Free Energy System.
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
                        <div className="slider-content flex h-full justify-center w-full items-center flex-col py-28 ">
                          <div className="mx-auto max-w-[85rem] w-full items-center md:px-10 px-4">
                            <h1 className="text-white flex md:w-[60%] md:text-4xl text-2xl font-bold tracking-wider">
                              {slide.heading}
                            </h1>
                            <p className="md:text-2xl font-semibold md:w-[60%] py-4">
                              {slide.desc}
                            </p>
                            <div className="flex gap-16">
                              <BsArrowLeft
                                className="arrowly previous fill-white hover:text-black transition hover:fill-black text-white"
                                onClick={prevSlide}
                              />
                              <BsArrowRight
                                className="arrowly next hover:fill-black transition fill-white text-white"
                                onClick={nextSlide}
                              />
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

          <div
            className="max-w-[85rem] bg-white mx-auto px-[2rem] flex flex-col overflow-hidden md:mr-0"
            id="about"
          >
            <div className="grid grid-cols-12 md:gap-10 relative text-black">
              <div className="md:col-span-6 col-span-12  md:pr-0  flex flex-col items-start justify-center w-full">
                <h2 className="text-[#FFA404] uppercase my-5 font-bold text-2xl">
                  about us
                </h2>
                <div>
                  <div className="orange-circle"></div>
                  <h1 className="capitalize text-[#1F2541] md:pr-0 font-bold md:text-5xl text-2xl">
                    Alpha Ziva: Igniting Africa's Energy Revolution with
                    Reliable and Sustainable Power Solutions.
                  </h1>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 md:w-3/4 h-full flex items-center text-[#1F2541] md:mb-0 mb-4 justify-center md:pr-0">
                <p>
                  At <span className="text-[#FFA404]">Alpha ziva</span>, We're
                  Passionate About Transforming the Way You Harness Energy. As a
                  Top Provider of Solar Services, We Specialize in Delivering
                  Innovative and Sustainable Solutions to Power Your home,
                  business or offices. With Our Expertise and Commitment to
                  Excellence, We Empower You to Embrace Clean and Renewable
                  Energy Sources, So You Can Enjoy a Brighter and Greener
                  Future. Trust AlphaZiva as Your Trusted Solar Partner and Take
                  the First Step Towards a Sustainable Energy Future.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-black justify-center h-full max-w-[50rem] mx-auto mt-10">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12  mb-5">
                  <p>
                    We're Committed to Excellence, Efficiency, and Unmatched
                    Customer Satisfaction. As Your Trusted Solar Company in
                    Africa, We Take Great Pride in Delivering Exceptional
                    Service that Goes Above and Beyond Industry Standards. Trust
                    Us to Provide You with the Best Solar Solutions and Customer
                    Experience
                  </p>
                </div>
                <div className="col-span-12 flex flex-col gap-5">
                  <span className="carder">
                    <img src={Speedometer} alt="" />
                  </span>
                  <span>
                    <p>
                      <span className="font-bold">Delivery speed</span>, We
                      Understand the Urgency of Implementing Your Solar
                      Solution. That's Why Our Streamlined Processes and
                      Dedicated Team Ensure Swift and Efficient Installations,
                      Minimizing Any Disruption to Your Schedule. We Believe in
                      Getting Your Solar System Up and Running Without Delay, So
                      You Can Start Enjoying the Benefits of Clean and
                      Sustainable Energy as Soon as Possible.
                    </p>
                  </span>
                </div>
                <div className="col-span-12 flex flex-col gap-5 my-10">
                  <span className="carder">
                    <img src={Tool} alt="" />
                  </span>
                  <span>
                    <span className="font-bold">Maintenance</span> is Key to Our
                    Commitment to Your Long-Term Satisfaction at AlphaZiva. Our
                    Experienced Technicians Provide Comprehensive Support to
                    Keep Your Solar System Performing at Its Best. We Offer
                    Routine Inspections and Proactive Maintenance to Ensure that
                    Your Investment Continues to Generate Clean Energy
                    Efficiently, So You Can Enjoy a Hassle-Free Energy System
                    and a Brighter Future.
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-12 flex flex-col gap-5">
                  <span className="carder">
                    <img src={Distance} alt="" />
                  </span>
                  <span>
                    <p>
                      <span className="font-bold">Distance </span> is No Barrier
                      to Clean Energy with AlphaZiva. Our Services Cover the
                      Entire African Continent, Bringing Our Expertise and
                      Reliable Solutions to Meet Your Unique Energy Needs
                      Wherever You Are.
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full items-center justify-center bg-white pt-20">
            <div className="md:w-2/4 flex flex-col items-center justify-center pt-10">
              <h1 className="font-bold text-yellow-500 text-2xl uppercase">
                our happy customers
              </h1>
              <p className="md:text-5xl text-3xl text-center text-[#1B213E] font-bold px-3 md:mx-0">
                Delivering Continuous Value to Our Clients Through Our Products.
              </p>
            </div>

            <div className="w-full md:hidden flex justify-center items-center">
              <img src={Africa} alt="Africa" className="w-3/4" />
            </div>

            <div className="grid grid-cols-12">
              <div className="md:col-span-6 col-span-12 text-black flex flex-col gap-5 items-center justify-center">
                <div className="flex items-cetner">
                  <div className="flex flex-row gap-3">
                    <div className="flex items-center justify-center text-5xl text-yellow-500">
                      <GiEarthAfricaEurope />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-5xl">
                        <CountUp end={1200} enableScrollSpy />+
                      </span>
                      <span className="text-sm font-bold">
                        Clients across Africa
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-cetner">
                  <div className="flex flex-row gap-3">
                    <div className="flex items-center justify-center text-yellow-500 text-5xl">
                      <GrSolaris />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-5xl">
                        <CountUp end={100} enableScrollSpy />+
                      </span>
                      <span className="text-sm font-bold">
                        Energy Solutiions
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-cetner">
                  <div className="flex flex-row gap-3">
                    <div className="flex items-center text-5xl justify-center text-yellow-500">
                      <BsFillPatchCheckFill />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-5xl">
                        <CountUp end={100} enableScrollSpy />%
                      </span>
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

          <div id="projects">
            <Products />
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

            <div className="quote-form mt-10" id="contact">
              <div className="hero min-h-screen bg-base-200 pt-10 quote-form">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="text-center lg:text-left">
                    <h1 className="md:text-5xl text-2xl font-bold text-white">
                      Get Your Personalized Quote Today!
                    </h1>
                    <p className="py-6 md:w-3/4 text-white">
                      Discover the Perfect Solar Solution for Your Home or
                      Business. Request Your Personalized Quote Today and Let Us
                      Help You Harness the Power of Clean and Sustainable
                      Energy.
                    </p>
                  </div>
                  <div
                    className="card bg-white flex-shrink-0 w-full max-w-sm shadow-2xl"
                    id="border"
                  >
                    <form ref={form} onSubmit={sendEmail}>
                    <div className="card-body bg-white">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Fullname</span>
                        </label>
                        <input
                          type="text"
                          name="from_name"
                          placeholder="Tell us your name"
                          className="input bg-transparent text-sm input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          name="user_email"
                          placeholder="email"
                          className="input bg-transparent text-sm input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Phone number</span>
                        </label>
                        <input
                          type="tel"
                          name="user_phone"
                          placeholder="Contact number"
                          className="input bg-transparent text-sm input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Comment</span>
                        </label>
                        <textarea
                          type="textarea"
                          cols={30}
                          rows={4}
                          name="message"
                          placeholder="Tell us what you want..."
                          className="pt-3 bg-transparent text-sm input input-bordered"
                        />
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn bg-[#FFA404] text-white border border-[#FFA404] uppercase gap-2" type="submit" >
                          <span>Submit</span>
                          <span>
                            <TbSend />
                          </span>
                        </button>
                      </div>

                      <div className="flex">
                        {result ? <Result /> : null}
                      </div>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="f-wrapper w-full md:pt-0 pt-10 flex flex-row justify-between">
              <div className="paddings innerWidth footer-style f-container md:ml-36 ml-0 w-full">
                {/* left-side */}
                <div className="flexColStart f-left">
                  <img src={logo} alt="company" className="w-2/4 md:w-1/5" />
                  <span className="secondaryText">
                    Leading the Charge <br /> Towards a Brighter and Greener
                    Africa with Innovative Solar Solutions.
                  </span>
                </div>

                <div className="flexColStart f-right">
                  <span className="primaryText">Contact address:</span>
                  <span className="secondaryText">
                    14 Hilltop Crescent, Off Ekwueme Close, Core Area,
                    Asaba Delta State
                  </span>
                  <a href="mailto:info@alphaziva.com" className="text-blue-900 link">
                    info@alphaziva.com
                  </a>

                  <div className="flexCenter f-menu text-xs">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      href=""
                    >
                      About Us
                    </Link>
                    <Link
                      to="services"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      href=""
                    >
                      Services
                    </Link>
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      href=""
                    >
                      Projects
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:flex items-center justify-center hidden">
                <img src={logo} alt="hello" className="opacity-25" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Hero;
