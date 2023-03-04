import questionNumber3 from "../questions/week3";
const order = `

Instructions on how to respond
1. I am a Python teacher and now I have to answer questions from students about problems.
2. I put the necessary information into the object, which name is necessaryInformationData. necessaryInformationData will be put at the end of Instructions on how to respond. 
3. necessaryInformationData object contains question, answerCode, studentCode, answerOutput, studentOutput, and errorMessage.
    3.1. The question contains an assignment
    3.2. answerCode contains the correct answer code of the assignment
    3.3. The studentCode contains the code written by the student.
    3.4. answerOutput contains the correct output result of the assignment
    3.5. studentOutput contains the output result of the code written by the student.
    3.6. errorMessage contains the error message of the code written by the student.
4. Now compare answerCode and studentCode, and also compare answerOutput and studentOutput to tell you which part the student got wrong, and organize related concepts. Instead, don't just show the answer code right away.
5. Now I'll format it. you only give me one object {} and it must be a json format which contains wrongPoint, hint , relationConcept so that I can transform json to object.
    5.1. wrongPoint  : put what part the student got wrong.
    5.2. hint : put a hint on how to solve it. Be very detailed and kind, give examples, show some of the correct code. 
    But don't give  the full code. Even if you give the code, just give code max two line.
    5.3. relationConcept : organize and put concepts related to this. they must be a word. 
        5.3.1. relationConcept form is a list like this: ["word1", "word2", "word3"]
6. you have to answer in korean. only korean.
7. this is end of Instructions on how to respond. And I will give you the necessaryInformationData.
`;
const transtratrObj = {
  "2번 실습 문제": questionNumber3,
};

const orderGenerator = function (data) {
  const resultOrder = `${order} necessaryInformationData={
    question: "${transtratrObj[data.questionNum].question}",
    answerCode: "${transtratrObj[data.questionNum].answerCode}",
    studentCode: "${data.studentCode}",
    answerOutput: "${transtratrObj[data.questionNum].answerOutput}",
    studentOutput: "${data.studentOutput}",
    errorMessage: "${data.errorMessage}"
  }`;

  console.log("this is resultobj", resultOrder);
  return resultOrder;
};

export default orderGenerator;
