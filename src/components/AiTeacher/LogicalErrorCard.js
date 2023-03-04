import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function LogicalErrorCard({ typeValue, setTypeValue }) {
  function handleClick() {
    setTypeValue("logicalerror");
    console.log(typeValue);
  }
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      opacity={typeValue == "syntaxerror" ? 0.5 : 1}
      style={
        typeValue == "logicalerror"
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
        <Text weight={500}>논리 오류</Text>
        <Badge color="pink" variant="light">
          BETA
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        작동은 잘 되는데 결과가 원하는대로 안나와요 ㅠㅠ
      </Text>

      <Button
        onClick={handleClick}
        variant="light"
        color={typeValue == "logicalerror" ? "red" : "blue"}
        fullWidth
        mt="md"
        radius="md"
      >
        선택하기
      </Button>
    </Card>
  );
}
export default LogicalErrorCard;
