import React from "react";
import Container from "@/components/Container";
import MainContainer from "@/components/MainContainer";
import Image from "next/image";

const ContactPage = () => {
  return (
    <Container className="h-[80vh]">
      <MainContainer className="w-[1220px] h-full grid grid-cols-2">
        <div className="h-full grid items-center">
          <Image src="/contact.png" alt="contact" width={500} height={500} />
        </div>
        <div className="w-full h-full">
          <form
            action=""
            className="w-full h-full flex flex-col justify-center gap-4"
          >
            <input
              type="text"
              placeholder="Name and Surname"
              className="p-4 bg-blue-950 w-full rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-4 bg-blue-950 w-full rounded-md"
            />
            <input
              type="text"
              placeholder="Phone Number (Optional)"
              className="p-4 bg-blue-950 w-full rounded-md"
            />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="p-4 bg-blue-950 h-60 w-full rounded-md"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 bg-blue-500 hover:bg-blue-700 transition-colors rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      </MainContainer>
    </Container>
  );
};

export default ContactPage;
