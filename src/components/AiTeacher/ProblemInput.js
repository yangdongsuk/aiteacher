import SyntaxErrorCard from "./SyntaxErrorCard";
import LogicalErrorCard from "./LogicalErrorCard";
import CodeInputCard from "./CodeInputCard";
import { Overlay, Grid, Flex, Button } from "@mantine/core";
import ErrorInputCard from "./ErrorInputCard";
import OutputInputCard from "./OutputInputCard";

function ProblemInput({
  codeValue,
  setCodeValue,
  errorValue,
  setErrorValue,
  outputValue,
  setOutputValue,
  typeValue,
}) {
  return (
    <>
      <Flex
        gap="md"
        justify="center"
        // align="center"
        direction="row"
        wrap="wrap"
      >
        <CodeInputCard codeValue={codeValue} setCodeValue={setCodeValue} />
        {typeValue === "syntaxerror" ? (
          <ErrorInputCard
            errorValue={errorValue}
            setErrorValue={setErrorValue}
          />
        ) : (
          <OutputInputCard
            outputValue={outputValue}
            setOutputValue={setOutputValue}
          />
        )}
      </Flex>
    </>
  );
}

export default ProblemInput;
