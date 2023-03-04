import { useState } from "react";
import { NativeSelect } from "@mantine/core";

function QuestionSelecter({
  weekValue,
  setWeekValue,
  questionValue,
  setQuestionValue,
}) {
  console.log("mystate", weekValue);

  const handleSelect = (event) => {
    const value = event.target.value;
    setWeekValue(value);
    setQuestionValue(""); // Reset the second select value when the first select value changes
    console.log(value);
  };

  const handleSelect2 = (event) => {
    const value = event.target.value;
    setQuestionValue(value);
    console.log(value);
  };

  return (
    <>
      <NativeSelect
        data={["", "1주차", "2주차", "3주차", "4주차"]}
        label="몇주차 문제인가요?"
        description="This is anonymous"
        value={weekValue}
        onChange={handleSelect}
      />
      <NativeSelect
        disabled={weekValue === "" || weekValue === "주차를 선택하세요"}
        data={[
          "",
          "1번 실습 문제",
          "1번 과제 문제",
          "2번 실습 문제",
          "2번 과제 문제",
        ]}
        label="어떤 문제인가요?"
        description="This is anonymous"
        value={questionValue}
        onChange={handleSelect2}
      />
    </>
  );
}

export default QuestionSelecter;
