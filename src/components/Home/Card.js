import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function HomeCard({ data }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`data.link`);
  }

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      w={250}
      h={350}
      style={{ display: "flex", flexDirection: "column" }}
      withBorder
    >
      <Card.Section>
        <Image src={data.img} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{data.title}</Text>
        <Badge color={data.badgeColor} variant="light">
          {data.badgeContent}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {data.description}
      </Text>

      <Button
        onClick={handleClick}
        disabled={data.buttonDisabled}
        variant="light"
        color="blue"
        fullWidth
        radius="md"
        style={{ marginTop: "auto" }}
      >
        {data.buttonContent}
      </Button>
    </Card>
  );
}
export default HomeCard;
