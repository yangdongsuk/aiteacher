import { useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Stepper, Button, Group, Flex } from "@mantine/core";
import QuestionSelecter from "./First step/QuestionSelecter.js";
import TypeSelecter from "./Second step/TypeSelecter";
import ProblemInput from "./Final step/ProblemInput";

function QuestionStepper() {
  let navigate = useNavigate();

  const [active, setActive] = useState(0);
  //question selecter에 필요한 state
  const [weekValue, setWeekValue] = useState("");
  const [questionValue, setQuestionValue] = useState("");
  //type selecter에 필요한 state
  const [typeValue, setTypeValue] = useState("");
  //problem input에 필요한 state
  const [codeValue, setCodeValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  let isQuestionSelected =
    weekValue !== "" && questionValue !== "" && active === 0;
  let isTypeSelected = typeValue !== "" && active === 1;
  let isProblemInputed =
    codeValue !== "" &&
    ((typeValue === "syntaxerror" && errorValue !== "") ||
      (typeValue === "logicalerror" && outputValue !== ""));

  const nextStep = () => {
    setActive((current) => (current < 3 ? current + 1 : current));
  };
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const submitResult = () => {
    let data = {
      week: weekValue,
      questionNum: questionValue,
      studentCode: codeValue,
      studentOutput: outputValue,
      errorMessage: errorValue,
      problemType: typeValue,
    };
    navigate(`/result`, { state: { data } });
  };

  return (
    <>
      <div style={{ height: "50px" }}> </div>
      <Flex
        mih={50}
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="First step" description="문제 선택하기">
            질문이 있는 문제를 선택해 주세요!
            <QuestionSelecter
              weekValue={weekValue}
              setWeekValue={setWeekValue}
              questionValue={questionValue}
              setQuestionValue={setQuestionValue}
            />
          </Stepper.Step>
          <Stepper.Step label="Second step" description="발생 문제 유형">
            어떤 문제가 발생했는지 알려주세요!
            <TypeSelecter typeValue={typeValue} setTypeValue={setTypeValue} />
          </Stepper.Step>
          <Stepper.Step label="Final step" description="정보 입력">
            문제를 해결하기 위한 코드들을 입력해주세요!
            <ProblemInput
              codeValue={codeValue}
              setCodeValue={setCodeValue}
              errorValue={errorValue}
              setErrorValue={setErrorValue}
              outputValue={outputValue}
              setOutputValue={setOutputValue}
              typeValue={typeValue}
            />
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          {isQuestionSelected || isTypeSelected ? (
            <Button onClick={nextStep}>Next step</Button>
          ) : null}
          {isProblemInputed ? (
            <Button onClick={submitResult}>인공지능한테 물어보기</Button>
          ) : null}
        </Group>
      </Flex>
    </>
  );
}

export default QuestionStepper;
