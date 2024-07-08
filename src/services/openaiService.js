import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

export const getChatResponse = async (message) => {
  const url = 'https://api.openai.com/v1/chat/completions';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  const data = {
    model: "gpt-4o",
    messages: [{ role: "user", content: message }],
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching response:', error);
    throw error;
  }
};
