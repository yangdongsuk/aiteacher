import { useState, useEffect } from "react";
import fetchCompletion from "../../models/getAnswerAi";
import order from "../../questions/order.js";
import questionNumber3 from "../../questions/week3.js";

const TestModule = () => {
  const [completionText, setCompletionText] = useState("");
  const [wrongPoint, setWrongPoint] = useState("");
  const [hint, setHint] = useState("");
  const [relationConcept, setRelationConcept] = useState("");

  const studentCode = `
num_list1=[]
num_list2=[]
num_list3=[]

for i in range(1,51):
    if 
        num_list1.append(i)
    if 
        num_list2.append(i)
    if 
        num_list3.append(i) 
print("50까지의 수에서 짝수이면서 3의 배수는 : ₩n",num_list1)
print("50까지의 수에서 3의 배수이거나 7의 배수는 : ₩n",num_list2)
print("50까지의 수에서 5의 배수가 아닌 수는 : ₩n",num_list3)
`;
  const errorMessage = `
  > /Library/Frameworks/Python.framework/Versions/3.6/bin/python3.6 /Users/yangdongsuk/컴사코/test3.py
  File "/Users/yangdongsuk/컴사코/test3.py", line 6
    if 
      ^
SyntaxError: invalid syntax`;
  const content = `${order} necessaryInformationData={
    question: ${questionNumber3.question},
    answerCode: ${questionNumber3.answerCode},
    studentCode: ${studentCode},
    answerOutput: ${questionNumber3.answerOutput},
    studentOutput: "",
    errorMessage: ${errorMessage}
  }`;
  console.log(content);

  const getResponse = async () => {
    const res = await fetchCompletion(content);
    console.log(res);

    //res is json object so trsansform to object
    const resObj = JSON.parse(res);
    console.log(resObj);
    console.log(typeof resObj);
    setCompletionText(res);
    setWrongPoint(resObj.wrongPoint);
    setHint(resObj.hint);
    setRelationConcept(resObj.relationConcept);
  };

  return (
    <div>
      <h1>Test Module</h1>
      {completionText == "" ? (
        <p>Waiting for response...</p>
      ) : (
        <>
          <p>Wrong Point: {wrongPoint}</p>
          <p>Hint: {hint}</p>
          <p>Relation Concept: {relationConcept}</p>
        </>
      )}
      <button onClick={getResponse}>Log Completion</button>
    </div>
  );
};

export default TestModule;
