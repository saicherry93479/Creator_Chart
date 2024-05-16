import  { useEffect, useRef, useState } from "react";
import TestOne from "../assets/TestOne.webp";
import TestThree from "../assets/TestThree.webp";
import TestTwo from "../assets/TestTwo.webp";

const ImageData = [TestTwo, TestOne, TestThree];

const TestimonalData = [
  "Tanya and Sarthak have been a great support in my LinkedIn journey. They are very hard-working and result oriented. They are patient when they need to be and they push you when they need the results from you.They have provided me with the tools I need to be successful in this journey. I have learnt a lot from them and wish them all the best!",
  `I highly recommend Creator Chart for anyone who is looking to start/improve their LinkedIn presence. Tanya and Sarthak have helped me build a discipline around LinkedIn that I didn't think Ihad in me. I used to be scared to put my opinion out there and
    engage with my connections but today, I wake up and open LinkedIn
    before Instagram and that truly says something!`,
  `Creator Chart is an amazing initiative by Tanya (ex-LinkedIn) and Sarthak. They are genuinely helping me understand how to strengthen my personal brand of being a HR professional on LinkedIn (without any ghostwriting involved) and creating a network of like-minded people to learn from.

    I have received many tangible leads, opportunities to speak and offers to collaborate after joining their cohort and I wouldn't just attribute it to pure luck.
    
    It's a good to be able to bring in more structure and depth to my writing on LinkedIn, post joining the cohort and I'd like to see where this takes me, in the longer run.`,
];

const backColors = ["bg-red-500", "bg-yellow-500", "bg-green-500"];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true); // State to track scrolling direction
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        let newIdx;
        if (forward) {
          newIdx = (index + 1) % ImageData.length;
          if (newIdx === 0 && index !== 0) {
            // Check if we need to reverse direction
            setForward(false);
            newIdx = index - 1;
          }
        } else {
          newIdx = index - 1;
          if (newIdx < 0) {
            // Check if we need to reverse direction
            setForward(true);
            newIdx = 1;
          }
        }
        setIndex(newIdx);
        const scrollX = newIdx * window.innerWidth;
        containerRef.current.scrollTo({ left: scrollX, behavior: "smooth" });
      }
    }, 4000); // Change slides every 3000ms

    return () => clearInterval(interval);
  }, [index, forward]);
//   d9e9fa
  return (
    <div className="bg-violet-400 dark:bg-violet-400 py-24 pointer-events-none">
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h1 className="__className_b3f6a0 mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
        Our Clients Say <br />
          <span className="relative bg-clip-text text-transparent bg-gradient-to-t from-violet-600 to-violet-600/[0.8] z-10 dark:text-white"></span>
        </h1>
      </div>
      <p className="mx-auto mt-6 mb-20 max-w-lg text-center text-lg leading-8 text-gray-600 dark:text-gray-200">
      </p>
      <div
        ref={containerRef}
        className="snap-x snap-mandatory flex gap-2 overflow-scroll no-scrollbar scrollbarhide"
      >
        {ImageData.map((d, i) => {
          return (
            <div className="snap-center ">
              <div className="mx-auto w-screen px-4 lg:px-32 xl:px-64 xxl:px-72">
                <div
                  className={` flex w-full px-2 flex-col md:flex-row py-16 rounded-xl items-start justify-center gap-10 ${backColors[i]} border-4 dark:border-white/65 border-black/65`}
                >
                  <img
                    className="rounded-xl w-screen md:w-[45%] lg:w-[40%] xl:w-[35%]"
                    src={d}
                    alt="Testimonial"
                  ></img>
                  <div className="w-fullmd:w-[45%] lg:w-[40%] xl:w-[35%]lg:w-[30%] relative mt-[-2rem] md:mt-0 ">
                    <p className="dark:text-white ellipsis-3-lines">{TestimonalData[i]}</p>
                    <span className="bg-violet-50 mt-4 text-violet-500 border-violet-200 rounded-xl inline-block px-2 py-0.5 leading-tight text-xs lg:text-sm font-medium border">
                      Laxmi Krishnan, Founder | Content Writer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;

{
  /* <div className="bg-blue-500  flex gap-2 !w-[600px] overflow-scroll ">
      {ImageData.map((d, i) => {
        return (
          <div className="!w-[800px] bg-red-500">
            <div className=" mx-auto   flex   gap-10  items-start justify-center px-32">
              <img className="rounded-xl w-[50%] " src={d}></img>

              <div className="space-y-5 w-[50%] relative mt-[-2rem] md:mt-0 pb-16">
                <p className=" text-white">{TestimonalData[i]}</p>
                <span className="bg-violet-50 text-violet-500 border-violet-200 rounded-xl inline-block px-2 py-0.5 leading-tight text-xs lg:text-sm font-medium border">
                  Laxmi Krishnan, Founder | Content Writer
                </span>

                <p />
              </div>
            </div>
          </div>
        );
      })}
    </div> */
}
