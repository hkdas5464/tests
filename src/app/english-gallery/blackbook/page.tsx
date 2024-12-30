'use client'
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader, Checkbox } from "@nextui-org/react";
import { Dumrao_Vocab_1, Dumrao_Vocab_2, Dumrao_Vocab_3, vocab_day_1, vocab_day_2, vocab_day_3, vocab_day_4, vocab_day_5 } from './data'
import './app.css'


interface Subjects {
    voc: String,
    meaning: String
}



export default function App() {
    const [selected, setSelected] = React.useState("photos");

    return (
        <div className="max-w-4xl mx-auto pb-40">
            <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl font-bold inter-var text-center">
                BLACKBOOK VOCAB
            </p>
            <div className="flex w-full flex-col">
                <Tabs aria-label="Options" variant="underlined">
                    <Tab key="GK" title="Day_1">

                        <Card className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                            {vocab_day_1.map((e, index) => (
                                <CardBody key={Math.random()} className="overflow-visible p-0">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <p>{1 + index}</p>
                                                <p className="title">{e.voc}</p>

                                            </div>
                                            <div className="flip-card-back">
                                                <p className="title">{e.meaning}</p>
                                                <p><Checkbox /></p>

                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            ))}
                        </Card>

                    </Tab>
                    <Tab key="current" title="Day_2">

                        <Card className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                            {vocab_day_2.map((e, index) => (
                                <CardBody key={Math.random()} className="overflow-visible p-0">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <p className="title">{e.voc}</p>
                                                <p>{1 + index}</p>

                                            </div>
                                            <div className="flip-card-back">
                                                <p className="title">{e.meaning}</p>

                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            ))}
                        </Card>
                    </Tab>

                    <Tab key="Day_3" title="Day_3">

                        <Card className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                            {vocab_day_3.map((e, index) => (
                                <CardBody key={Math.random()} className="overflow-visible p-0">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <p className="title">{e.voc}</p>
                                                <p>{1 + index}</p>
                                            </div>
                                            <div className="flip-card-back">
                                                <p className="title">{e.meaning}</p>

                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            ))}
                        </Card>
                    </Tab>

                    <Tab key="Day_4" title="Day_4">

                        <Card className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                            {vocab_day_4.map((e, index) => (
                                <CardBody key={Math.random()} className="overflow-visible p-0">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <p className="title">{e.voc}</p>
                                                <p>{1 + index}</p>
                                            </div>
                                            <div className="flip-card-back">
                                                <p className="title">{e.meaning}</p>

                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            ))}
                        </Card>
                    </Tab>

                    <Tab key="Day_5" title="Day_5">

                        <Card className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                            {vocab_day_5.map((e, index) => (
                                <CardBody key={Math.random()} className="overflow-visible p-0">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <p className="title">{e.voc}</p>
                                                <p>{index + 1}</p>
                                            </div>
                                            <div className="flip-card-back">
                                                <p className="title">{e.meaning}</p>

                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            ))}
                        </Card>
                    </Tab>


                    <Tab key="Dumrao_Vocab_1" title="Dumrao_Vocab_1">

                        <Card className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                            {Dumrao_Vocab_1.map((e, index) => (
                                <CardBody key={Math.random()} className="overflow-visible p-0">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <p className="title">{e.voc}</p>
                                                <p>{index + 1}</p>
                                            </div>
                                            <div className="flip-card-back">
                                                <p className="title">{e.meaning}</p>

                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            ))}
                        </Card>
                    </Tab>


                    <Tab key="Dumrao_Vocab_2" title="Dumrao_Vocab_2">

                        <Card className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                            {Dumrao_Vocab_2.map((e, index) => (
                                <CardBody key={Math.random()} className="overflow-visible p-0">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <p className="title">{e.voc}</p>
                                                <p>{index + 1}</p>
                                            </div>
                                            <div className="flip-card-back">
                                                <p className="title">{e.meaning}</p>

                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            ))}
                        </Card>
                    </Tab>


                    <Tab key="Dumrao_Vocab_3" title="Dumrao_Vocab_3">

                        <Card className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                            {Dumrao_Vocab_3.map((e, index) => (
                                <CardBody key={Math.random()} className="overflow-visible p-0">
                                    <div className="flip-card">
                                        <div className="flip-card-inner">
                                            <div className="flip-card-front">
                                                <p className="title">{e.voc}</p>
                                                <p>{index + 1}</p>
                                            </div>
                                            <div className="flip-card-back">
                                                <p className="title">{e.meaning}</p>

                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            ))}
                        </Card>
                    </Tab>

                </Tabs>
            </div>
        </div>
    );
}
