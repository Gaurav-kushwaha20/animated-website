"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import MagicButton from "../MagicButton";
import { FaCopy } from "react-icons/fa";
import { useState } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,

}: {
  id: number;
  className?: string;
  title?: string
  description?: string
  img?: string;
  spareImg?: string;

}) => {
  const [copy, setcopy] = useState(false)

  const handleclick = () => {
    navigator.clipboard.writeText("rohanbhai5295@gmail.com")
    setcopy(true)
  }
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col overflow-hidden border border-white-100 lg:p-4 p-2",
        className
      )}
    >
      {
        (id === 1) &&
        <div>
          {img && <img src={img} alt="image" className="w-full h-full object-cover object" />}
        </div>

      }
      {
        (id === 2) &&
        <div>
          {img && <img src={img} alt="image" className="w-full h-full object-cover object" />}
        </div>

      }
      {
        (id === 3) &&
        <div>
          {img && <img src={img} alt="image" className="w-full h-full object-cover object" />}
        </div>

      }
      {
        (id === 4) &&
        <div>
          {img && <img src={img} alt="image" className="w-full h-full object-cover object" />}
        </div>

      }
      {
        (id === 5) &&
        <div>
          {img && <img src={img} alt="image" className="w-full h-full object-cover object" />}
          <div className="flex gap-5 absolute right-5 top-5">
            <div className="flex flex-col gap-3">
              {/* <div className="bg-[#10132E] py-3 px-5 rounded-lg w-24 h-12"></div> */}
              {['Next', 'React', 'Express'].map((item, index) => (
                <div key={index} className="bg-[#10132E] py-3 px-5 rounded-lg w-24 h-12">
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {['Next', 'React', 'Express'].map((item, index) => (
                <div key={index} className="bg-[#10132E] py-3 px-5 rounded-lg w-24 h-12">
                  {item}
                </div>
              ))}
              {/* <div className="bg-[#10132E] py-3 px-5 rounded-lg w-24 h-12"></div> */}

            </div>



          </div>
        </div>

      }
      {
        (id === 6) &&
        <div>
          {img && <img src={img} alt="image" className="w-full h-full object-cover object" />}

        </div>

      }
      {
        (id === 7) &&
        <div className="h-full">


          <BackgroundGradientAnimation>
            <div className="md:absolute h-[17rem] md:h-auto z-50  inset-0 flex items-center justify-center text-white font-bold px-4  text-3xl text-center md:text-4xl lg:text-7xl">
              <div className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                <MagicButton
                  title={copy ? "Copied" : "Copy Email"}
                  icon={<FaCopy />}
                  position="right"
                  otherClasses={'gap-3 text-2xl '}
                  handleClick={handleclick}
                />
              </div>
            </div>
          </BackgroundGradientAnimation>
        </div>

      }






      <div className="lg:absolute mx-4 group-hover/bento:translate-x-2 transition duration-200 bottom-5">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-base">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
          {/* {description} */}
        </div>
      </div>
    </div>
  );
};
