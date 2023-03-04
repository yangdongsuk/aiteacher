import {
  Card,
  Group,
  Text,
  Menu,
  ActionIcon,
  Image,
  SimpleGrid,
  rem,
} from "@mantine/core";
import { IconDots, IconEye, IconFileZip, IconTrash } from "@tabler/icons-react";

function HintCard({ hint }) {
  const lines = hint.split("\n");

  return (
    <Card withBorder shadow="sm" radius="md" style={{ width: "300px" }}>
      <Card.Section withBorder inheritPadding py="xs">
        <Group position="apart">
          <Text weight={500}>힌트</Text>
        </Group>
      </Card.Section>

      <div>
        {lines.map((line, index) => (
          <Text key={index} weight={500} color="dimmed">
            {line}
          </Text>
        ))}
      </div>
    </Card>
  );
}

export default HintCard;
