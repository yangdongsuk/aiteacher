import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function ErrorCard({ data }) {
  function handleClick() {
    data.setTypeValue(data.errorType);
    console.log(data.typeValue);
  }
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      w={300}
      h={350}
      withBorder
      opacity={
        data.typeValue == data.errorType || data.typeValue == "" ? 1 : 0.5
      }
      style={
        data.typeValue == data.errorType
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
        <Image src={data.img} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{data.title}</Text>
        <Badge color="pink" variant="light">
          {data.badge}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {data.context}
      </Text>

      <Button
        onClick={handleClick}
        variant="light"
        color={data.typeValue == data.errorType ? "red" : "blue"}
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
export default ErrorCard;
