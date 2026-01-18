import { Metadata } from "next";
import TitleSection from "@/components/title-section";
import Image from "next/image";
import React from "react";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are",
};

const About = () => {
  return (
    <div>
      <TitleSection
        title="About Us"
        subTitle="Experience the art of hospitality."
      />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Image src="/about-image.jpg" width={650} height={579} alt="about" />
          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Who we are
            </h1>
            <p className="text-gray-700 py-5">
              We are dedicated to providing an unforgettable experience. Our
              hotel combines modern luxury with timeless elegance to ensure your
              stay is perfect.
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Vision :</h4>
                  <p className="text-gray-600">
                    To be the preferred destination for travelers seeking
                    luxury, comfort, and personalized service.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoLocateOutline className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Mission :</h4>
                  <p className="text-gray-600">
                    To create lasting memories for our guests through
                    exceptional hospitality and attention to detail.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
