import { Flex } from "@mantine/core";
import ErrorCard from "./ErrorCard";

function TypeSelector({ typeValue, setTypeValue }) {
  const errorType = {
    syntaxerror: {
      errorType: "syntaxerror",
      title: "문법 오류",
      img: "https://global.discourse-cdn.com/codecademy/original/5X/7/2/1/c/721c4df8b38b74c8922908398e65f7eb5eafaa90.png",
      context: "빨간색 글자들이 마구마구 생기고 실행이 안되어요 ㅠㅠ",
      badge: "Beta",
      typeValue: typeValue,
      setTypeValue: setTypeValue,
    },
    logicalerror: {
      errorType: "logicalerror",
      title: "논리 오류",
      img: "https://cdn.straightnews.co.kr/news/photo/201901/40568_17290_2144.jpg",
      context: "코드는 실행되는데 결과가 이상해요 ㅠㅠ",
      badge: "Beta",

      typeValue: typeValue,
      setTypeValue: setTypeValue,
    },
  };
  return (
    <>
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <ErrorCard data={errorType.syntaxerror} />
        <ErrorCard data={errorType.logicalerror} />
      </Flex>
    </>
  );
}

export default TypeSelector;
