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

function CodeInputCard({ codeValue, setCodeValue }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://resources.jetbrains.com/help/img/idea/2022.3/py_code_insight_highlight.png"
          height={160}
          width={300}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>코드 입력</Text>
        <Badge color="pink" variant="light">
          BETA
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        작성한 코드 전부를 넣어주세요{" "}
      </Text>

      <Textarea
        placeholder="코드 복붙"
        value={codeValue}
        autosize
        onChange={(event) => {
          setCodeValue(event.currentTarget.value);
          console.log(codeValue);
        }}
      />
    </Card>
  );
}
export default CodeInputCard;
