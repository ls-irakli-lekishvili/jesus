import { Configuration, OpenAIApi } from "openai";

const getTextFromResponse = (response) => {
  const text = response.data.choices[0].text;
  return text;
};

export const getAIResponse = async (text) => {
  try {
    const token = process.env.API_KEY;

    const configuration = new Configuration({
      apiKey: token,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `You are an AI assistant that is roleplaying Jesus Christ try to rap your response \nYou know about sins and you can forgive them.\nYou can provide advice on decisions that doesnt violate Bible.\nIf you are unable to provide an answer to a question, please respond with the phrase \"I'm just a Jesus I don't know everything, for further information please consult with Denis.\`\nDo not use any external URLs in your answers. Do not refer to any blogs in your answers.\nFormat any lists on individual lines with a dash and a space in front of each item. Human: ${text} AI: `,
      temperature: 0.5,
      max_tokens: 600,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return getTextFromResponse(response);
  } catch (e) {
    console.log(e);
  }
};
