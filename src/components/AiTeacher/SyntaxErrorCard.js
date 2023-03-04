import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function SyntaxErrorCard({ typeValue, setTypeValue }) {
  function handleClick() {
    setTypeValue("syntaxerror");
    console.log(typeValue);
  }
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      //   style={{ backgroundColor: "#E5EDFA" }}
      opacity={typeValue == "logicalerror" ? 0.5 : 1}
      style={
        typeValue == "syntaxerror"
          ? { borderWidth: "1px", borderStyle: "solid", borderColor: "red" }
          : null
      }
    >
      <Card.Section>
        <Image
          src="https://global.discourse-cdn.com/codecademy/original/5X/7/2/1/c/721c4df8b38b74c8922908398e65f7eb5eafaa90.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>문법 오류</Text>
        <Badge color="pink" variant="light">
          beta
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        빨간색 글자들이 마구마구 생기고 실행이 안되어요 ㅠㅠ
      </Text>

      <Button
        onClick={handleClick}
        variant="light"
        color={typeValue == "syntaxerror" ? "red" : "blue"}
        fullWidth
        mt="md"
        radius="md"
      >
        선택하기
      </Button>
    </Card>
  );
}
export default SyntaxErrorCard;
