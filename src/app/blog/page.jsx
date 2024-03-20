import React from "react";
import Container from "@/components/Container";
import MainContainer from "@/components/MainContainer";
import Card from "@/components/Card";

const blogs = [
  {
    title: "Title 1",
    desc: "Desc 1",
    date: "Mar 20 2024",
    img: "https://images.pexels.com/photos/13359667/pexels-photo-13359667.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Title 2",
    desc: "Desc 2",
    date: "Mar 20 2024",
    img: "https://images.pexels.com/photos/13359667/pexels-photo-13359667.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Title 3",
    desc: "Desc 3",
    date: "Mar 20 2024",
    img: "https://images.pexels.com/photos/13359667/pexels-photo-13359667.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Title 4",
    desc: "Desc 4",
    date: "Mar 20 2024",
    img: "https://images.pexels.com/photos/13359667/pexels-photo-13359667.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const BlogPage = () => {
  return (
    <Container className="h-[80vh]">
      <MainContainer className="w-[1220px] h-full grid grid-cols-3 gap-6">
        {blogs.map((item, i) => (
          <Card
            title={item.title}
            desc={item.desc}
            date={item.date}
            img={item.img}
            key={i}
          />
        ))}
      </MainContainer>
    </Container>
  );
};

export default BlogPage;
