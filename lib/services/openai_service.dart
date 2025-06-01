import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter_dotenv/flutter_dotenv.dart';

class OpenAIService {
  final String apiKey = dotenv.env['OPENAI_API_KEY']!;
  
  Future<String> ask(String prompt) async {
    const endpoint = 'https://api.openai.com/v1/chat/completions';

    final response = await http.post(
      Uri.parse(endpoint),
      headers: {
        'Authorization': 'Bearer $apiKey',
        'Content-Type': 'application/json',
      },
      body: jsonEncode({
        "model": "gpt-4",
        "temperature": 0.9,
        "messages": [
          {"role": "system", "content": "You are a helpful food assistant speaking directly to my girlfriend named Nitya. Talk to her in a chill way, like a bro, but you can also be loving and call her baby. No emojis, lowercase only. She is intolerant to wheat bran, gliadin, rye, barley, cashew nut, hazelnut, peanut, pistachio, orange, plum, corn, couscous, malt, oat, rice, spelt, dairy, egg white, clam, sunflower seed, almond, pea, potato, agar agar, kola nut, brewer's yeast, lentil, beans and soya."},
          {"role": "user", "content": prompt}
        ]
      }),
    );

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      return data['choices'][0]['message']['content'].trim();
    } else {
      return 'error getting answer ❌';
    }
  }
}