"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { WORDS } from "./data";
export const AccordionAPP = () => {

    const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const vocab= "https://music-app-5784e-default-rtdb.firebaseio.com/words.json";
const [loading, setLoading] = useState(true);
const [data,setData] = useState([]);


useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(vocab);
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
    
  }, []);

    return (
        <div>
         {WORDS.map((e,index)=>(
            <div key={Math.random}>
              <p>{index}</p>
               <Accordion selectionMode="multiple" >
                    <AccordionItem key={e.word} aria-label="Accordion 1" title={e.word}>
                        {e.meaning}
                    </AccordionItem>
                </Accordion>
                </div>
         ))}

               

       
        </div>
    );
};