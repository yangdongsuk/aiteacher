import { Configuration, OpenAIApi } from "https://cdn.skypack.dev/openai";

const fetchCompletion = async (content) => {
  const testContent = "you are a cat";
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: content,
      },
    ],
    temperature: 0,
  });

  // setCompletionText(completion.data.choices[0].message.content);
  // console.log(completion.data.choices[0].message.content);
  // // console.log(completionText);
  return completion.data.choices[0].message.content;
};

export default fetchCompletion;
