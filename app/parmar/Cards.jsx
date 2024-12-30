import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";



export default function App({items}) {
    return (
        <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">

            {items.map((e) => (
                <Card isFooterBlurred className="w-full h-[250px] col-span-12 sm:col-span-4" key={Math.random()}>
                    <CardHeader className="absolute z-10 top-1 flex-col items-start">
                        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                        <h4 className="text-white font-medium text-2xl">{e.title}</h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="https://nextui.org/images/card-example-6.jpeg"
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <div>
                            <p className="text-black text-tiny">Available Now.</p>
                            <p className="text-black text-tiny">Click to go</p>
                        </div>
                        <a href={e.link}>
                        <Button className="text-tiny" color="primary" radius="full" size="sm"  >
                            Go        </Button>
                            </a>
                    </CardFooter>
                </Card>

            ))}

        </div>
    );
}
