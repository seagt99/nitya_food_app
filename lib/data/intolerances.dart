import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;

class IntoleranceLoader {
  Future<String> loadIntolerancesSummary() async {
    final jsonString = await rootBundle.loadString('assets/intolerances.json');
    final Map<String, dynamic> data = jsonDecode(jsonString);

    final List<String> avoidItems = [];

    data['avoid'].forEach((category, items) {
      for (var item in items) {
        avoidItems.add(item['item'].toLowerCase());
      }
    });

    return avoidItems.join(', ');
  }
}