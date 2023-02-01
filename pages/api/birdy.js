import { openai } from "../../utils/openai"

export default async function birdy(req,res){   
  try {
    let prompt = `Pretent you are me. Generate a tweet about the matter in the prompt. Include hashtags and emojis when needed.
    Person: ${req.body}
    You:`
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 50,
      temperature: 0,
    });
    let message = response.data?.choices[0]?.text 
    res.status(200).json(message)
  } catch (error) {
    res.status(error.response.status).send(error.response.data)
  }
}