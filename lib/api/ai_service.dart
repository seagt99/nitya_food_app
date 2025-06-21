import 'dart:convert';
import 'package:http/http.dart' as http;

Future<String> askAI(String userPrompt) async {
  final response = await http.post(
    Uri.parse('https://nitya-app-deploy.vercel.app/api/chat'),
    headers: {'Content-Type': 'application/json'},
    body: jsonEncode({'prompt': userPrompt}),
  );

  if (response.statusCode == 200) {
    final data = jsonDecode(response.body);
    return data['choices'][0]['message']['content'].trim();
  } else {
    print('AI error: ${response.body}');
    throw Exception('AI request failed');
  }
}
