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

function ErrorInputCard({ errorValue, setErrorValue }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://global.discourse-cdn.com/codecademy/original/5X/7/2/1/c/721c4df8b38b74c8922908398e65f7eb5eafaa90.png"
          height={160}
          width={300}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>에러 입력</Text>
        <Badge color="pink" variant="light">
          BETA
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        에러 전부를 넣어주세요
      </Text>

      <Textarea
        placeholder="에러 복붙"
        value={errorValue}
        autosize
        onChange={(event) => {
          setErrorValue(event.currentTarget.value);
          console.log(errorValue);
        }}
      />
    </Card>
  );
}
export default ErrorInputCard;
