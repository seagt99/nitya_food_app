import 'package:flutter/material.dart';
import '../services/openai_service.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:flutter/gestures.dart';

class SearchScreen extends StatefulWidget {
  const SearchScreen({super.key});

  @override
  State<SearchScreen> createState() => _SearchScreenState();
}

class _SearchScreenState extends State<SearchScreen> {
  final TextEditingController _controller = TextEditingController();
  String _result = '';
  bool _isLoading = false;

  void _onSearchPressed() async {
  final query = _controller.text.trim();
  if (query.isEmpty) return;

  setState(() {
    _isLoading = true;
    _result = '';
  });

  final openAI = OpenAIService();

  final prompt =
      'can you eat "$query"? if not, suggest a similar indian product or dish you can safely enjoy. '
      'if it’s a packaged product, suggest a safe brand available in india with a clickable buy link (real url, no placeholders). '
      'respond sweetly, in lowercase, and keep it short.';

  final answer = await openAI.ask(prompt);

  setState(() {
    _result = answer;
    _isLoading = false;
  });
}

TextSpan _parseResultText(String text) {
  final linkRegex = RegExp(r'(https?:\/\/[^\s]+)', caseSensitive: false);
  final parts = <TextSpan>[];

  text.split('\n').forEach((line) {
    final matches = linkRegex.allMatches(line);
    if (matches.isEmpty) {
      parts.add(TextSpan(text: line + '\n'));
    } else {
      int lastEnd = 0;
      for (final match in matches) {
        final beforeLink = line.substring(lastEnd, match.start);
        final link = match.group(0)!;

        if (beforeLink.isNotEmpty) {
          parts.add(TextSpan(text: beforeLink));
        }

        parts.add(
          TextSpan(
            text: link,
            style: const TextStyle(
              color: Colors.blue,
              decoration: TextDecoration.underline,
            ),
            recognizer: TapGestureRecognizer()
              ..onTap = () async {
                final uri = Uri.parse(link);
                if (await canLaunchUrl(uri)) {
                  await launchUrl(uri, mode: LaunchMode.externalApplication);
                }
              },
          ),
        );

        lastEnd = match.end;
      }

      final afterLastLink = line.substring(lastEnd);
      if (afterLastLink.isNotEmpty) {
        parts.add(TextSpan(text: afterLastLink));
      }

      parts.add(const TextSpan(text: '\n'));
    }
  });

  return TextSpan(children: parts);
}

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'what are you looking for?',
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.w500),
            ),
            const SizedBox(height: 12),

            // Input field
            TextField(
              controller: _controller,
              decoration: InputDecoration(
                hintText: 'type a dish or product...',
                filled: true,
                fillColor: const Color(0xFFFADADD),
                border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(12),
                  borderSide: BorderSide.none,
                ),
              ),
            ),

            const SizedBox(height: 12),

            // Search button
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  foregroundColor: Colors.white,
                  backgroundColor: Colors.black,
                  padding: const EdgeInsets.symmetric(vertical: 14),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(12),
                  ),
                ),
                onPressed: _onSearchPressed,
                child: const Text('check it'),
              ),
            ),

            const SizedBox(height: 24),

            // Result
            if (_isLoading)
              const Center(child: CircularProgressIndicator())
            else if (_result.isNotEmpty)
              SelectableText.rich(
              _parseResultText(_result.replaceAll('â', '–').replaceAll('â€™', "'").replaceAll('â€œ', '"').replaceAll('â€', '"')), // fix em-dash
              style: const TextStyle(fontSize: 16),
              ),
          ],
        ),
      ),
    );
  }
}