import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const getChatResponse = async (userInput) => {
  const templatePrompt = `
    You are a D&D monster generator. Create a new monster with the following required [R] and optional [O] attributes in JSON format:
    {
      "name": "Monster Name [R]",
      "desc_long": "Description of the monster [R]",
      "image": "URL to an image of the monster [R]",
      "desc_short": "Type, species, or race of monster and its alignment [R]",
      "hp": "Hit Points [R]",
      "ac": "Armor Class [R] (and type of armor, if any [O])",
      "speed": "Monster's speed in ft. [R]",
      "str": "Strength score [R]",
      "dex": "Dexterity score [R]",
      "con": "Constitution score [R]",
      "int": "Intelligence score [R]",
      "wis": "Wisdom score [R]",
      "cha": "Charisma score [R]",
      "saves": "Saving throws, if any (leave blank if none) [O]",
      "skills": "Monster's skills and the bonus, if any [O]",
      "res": "Damage resistances, if any [O]",
      "senses": "Passive perception score [O]",
      "lang": "Languages, if any [O]",
      "effects": "Passive abilities or actions taken by the monster, if any [O]",
      "actions": "Active abilities or actions the monster can take on their combat turn and its damage, if any [R]",
      "reactions": "Reactions or responsive abilities, if any [O]"
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
