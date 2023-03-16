import { Flex } from "@mantine/core";
import InputCard from "./InputCard.js";

function ProblemInput({
  codeValue,
  setCodeValue,
  errorValue,
  setErrorValue,
  outputValue,
  setOutputValue,
  typeValue,
}) {
  const inputType = {
    codeInput: {
      value: codeValue,
      setValue: setCodeValue,
      img: "https://resources.jetbrains.com/help/img/idea/2022.3/py_code_insight_highlight.png",
      title: "코드 입력",
      badge: "Beta",
      content: "작성한 코드 전부를 넣어주세요",
      placeholder: "코드 복붙",
    },
    errorInput: {
      value: errorValue,
      setValue: setErrorValue,
      img: "https://global.discourse-cdn.com/codecademy/original/5X/7/2/1/c/721c4df8b38b74c8922908398e65f7eb5eafaa90.png",
      title: "에러 입력",
      badge: "Beta",
      content: "에러 전부를 넣어주세요",
      placeholder: "에러 복붙",
    },
    outputInput: {
      value: outputValue,
      setValue: setOutputValue,
      img: "https://routingnull.files.wordpress.com/2020/01/pyprog1.png",
      title: "출력창 입력",
      badge: "Beta",
      content: "출력창 전부를 넣어주세요",
      placeholder: "출력 복붙",
    },
  };
  return (
    <>
      <Flex
        gap="md"
        justify="center"
        // align="center"
        direction="row"
        wrap="wrap"
      >
        {/* <CodeInputCard codeValue={codeValue} setCodeValue={setCodeValue} /> */}
        <InputCard data={inputType.codeInput} />
        {typeValue === "syntaxerror" ? (
          <InputCard data={inputType.errorInput} />
        ) : (
          <InputCard data={inputType.outputInput} />
        )}
      </Flex>
    </>
  );
}

export default ProblemInput;
