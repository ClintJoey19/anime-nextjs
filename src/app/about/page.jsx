import React from "react";
import Container from "@/components/Container";
import MainContainer from "@/components/MainContainer";
import Image from "next/image";

const stats = [
  {
    stat: 10,
    desc: "Year of Experience",
  },
  {
    stat: 234,
    desc: "People reached",
  },
  {
    stat: 5,
    desc: "Services and plugins",
  },
];

const AboutPage = () => {
  return (
    <Container className="h-[80vh]">
      <MainContainer className="h-full grid grid-cols-2">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl text-blue-500 font-bold mb-6">
            About Agency
          </h3>
          <h2 className="text-5xl font-bold mb-6">
            We create digital ideas that are bigger, bolder, braver and better.
          </h2>
          <p className="mb-4">
            We create digital ideas that are bigger, bolder, braver and better.
            We believe in good ideas flexibility and precision. We're world's
            Our Special Team best consulting & finance solution provider. Wide
            range of web and software development services.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                <p className="text-blue-500 font-bold text-5xl">
                  {item.stat} K+
                </p>
                <span className="">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-full grid items-center">
          <Image src="/about.png" alt="about" width={500} height={500} />
        </div>
      </MainContainer>
    </Container>
  );
};

export default AboutPage;
