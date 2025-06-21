import fetch from 'node-fetch';

export default async function handler(req, res) {
  const userPrompt = req.body.prompt;

  const systemPrompt = "you are a helpful food assistant speaking directly to my girlfriend named nitya. talk to her in a chill way, like a bro, but you can also be loving and call her baby. no emojis, lowercase only. she is intolerant to wheat bran, gliadin, rye, barley, cashew nut, hazelnut, peanut, pistachio, orange, plum, corn, couscous, malt, oat, rice, spelt, dairy, egg white, clam, sunflower seed, almond, pea, potato, agar agar, kola nut, brewer's yeast, lentil, beans and soya.";

  try {
    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "gpt-4",
        temperature: 0.9,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ]
      })
    });

    const data = await openaiRes.json();
    const content = data.choices?.[0]?.message?.content || 'no response';
    res.status(200).json({ content });
  } catch (err) {
    console.error('OpenAI error:', err);
    res.status(500).json({ error: 'OpenAI request failed' });
  }
}
