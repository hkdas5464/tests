'use client'

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

export default function App() {
  const list = [
    {
      title: "Folk Dances",
      img: "gk-gallery/folk-dance",
      price: "",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        /* eslint-disable no-console */

          <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                alt={item.title}
                className="w-full object-cover h-[140px]"
                radius="lg"
                shadow="sm"
                src={item.img}
                width="100%"
              />
            </CardBody>
            <Link href={item.img}>

            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
            </Link>

          </Card>
      ))}
    </div>
  );
}
