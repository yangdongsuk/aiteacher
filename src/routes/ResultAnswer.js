import { useState, useEffect } from "react";
import fetchCompletion from "../models/getAnswerAi";
import order from "../questions/order.js";
import questionNumber3 from "../questions/week3.js";
import { useLocation } from "react-router-dom";
import orderGenerator from "../models/orderGenerator.js";
import { Button, Flex, LoadingOverlay } from "@mantine/core"; // import LoadingOverlay
import CardDemo from "../components/Home/Card";
import WrongPointCard from "../components/Result/WrongPointCard";
import HintCard from "../components/Result/HintCard";
import { Badge } from "@mantine/core";

const ResultAnswer = () => {
  const location = useLocation();
  const {
    state: { data },
  } = location;

  const [completionText, setCompletionText] = useState("");
  const [wrongPoint, setWrongPoint] = useState("");
  const [hint, setHint] = useState("");
  const [relationConcept, setRelationConcept] = useState("");
  let resultOrder = orderGenerator(data);

  const getResponse = async () => {
    const res = await fetchCompletion(resultOrder);
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

  useEffect(() => {
    getResponse();
    console.log("unmounting...");
  }, []);

  return (
    <Flex
      gap="md"
      justify="center"
      align="center"
      direction="column"
      wrap="wrap"
    >
      <h1>Python AI Teacher</h1>
      {completionText == "" ? (
        <>
          <h4>AI가 답변을 준비중입니다.</h4>
          <LoadingOverlay
            loaderProps={{ size: "sm", color: "pink", variant: "bars" }}
            overlayOpacity={0.3}
            overlayColor="#c5c5c5"
            visible
          />
        </>
      ) : (
        <>
          <Flex
            gap="md"
            justify="center"
            // align="center"
            direction="row"
            wrap="wrap"
          >
            {/* <p>Wrong Point: {wrongPoint}</p>
            <p>Hint: {hint}</p> */}
            <WrongPointCard wrongPoint={wrongPoint} />
            <HintCard hint={hint} />
          </Flex>
          {/* <p>Relation Concept: {relationConcept}</p> */}
          <Badge color="green" size="lg" radius="xs" variant="filled">
            관련된 개념
          </Badge>

          {
            <Flex
              gap="md"
              justify="center"
              // align="center"
              direction="row"
              wrap="wrap"
            >
              {relationConcept.map((concept) => {
                console.log(concept);
                return <Badge key={concept}>{concept}</Badge>;
              })}
            </Flex>
          }
          <Button onClick={getResponse}>다른 답변으로 말해줘</Button>
        </>
      )}
    </Flex>
  );
};

export default ResultAnswer;
