import React from "react";
import Container from "./Container";
import MainContainer from "./MainContainer";

const Footer = () => {
  return (
    <Container className="h-[10vh] pb-4">
      <MainContainer className="w-[1220px] h-full">
        <footer className="w-full h-full flex items-end justify-between">
          <p className="font-semibold">cj@dev</p>
          <p>
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </footer>
      </MainContainer>
    </Container>
  );
};

export default Footer;
