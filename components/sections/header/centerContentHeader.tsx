import SectionStyle from "@/src/component/globalStyle/sectionStyle";
import { findComponent } from "@/utils/arrayFunc";
import React, { useState } from "react";

type Props = { data: any };

export default function CenterContentHeader({ data }: Props) {
  const allowedComponents =
    data?.variants[data?.currentVariant].allowedComponents;
  const sectionConfig = data?.config;
  const [components, setComponents] = useState(data.components);

  const styles = SectionStyle(sectionConfig);
  // Find each component once and store in a variable
  const headlineComponent = findComponent("HEADLINE", components);
  const paragraphComponent = findComponent("PARAGRAPH", components);
  const cardComponent = findComponent("CARDS", components);

  return (
    <div style={styles}>
      <style jsx>
        {`
          .imgs {
            position: absolute;
            height: 600px;
            width: 100%;
            left: 0;
            top: -150px;
            right: 0;
            bottom: 0;
            z-index: -1;
            color: transparent;
          }
          .image {
            -webkit-animation: spin 4s linear infinite;
            -moz-animation: spin 4s linear infinite;
            animation: spin 50s linear infinite;
          }
          @-moz-keyframes spin {
            100% {
              -moz-transform: rotate(360deg);
            }
          }
          @-webkit-keyframes spin {
            100% {
              -webkit-transform: rotate(360deg);
            }
          }
          @keyframes spin {
            100% {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          .blob {
            position: absolute;
            top: 0%;
            width: 600px;
            transform: translateX(-50%);
            left: 0;
            height: 600px;
            border-radius: 16px;
            animation: Hero_disco___tDkn -0.64s linear 4s infinite;
            background: conic-gradient(
              transparent 50deg,
              #ff4874 80deg,
              transparent 100deg
            );
            filter: blur(8px);
            inset: 0;
            z-index: -1;
            transform-origin: center;
          }
          @keyframes Hero_disco___tDkn {
            0% {
              transform: translateY(-25%) translateX(40%) rotate(0deg);
            }

            30% {
              transform: translateY(0) translateX(0) rotate(90deg) scaleX(0.7);
            }

            50% {
              transform: translateY(-25%) translateX(-40%) rotate(180deg);
            }

            70% {
              transform: translateY(0) translateX(0) rotate(270deg) scaleX(0.7);
            }

            to {
              transform: translateY(-25%) translateX(40%) rotate(1turn);
            }
          }
        `}
      </style>
      <section>
        <div className="relative md:pt-[100px] md:pb-[100px] pt-[50px] px-5 z-[1] flex justify-center items-center ">
          <img
            className="imgs"
            alt="Stylistic background splash to pretty up the page"
            fetchPriority="high"
            decoding="async"
            data-nimg="fill"
            src="/imgs/splash.jpg"
          />
          <div className="flex items-center text-center justify-center gap-4 flex-col">
            <h1
              className="bg-clip-text text-transparent md:text-[5.5rem] text-6xl font-bold"
              style={{
                backgroundImage:
                  "linear-gradient(45deg,#f83a3a 10%,#f13dd4 50%,#7000ff 90%)",
              }}
            >
              Your Personalized
            </h1>
            <h2 className="text-white font-bold md:text-6xl text-4xl">
              Daily Horoscope
            </h2>
            <p
              style={{ color: "hsla(0,0%,100%,.4)" }}
              className="md:text-xl text-lg max-w-3xl mt-5 mx-auto"
            >
              Discover the cosmic energies that shape your day and get clear
              guidance, inspiration, and a sprinkle of magic to navigate life's
              twists and turns. With a 100% personalised touch, your daily
              horoscope becomes a cherished roadmap, helping you make the most
              of every moment and harness the power of the stars.
            </p>
            {/* <CommonButon
              extra="mt-5"
              text="Get Your Personalized Horoscope Reading"
              link="#form"
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
