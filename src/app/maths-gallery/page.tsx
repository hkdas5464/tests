"use client";
import React from "react";
import { CardHoverEffectDemo } from "../cardhover";
import Gallery from './Gallery';
import {
  Tabs,
  Tab,
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import LightGallery from "lightgallery/react";
import Link from "next/link";
import {SlideshowLightbox} from 'lightbox.js-react'

 const Circle = [
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczPh6aGD5AUVv-QEWP7OBoWGC70EZWI8s-W3_s5VIgAXAZHLampdOmxOBzqHMaXld-BBUCNktTqDZ0nLAUoNKbkBJDI-rr2N7HMszBgBDSq84V6FoiuN5I59weCOFvpt2QcQeQRHddJW2lgnWbxMV9x5=w1600-h442-s-no-gm?authuser=0",
    width: 3,
    height: 4,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNOJSte8UhcQhbNcY8-bJSLtPgCaE42FligKXDObHn4Xu1mFYdMFdgTt5oOG7P09tC6lt_qYSwSZn7FP3emUBH0Usloa8uWZ5CwgwJDbLUyuFSG1LuhBN354R1eqDvBGiTY7x5hOElnKaYoxUTstSFN=w1577-h773-s-no-gm?authuser=0",
    width: 3,
    height: 4,
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczMGRufpWROYmOhLYjt4Ny21BijJp_ZUpPHAue0qzXUGfPzUkXmKqwACDpdDB9ApW7VU2mYrD4kmNp1TAM9zq5VbFxGNZw4zI4358oUu0OMbAsb9iOOFCLiQnqLlLBQ7Sy27vr34HlNzE-Khl-IuAh2G=w870-h773-s-no-gm?authuser=0",
    width:3,
    height:4  
},
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNrIFgbLPsNpx1VU2CT_O6xpDKx1KlHDDaz8AuT2T1YoAo2BPzL6_spaLWtg6JabWD-W-AZa_G6_B72IsFXFIhUU-0kzuaLxQzXjGPuafFT8UbPn7E2VTm0-CMN7RKZL2o7vlIDMVxfb6Ort2mGAMRG=w507-h773-s-no-gm?authuser=0",
    
    width:3,
    height:4  
},
  {
    src: "https://lh3.googleusercontent.com/pw/AP1GczNvOgK8TbikFGbIHASvBs_ITTgAa17S2c5UXv7riiSgAiWoNTIC8gJRg46xLInAviTfphlRKVLfoHpILFyKrHkwkhsbu0FK-n-mdq7ci7_0jttauRQv0fX7RZu9dADrHb1vyU2X7LjXZrwBF3w-Dcyj=w512-h773-s-no-gm?authuser=0",
    
    width:3,
    height:4  
},
];

function Mathgallery() {
  return (
    <div className="mx-auto pb-40 bg-black">
      <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl text-white font-bold inter-var text-center">
   MATHS
      </p>

      <div className="flex w-full flex-col p-10">
        
        <Tabs aria-label="Options">
          <Tab key="GK" title="Circle">
         
            <div className="">
             
                 <SlideshowLightbox className=" grid grid-cols-2 md:grid-cols-3 gap-4 " showThumbnails={true}>
                 <img className="w-full rounded" src="https://lh3.googleusercontent.com/pw/AP1GczPh6aGD5AUVv-QEWP7OBoWGC70EZWI8s-W3_s5VIgAXAZHLampdOmxOBzqHMaXld-BBUCNktTqDZ0nLAUoNKbkBJDI-rr2N7HMszBgBDSq84V6FoiuN5I59weCOFvpt2QcQeQRHddJW2lgnWbxMV9x5=w1600-h442-s-no-gm?authuser=0" key={Math.random()} />
                 <img className="w-full rounded" src="https://lh3.googleusercontent.com/pw/AP1GczNOJSte8UhcQhbNcY8-bJSLtPgCaE42FligKXDObHn4Xu1mFYdMFdgTt5oOG7P09tC6lt_qYSwSZn7FP3emUBH0Usloa8uWZ5CwgwJDbLUyuFSG1LuhBN354R1eqDvBGiTY7x5hOElnKaYoxUTstSFN=w1577-h773-s-no-gm?authuser=0" key={Math.random()} />
                 <img className="w-full rounded" src="https://lh3.googleusercontent.com/pw/AP1GczPh6aGD5AUVv-QEWP7OBoWGC70EZWI8s-W3_s5VIgAXAZHLampdOmxOBzqHMaXld-BBUCNktTqDZ0nLAUoNKbkBJDI-rr2N7HMszBgBDSq84V6FoiuN5I59weCOFvpt2QcQeQRHddJW2lgnWbxMV9x5=w1600-h442-s-no-gm?authuser=0" key={Math.random()} />
                 <img className="w-full rounded" src="https://lh3.googleusercontent.com/pw/AP1GczNrIFgbLPsNpx1VU2CT_O6xpDKx1KlHDDaz8AuT2T1YoAo2BPzL6_spaLWtg6JabWD-W-AZa_G6_B72IsFXFIhUU-0kzuaLxQzXjGPuafFT8UbPn7E2VTm0-CMN7RKZL2o7vlIDMVxfb6Ort2mGAMRG=w507-h773-s-no-gm?authuser=0" key={Math.random()} />
                 <img className="w-full rounded" src="https://lh3.googleusercontent.com/pw/AP1GczNvOgK8TbikFGbIHASvBs_ITTgAa17S2c5UXv7riiSgAiWoNTIC8gJRg46xLInAviTfphlRKVLfoHpILFyKrHkwkhsbu0FK-n-mdq7ci7_0jttauRQv0fX7RZu9dADrHb1vyU2X7LjXZrwBF3w-Dcyj=w512-h773-s-no-gm?authuser=0" key={Math.random()} />  
               </SlideshowLightbox>
               
              {/* // <Gallery key={e.src} props={e.src}/> */}
           
            
            </div>
          </Tab>
          {/* <Tab key="eng" title="Nitto Series">
            <Card>
              <CardBody><CardHoverEffectDemo items={}/></CardBody>
            </Card>
          </Tab> */}

          {/* <Tab key="current" title="Current Affairs">
            <Card>
              <CardBody>
                <CardHoverEffectDemo items={CurrentAffairs}/>
              </CardBody>
            </Card>
          </Tab> */}
        </Tabs>
      </div>
    </div>
  );
}

export default Mathgallery;
