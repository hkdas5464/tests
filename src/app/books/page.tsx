"use client";
import React, { useState } from 'react'
import { CardHoverEffectDemo } from '../cardhover';
import { Tabs, Tab, Card, CardBody, Input, Skeleton, CardHeader, Divider, CardFooter, Select, SelectItem } from "@nextui-org/react";
import { animals, countryStateData, CurrentAffairs, EnglishData, Mathsdata, Reasoning, SSC2024 } from "./data";
import { SearchIcon } from './SearchIcon';
import { FaFilePdf } from "react-icons/fa6";
import styles from './CountryStateDropdown.module.css'; // Import the CSS module
import './test.css';
import Image from 'next/image';
import Link from 'next/link';


interface Subjects {

  title: string;
  link: string;
  description: string;
}


function SSCCGL() {

  const [mathquery, setmathQuery] = useState('');
  const [englishquery, setenglishQuery] = useState('');
  const [reasquery, setreasQuery] = useState('');
  const [gkquery, setgkQuery] = useState('');
  const [gsquery, setgsQuery] = useState('');



  const MathsearchFilter = (array: Subjects[]) => {
    return array.filter(
      (el) => el.title.toLowerCase().includes(mathquery)
    )
  }
  const EnglishsearchFilter = (array: Subjects[]) => {
    return array.filter(
      (el) => el.title.toLowerCase().includes(englishquery)
    )
  }

  const ReasoningsearchFilter = (array: Subjects[]) => {
    return array.filter(
      (el) => el.title.toLowerCase().includes(reasquery)
    )
  }

  const GKsearchFilter = (array: Subjects[]) => {
    return array.filter(
      (el) => el.title.toLowerCase().includes(gkquery)
    )
  }

  const GssearchFilter = (array: Subjects[]) => {
    return array.filter(
      (el) => el.title.toLowerCase().includes(gsquery)
    )
  }



  // const filtered = searchFilter(Mathsdata)

  //Handling the input on our search bar
  const MathhandleChange = (e: any) => {
    setmathQuery(e.target.value)
  }
  const EnghandleChange = (e: any) => {
    setenglishQuery(e.target.value)
  }

  const ReashandleChange = (e: any) => {
    setreasQuery(e.target.value)
  }

  const GkhandleChange = (e: any) => {
    setgkQuery(e.target.value)
  }

  const GshandleChange = (e: any) => {
    setgsQuery(e.target.value)
  }


  const [states, setStates] = useState<{ link: string; label: string }[]>([]);
  const [isActive, setIsActive] = useState(false);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const countryKey = event.target.value;
    const country = countryStateData.find((c) => c.countryKey === countryKey);
    setStates(country ? country.states : []);
    setIsActive(true); // Toggle between true and false


  };



  return (
    <div className="max-w-4xl mx-auto pb-40 bg-black" >
      <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl text-white font-bold inter-var text-center">
        ALL SSC PYQ
      </p>

      <div className="flex w-full flex-col">
        <Tabs aria-label="Options">

          <Tab key="ssc" title="SSC">
            <div className="flex w-full flex-col">

              <div className="w-full flex flex-row flex-wrap gap-4">

                <Select
                  label="Select Year"
                  className="max-w-xs"
                  placeholder='MATHEMATICS'
                  onChange={handleCountryChange}
                >
                  {countryStateData.map((country) => (
                    <SelectItem key={country.countryKey} value={country.countryKey}>
                      {country.countryName}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <div className={isActive ? 'box' : 'pyq'}>
                <Card className='mt-2'>
                  <CardBody >
                    {states.map((e) => (
                      <Card className='m-2' key={Math.random()}>
                        <CardHeader className="flex gap-3">
                          <FaFilePdf className="w-8 h-8" />
                          <div className="flex flex-col">
                            <Link href={e.link} className="text-md">{e.label}</Link>
                          </div>
                        </CardHeader>

                      </Card>
                    ))}

                  </CardBody>
                </Card>
              </div>
              <div className={isActive ? 'boxactive' : 'box'}>

                <Card className='mt-2'>
                  <CardBody>
                    <div className=' ml-10 mt-6'>
                      {SSC2024.map((e) => (
                        <Card className='m-2' key={Math.random()}>
                          <CardHeader className="flex gap-3">
                            <FaFilePdf className="w-8 h-8" />
                            <div className="flex flex-col">
                              <Link href={e.link} className="text-md">{e.label}</Link>
                            </div>
                          </CardHeader>

                        </Card>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Tab>
          <Tab key="jpsc" title="JPSC">
            <Card>
              <CardBody>
                <div className=' ml-10 mt-6'>
                  <Input
                    onChange={EnghandleChange}
                    value={englishquery}
                    classNames={{
                      base: "max-w-full sm:max-w-[10rem] h-10",
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
                <CardHoverEffectDemo items={EnglishsearchFilter(EnglishData)} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="upsc" title="UPSC">
            <Card>
              <CardBody>
                <div className=' ml-10 mt-6'>
                  <Input
                    onChange={ReashandleChange}
                    value={reasquery}
                    classNames={{
                      base: "max-w-full sm:max-w-[10rem] h-10",
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
                <CardHoverEffectDemo items={ReasoningsearchFilter(Reasoning)} />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="gk" title="GK">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="current" title="Current Affairs">
            <Card>
              <CardBody>
                <div className=' ml-10 mt-6'>
                  <Input
                    onChange={GshandleChange}
                    value={gsquery}
                    classNames={{
                      base: "max-w-full sm:max-w-[10rem] h-10",
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
                <CardHoverEffectDemo items={GssearchFilter(CurrentAffairs)} />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default SSCCGL


