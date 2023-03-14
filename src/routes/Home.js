import React from "react";
import { Grid, Flex, Button } from "@mantine/core";
import HomeCard from "../components/Home/Card";
import Testmodule from "../components/AiTeacher/test";
import QuestionStepper from "../components/AiTeacher/QuestionStepper";
import MainHeader from "../components/Home/MainHeader";
import fetchCompletion from "../models/getAnswerAi";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../fbase";

// 초기 화면
const Home = ({ isLoggedIn, userObj }) => {
  const navigate = useNavigate();
  const getanswer = async () => {
    const res = await fetchCompletion("longtxt", 0.7);
    console.log(res);
  };
  const homeCardInfo = [
    {
      title: "AI Teacher",
      description: "ai 한테 질문을 해보세요!",
      img: "https://codegeeks.solutions/wp-content/uploads/2023/01/960x0.jpeg",
      link: "/question",
      buttonDisabled: false,
      buttonContent: "바로 질문하기",
      badgeContent: "Beta",
      badgeColor: "pink",
    },
    {
      title: "AI Chatbot",
      description: "채팅으로 ai한테 질문해보세요!",
      img: "https://botup.com/images/blog/ai-chatbot-app.png?v=1675423563108311211",
      link: "/question",
      buttonDisabled: true,
      buttonContent: "coming soon",
      badgeContent: "Developing",
      badgeColor: "gray",
    },
    {
      title: "Info",
      description: "해당 프로그램에 대한 정보가 궁금하다면?",
      img: "https://www.it.miami.edu/_assets/images/about-umit-new-small.jpg",
      link: "/question",
      buttonDisabled: true,
      buttonContent: "coming soon",
      badgeContent: "Developing",
      badgeColor: "gray",
    },
  ];

  return (
    <>
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        {homeCardInfo.map((data, i) => (
          <HomeCard key={i} data={data} isLoggedIn={isLoggedIn} />
        ))}
      </Flex>

      {/* <Button onClick={getanswer}>git?</Button> */}
    </>
  );
};

export default Home;
