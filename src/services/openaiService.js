import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const getChatResponse = async (userInput) => {
  const templatePrompt = `
    You are a D&D monster generator. Create a new monster with the following attributes in JSON format:
    {
      "name": "Monster Name",
      "description": "Description of the monster",
      "image": "URL to an image of the monster",
      "hp": "Hit Points",
      "ac": "Armor Class",
      "strength": "Strength score",
      "dexterity": "Dexterity score",
      "constitution": "Constitution score",
      "intelligence": "Intelligence score",
      "wisdom": "Wisdom score",
      "charisma": "Charisma score"
    }
    Based on the following input:
  `;

  const completePrompt = `${templatePrompt}\n${userInput}`;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o',
        messages: [{ role: 'user', content: completePrompt }],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const messageContent = response.data.choices[0].message.content;

    // Separate JSON part from the response
    const jsonStartIndex = messageContent.indexOf('{');
    const jsonEndIndex = messageContent.lastIndexOf('}') + 1;

    const jsonString = messageContent.slice(jsonStartIndex, jsonEndIndex);
    const extraText = messageContent.slice(0, jsonStartIndex) + messageContent.slice(jsonEndIndex);

    const parsedJSON = JSON.parse(jsonString);

    return { monster: parsedJSON, extraText };
  } catch (error) {
    console.error('Error fetching response:', error);
    throw error;
  }
};
