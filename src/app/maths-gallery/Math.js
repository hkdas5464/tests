"use client";
import React, { useCallback, useState } from "react";
import { CardHoverEffectDemo } from "../cardhover";
import Gallery from "react-photo-gallery";
import {Carousel,  Modal, ModalGateway } from "react-image";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Circle } from "./data";

const photo = [
  {
    src: "http://example.com/example/img1.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "http://example.com/example/img2.jpg",
    width: 1,
    height: 1,
  },
];

function Math_gall() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { Circle, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto pb-40 bg-black">
      <p className="text-2xl mt-20 md:text-4xl mb-5 lg:text-7xl text-white font-bold inter-var text-center">
        PARMAR SSC
      </p>

      <div className="flex w-full flex-col">
        <Tabs aria-label="Options">
          <Tab key="GK" title="GK_SERIES">
            <Card>
              <CardBody>
                {/* <CardHoverEffectDemo items={Parmarpyq}/> */}
                <Gallery photos={Circle} onClick={openLightbox} />
                <ModalGateway>
                  {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                      <Carousel
                        currentIndex={currentImage}
                        views={photos.map((x) => ({
                          ...x,
                          srcset: x.srcSet,
                          caption: x.title,
                        }))}
                      />
                    </Modal>
                  ) : null}
                </ModalGateway>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="eng" title="Nitto Series">
            <Card>
              <CardBody>{/* <CardHoverEffectDemo items={}/> */}</CardBody>
            </Card>
          </Tab>

          <Tab key="current" title="Current Affairs">
            <Card>
              <CardBody>
                {/* <CardHoverEffectDemo items={CurrentAffairs}/> */}
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Math_gall;
