"use client";
import React from "react";
import { CardHoverEffectDemo } from "../../cardhover";

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
                 <img className="w-full rounded" src="https://lh3.googleusercontent.com/pw/AP1GczOGW7nKQ2RDQcViPQkZbF9p8PxYOGTnKTa31vCJGcWIeNhra63HK4_EXnYm910MquhLi4ExskFSr4Wga25KMBPjOxWXoJ_8xiblddG5SPXxl3_8fdV9LSYI9P8jxX2LAFZ-teDhcsSaPOQuuZHQCK0=w1714-h913-s-no-gm?authuser=0" key={Math.random()} />

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
