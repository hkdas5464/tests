"use client";
import React, { useEffect, useState } from 'react';
import {
  DAY1, DAY2, DAY3,
  DAY4,
  DAY5,
  DAY6,
  DAY7,
  DAY8,
  DAY9,
  DAY10,
  DAY11,
  DAY12,
  DAY13,
  DAY14,
  DAY15,
  DAY16,
  DAY17,
  DAY18,
  DAY19,
  DAY20,
  DAY21,
  DAY22,
  DAY23,
  DAY24,
  DAY25,
  DAY26,
  DAY27,
  DAY28,
  DAY29,
  DAY30,
  DAY31
} from './data';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/checkbox";

// import { AccordionAPP } from './Accordion.';
import { BackgroundLines } from './lib/background-lines';



function SSCCPO() {

  const [fileData, setFileData] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('fileData') || 'Initial file data';
    }
    return 'Initial file data';
  });

  const handleClick = () => {
    const newData = 'Updated file data after button click';
    setFileData(newData);
    localStorage.setItem('fileData', newData); // Save to localStorage
  };

  useEffect(() => {
    // This ensures that localStorage is only accessed on the client-side
    if (typeof window !== 'undefined') {
      const savedData = localStorage.getItem('fileData');
      if (savedData) {
        setFileData(savedData);
      }
    }
  }, []);

  return (
<div>
    <BackgroundLines>
      <div className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl font-bold inter-var text-center">
          <u>VOCAB OWS</u>
        </p>
        <Accordion>
          <AccordionItem key="1" aria-label="Day_1" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 1</a> </div>}>
            {DAY1.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="11" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox isSelected={true} ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.eng}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Day_1" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 2</a> </div>}>
            {DAY2.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="22" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.eng}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>

          <AccordionItem key="25" aria-label="Day_3" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 3</a> </div>}>
            {DAY3.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="262" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="27" aria-label="Day_4" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 4</a> </div>}>
            {DAY4.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="282" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="29" aria-label="Day_5" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 5</a> </div>}>
            {DAY5.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="302" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="31" aria-label="Day_6" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 6</a> </div>}>
            {DAY6.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="322" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="33" aria-label="Day_7" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 7</a> </div>}>
            {DAY7.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="342" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="35" aria-label="Day_8" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 8</a> </div>}>
            {DAY8.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="362" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="37" aria-label="Day_9" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 9</a> </div>}>
            {DAY9.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="382" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="39" aria-label="Day_10" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 10</a> </div>}>
            {DAY10.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="402" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="41" aria-label="Day_11" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 11</a> </div>}>
            {DAY11.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="422" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="43" aria-label="Day_12" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 12</a> </div>}>
            {DAY12.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="442" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="45" aria-label="Day_13" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 13</a> </div>}>
            {DAY13.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="462" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="47" aria-label="Day_14" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 14</a> </div>}>
            {DAY14.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="482" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="49" aria-label="Day_15" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 15</a> </div>}>
            {DAY15.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="502" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="51" aria-label="Day_16" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 16</a> </div>}>
            {DAY16.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="522" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="53" aria-label="Day_17" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 17</a> </div>}>
            {DAY17.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="542" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="55" aria-label="Day_18" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 18</a> </div>}>
            {DAY18.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="562" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="57" aria-label="Day_19" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 19</a> </div>}>
            {DAY19.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="582" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="59" aria-label="Day_20" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 20</a> </div>}>
            {DAY20.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="602" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="61" aria-label="Day_21" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 21</a> </div>}>
            {DAY21.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="622" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="63" aria-label="Day_22" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 22</a> </div>}>
            {DAY22.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="642" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="65" aria-label="Day_23" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 23</a> </div>}>
            {DAY23.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="662" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="67" aria-label="Day_24" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 24</a> </div>}>
            {DAY24.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="682" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="69" aria-label="Day_25" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 25</a> </div>}>
            {DAY25.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="702" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="71" aria-label="Day_26" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 26</a> </div>}>
            {DAY26.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="722" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} </h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="73" aria-label="Day_27" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 27</a> </div>}>
            {DAY27.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="742" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="75" aria-label="Day_28" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 28</a> </div>}>
            {DAY28.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="762" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="77" aria-label="Day_29" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 29</a> </div>}>
            {DAY29.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="782" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="79" aria-label="Day_30" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 30</a> </div>}>
            {DAY30.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="802" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>
          <AccordionItem key="81" aria-label="Day_31" title={<div><a className=' text-red-700 font-bold text-2xl'>DAY 31</a> </div>}>
            {DAY31.map((e, index) => (
              <Accordion key={e.id}>
                <AccordionItem key="822" aria-label="Accordion 1" title={<div><a className=' text-red-600'>{e.id}) </a> <Checkbox ><a className='text-blue-600 font-bold'>{e.word}</a></Checkbox></div>}>
                  <h1 className='text-green-600 font-semibold ml-4'>{e.meaning} || {e.englishMeaning}</h1>
                </AccordionItem>
              </Accordion>
            ))}
          </AccordionItem>


        </Accordion>
      </div>
    </BackgroundLines>

    


    </div>
  )
}

export default SSCCPO


