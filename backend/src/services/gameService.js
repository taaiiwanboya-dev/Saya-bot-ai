const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateGameWithAI = async (description, difficulty = 'medium') => {
  try {
    const prompt = `Create a complete single HTML file game:
Description: ${description}
Difficulty: ${difficulty}

Requirements: Complete HTML with CSS/JS inline, attractive styling, functional game logic, responsive design, title, score system, game over condition, restart button, and instructions.

Return ONLY the HTML code from <!DOCTYPE html> to </html>`;

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 4000
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    throw new Error(`AI Generation failed: ${error.message}`);
  }
};

module.exports = { generateGameWithAI };
