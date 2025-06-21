import 'package:flutter/material.dart';
import '../api/ai_service.dart';

class SearchScreen extends StatefulWidget {
  const SearchScreen({super.key});

  @override
  State<SearchScreen> createState() => _SearchScreenState();
}

class _SearchScreenState extends State<SearchScreen> {
  final TextEditingController _controller = TextEditingController();
  String _aiResponse = '';
  bool _loading = false;

  Future<void> _handleSearch() async {
    setState(() {
      _loading = true;
      _aiResponse = '';
    });

    try {
      final result = await askAI(_controller.text);
      setState(() {
        _aiResponse = result;
      });
    } catch (e) {
      setState(() {
        _aiResponse = 'Error: please try again.';
      });
    } finally {
      setState(() {
        _loading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        children: [
          TextField(
            controller: _controller,
            decoration: const InputDecoration(
              labelText: 'Ask the AI...',
              border: OutlineInputBorder(),
            ),
          ),
          const SizedBox(height: 12),
          ElevatedButton(
            onPressed: _loading ? null : _handleSearch,
            child: Text(_loading ? 'Thinking...' : 'Ask AI'),
          ),
          const SizedBox(height: 20),
          Expanded(
            child: SingleChildScrollView(
              child: Text(
                _aiResponse,
                style: const TextStyle(fontSize: 16),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
