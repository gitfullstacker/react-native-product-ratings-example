import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
} from 'react-native';

import {StarRating, Rating, TapRating} from 'react-native-product-ratings';

export default function App() {
  const [starRating, setStarRating] = useState(3.5);
  const [swipeRating, setSwipeRating] = useState(0);
  const [tapRating, setTapRating] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>react-native-product-ratings</Text>

        <View style={styles.demoContainer}>
          <Text style={styles.demoTitle}>Star Rating</Text>
          <Text style={styles.demoSubtitle}>Rating: {starRating}</Text>
          <StarRating
            allowHalfRating
            defaultRating={starRating}
            size={40}
            selectedColor="#FFD700"
            onFinishRating={setStarRating}
          />
          <View style={styles.buttonRow}>
            <Button title="Reset" onPress={() => setStarRating(0)} />
            <Button title="Set to 5" onPress={() => setStarRating(5)} />
          </View>
        </View>

        <View style={styles.demoContainer}>
          <Text style={styles.demoTitle}>Swipe Rating</Text>
          <Text style={styles.demoSubtitle}>Swipe horizontally to rate</Text>
          <Rating
            showRating
            size={45}
            defaultRating={swipeRating}
            selectedColor="#FF8C00"
            onFinishRating={setSwipeRating}
          />
        </View>

        <View style={styles.demoContainer}>
          <Text style={styles.demoTitle}>Tap Rating with Labels</Text>
          <TapRating
            count={5}
            defaultRating={tapRating}
            size={35}
            showRatingText
            ratingLabels={{
              1: 'Poor',
              2: 'Below Average',
              3: 'Good',
              4: 'Very Good',
              5: 'Excellent',
            }}
            selectedColor="#4CAF50"
            onFinishRating={setTapRating}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  demoContainer: {
    marginBottom: 30,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  demoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  demoSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
});
