import { Configuration, OpenAIApi } from "https://cdn.skypack.dev/openai";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";
import { db } from "../fbase";

const getOpenaiApikey = async () => {
  const snapshot = await getDocs(collection(db, "openaiapikey"));
  const apikeys = snapshot.docs.map((doc) => doc.data().apikey);
  return apikeys[0];
};

const fetchCompletion = async (content, temperature) => {
  const apiKey = await getOpenaiApikey();
  // console.log(apiKey);
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
    temperature: temperature,
  });

  // setCompletionText(completion.data.choices[0].message.content);
  // console.log(completion.data.choices[0].message.content);
  // // console.log(completionText);
  return completion.data.choices[0].message.content;
};

export default fetchCompletion;
