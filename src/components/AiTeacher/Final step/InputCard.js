import { Card, Image, Text, Badge, Group, Textarea } from "@mantine/core";

function InputCard({ data }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={data.img} height={160} width={300} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{data.title}</Text>
        <Badge color="pink" variant="light">
          {data.badge}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {data.content}
      </Text>

      <Textarea
        placeholder={data.placeholder}
        value={data.value}
        autosize
        onChange={(event) => {
          data.setValue(event.currentTarget.value);
          console.log(data.setValue);
        }}
      />
    </Card>
  );
}
export default InputCard;
