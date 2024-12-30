"use client";
import React, { useState } from 'react'
import { CardHoverEffectDemo } from '../cardhover';
import { Tabs, Tab, Card, CardBody, Input } from "@nextui-org/react";
import { CurrentAffairs, EnglishData1, Mathsdata, Parmarpyq, Reasoning } from "./data";
import MycardApp from './Cards';
import { Economics } from './data';
import { SearchIcon } from '../ssccgl/SearchIcon';


interface Subjects {

  title: string;
  link: string;
  img: string;


}




function Parmar() {

  const [mathquery, setmathQuery] = useState('');

  const MathsearchFilter = (array: Subjects[]) => {
    return array.filter(
      (el) => el.title.toLowerCase().includes(mathquery)
    )
  }

  const MathhandleChange = (e: any) => {
    setmathQuery(e.target.value)
  }


  return (
    <div className="max-w-4xl mx-auto pb-40 bg-black">
      <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl text-white font-bold inter-var text-center">
        PARMAR SSC
      </p>

      <div className="flex w-full flex-col">

        <Tabs aria-label="Options">
        


         
          <Tab key="Economics" title="All Notes">
            <Card>
              <CardBody>
                <div className=' ml-10 mt-6'>
                  <Input
                    value={mathquery}
                    onChange={MathhandleChange}
                    classNames={{
                      base: "max-w-full sm:max-w-[10rem] h-10 mb-4",
                      mainWrapper: "h-full",
                      input: "text-small",
                      inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={18} height={18} width={18} />}
                    type="search"
                  />
                </div>
                <MycardApp items={MathsearchFilter(Economics)} />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default Parmar