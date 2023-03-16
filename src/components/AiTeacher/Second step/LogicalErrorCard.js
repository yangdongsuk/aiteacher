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
      w={300}
      h={350}
      withBorder
      opacity={typeValue == "syntaxerror" ? 0.5 : 1}
      style={
        typeValue == "logicalerror"
          ? {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "red",
              display: "flex",
              flexDirection: "column",
            }
          : { display: "flex", flexDirection: "column" }
      }
    >
      <Card.Section>
        <Image
          src="https://cdn.straightnews.co.kr/news/photo/201901/40568_17290_2144.jpg"
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
        style={{ marginTop: "auto" }}
      >
        선택하기
      </Button>
    </Card>
  );
}
export default LogicalErrorCard;
