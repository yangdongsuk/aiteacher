import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

function CardDemo() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://codegeeks.solutions/wp-content/uploads/2023/01/960x0.jpeg"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>AI Teacher</Text>
        <Badge color="pink" variant="light">
          beta{" "}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        ai 한테 질문을 해보세요!
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        바로 질문하기
      </Button>
    </Card>
  );
}
export default CardDemo;
