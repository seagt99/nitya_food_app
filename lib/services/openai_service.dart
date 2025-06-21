import 'dart:convert';
import 'package:http/http.dart' as http;

class OpenAIService {
  /// Sends a prompt to your deployed serverless backend on Vercel.
  /// Backend uses OpenAI and returns a string.
  Future<String> ask(String prompt) async {
    const endpoint = 'https://nitya-app-deploy.vercel.app/api/chat';

    try {
      final response = await http.post(
        Uri.parse(endpoint),
        headers: {'Content-Type': 'application/json'},
        body: jsonEncode({'prompt': prompt}),
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        return data['content']?.toString().trim() ?? 'no response';
      } else {
        print('API error: ${response.statusCode} - ${response.body}');
        return 'error getting answer ❌';
      }
    } catch (e) {
      print('Connection error: $e');
      return 'server unreachable 💔';
    }
  }
}

}