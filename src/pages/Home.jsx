import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../Components/Core/Homepage/HighlightText";

import CTAButton from "../Components/Core/Homepage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../Components/Core/Homepage/Codeblocks";
import TimelineSection from "../Components/Core/Homepage/TimelineSection";
import LearningLanguageSection from "../Components/Core/Homepage/LearningLanguageSection";
import InstructorSection from "../Components/Core/Homepage/InstructorSection";
import Footer from "../Components/Common/Footer";
import ExploreMore from "../Components/Core/Homepage/ExploreMore";
import video_bg from "../assets/Images/video_bg.png"

const Home = () => {
  return (
    <div>
      {/*Section1  */}
      <div
        className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-between"
      >
        <Link to={"/signup"}>
          <div
            className=" group mt-20 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit"
          >
            <div
              className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900"
            >
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-10">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className=" mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-7 mt-10">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className="  mx-3 my-12 shadow-blue-200">

        {/* <img src={video_bg} alt="video background" loading="lazy"
            className="absolute top-[3%] left-[2%] lg:h-[700px] lg:w-[1300px] z-0"/> */}
          <video muted loop autoPlay className=" shadow-lg  shadow-pure-greys-200 ">
            <source src={Banner} type="video/mp4" />
          </video>
          
        </div>

        {/* Code Section 1 */}
        <div className="relative">
          <div className=" absolute code_section1_gradient aspect-square lg:h-[372.95px] lg:w-[257.05px] opacity-10 rotate-[-0deg] 
          rounded-full left-[65%] top-[-1%]"></div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"coding potential "} />
                with our online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two\n</a><ahref="three/">Three</a>\n</nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>

        {/* Code Section 2 */}
        <div className=" relative">
          <div className=" code_section2_gradient absolute aspect-square lg:h-[372.95px] lg:w-[257.05px] opacity-10 rotate-[-0deg] 
          rounded-full left-[5%] top-[-1%]"></div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold ">
                Start
                <HighlightText text={"coding in seconds "} />
                with our online courses
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue lesson",
              linkto: "/login",
              active: true,
            }}
            ctabtn2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\n<head><title>Example</title><linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two\n</a><ahref="three/">Three</a>\n</nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>

        <ExploreMore/>
      </div>

      {/*Section 2  */}

      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[300px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore full catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div className="flex items-center gap-3">Learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div
          className="mx-auto w-11/12 max-w-maxContent flex flex-col itmes-center 
        gap-7 justify-between"
        >
          <div className="flex flex-row gap-5 mb-10 mt-20">
            <div className="text-4xl font-semibold w-[45%]">
              Get the skills you need for a
              <HighlightText text={"job that is in demand"} />
            </div>

            <div className="flex flex-col gap-10 w-[40%] items-start">
              <div className="text-[16px] font-inter">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>

          <TimelineSection />

          <LearningLanguageSection />
        </div>
      </div>

      {/*Section 3 */}
      <div className=" w-11/12 mx-auto max-w-maxContent flex-col 
                    items-center justify-between gap-8 bg-richblack-900 
                    first-letter text-white">

        <InstructorSection/>

        <h2 className="text-center text-4xl font-semibold mt-10"> Review from other learners</h2>
        {/* Review slider */}

      </div>

      {/*Footer */}
      <Footer/>
    </div>
  );
};

export default Home;
