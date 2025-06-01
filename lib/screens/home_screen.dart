import 'package:flutter/material.dart';
import '../services/openai_service.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const SizedBox(height: 20),

            // Logo
            Center(
              child: Image.asset(
                'assets/heart-logo.png',
                height: 100,
              ),
            ),

            const SizedBox(height: 20),

            // Greeting
            const Text(
              'hi my love ♡',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.w500,
                color: Colors.black,
              ),
              textAlign: TextAlign.center,
            ),

            const SizedBox(height: 40),

            // Buttons
            HomeButton(label: 'hungry'),
            const SizedBox(height: 16),
            HomeButton(label: 'thirsty'),
            const SizedBox(height: 16),
            HomeButton(label: 'gym bro'),
          ],
        ),
      ),
    );
  }
}

class HomeButton extends StatelessWidget {
  final String label;

  const HomeButton({super.key, required this.label});

  String _getPrompt(String label) {
    const profile =
        'She is intolerant to wheat bran, gliadin, rye, barley, cashew nut, hazelnut, peanut, pistachio, orange, plum, corn, couscous, malt, oat, rice, spelt, dairy, egg white, clam, sunflower seed, almond, pea, potato, agar agar, kola nut, brewers yeast, lentil, beans and soya.';

    switch (label) {
      case 'hungry':
        return 'suggest an indian snack or meal for my girlfriend. $profile keep it comforting and safe.';
      case 'thirsty':
        return 'suggest a refreshing, safe drink or beverage for my girlfriend. $profile keep it light.';
      case 'gym bro':
        return 'suggest a high-protein indian gym meal or snack she can eat. $profile avoid her intolerances. be chill and helpful.';
      default:
        return 'suggest something she can eat. $profile';
    }
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          foregroundColor: Colors.white,
          backgroundColor: Colors.black,
          padding: const EdgeInsets.symmetric(vertical: 16),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
        ),
        onPressed: () async {
          final prompt = _getPrompt(label);
          final openAI = OpenAIService();

          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('thinking...')),
          );

          var response = await openAI.ask(prompt);

            // clean up weird characters
            response = response
            .replaceAll('â', '–')
            .replaceAll('â€™', "'")
            .replaceAll('â€œ', '"')
            .replaceAll('â€', '"');


          showDialog(
            context: context,
            builder: (_) => AlertDialog(
              title: const Text('here you go ♡'),
              content: Text(response),
              actions: [
                TextButton(
                  onPressed: () => Navigator.pop(context),
                  child: const Text('close'),
                ),
              ],
            ),
          );
        },
        child: Text(
          label,
          style: const TextStyle(fontSize: 18),
        ),
      ),
    );
  }
}
