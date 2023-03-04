import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Textarea,
} from "@mantine/core";
import { useState } from "react";

function OutputInputCard({ OutputValue, setOutputValue }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://routingnull.files.wordpress.com/2020/01/pyprog1.png"
          height={160}
          width={300}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>출력창 입력</Text>
        <Badge color="pink" variant="light">
          BETA
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        출력창 전부를 넣어주세요
      </Text>

      <Textarea
        placeholder="출력창 복붙"
        value={OutputValue}
        autosize
        onChange={(event) => {
          setOutputValue(event.currentTarget.value);
          console.log(OutputValue);
        }}
      />
    </Card>
  );
}
export default OutputInputCard;
