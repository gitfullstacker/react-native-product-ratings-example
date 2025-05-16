import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import StarRating from '../../src/components/StarRating';
import RatingImage from '../../src/components/RatingImage';

const App = () => {
  const [ratings, setRatings] = useState({
    star: 3.5,
    heart: 0,
    bell: 2,
    rocket: 4,
    airbnb: 5
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        
        {/* Default Star Rating */}
        <RatingDemo 
          title="Standard Stars"
          type="star"
          rating={ratings.star}
          tintColor="#FFD700"
          onRate={(val) => setRatings({...ratings, star: val})}
        />

        {/* Heart Rating */}
        <RatingDemo 
          title="Heart Rating"
          type="heart"
          rating={ratings.heart}
          tintColor="#FF6B6B"
          unselectedColor="#FFC0CB"
          onRate={(val) => setRatings({...ratings, heart: val})}
          showLabels
          labels={['Hate', 'Dislike', 'Okay', 'Like', 'Love']}
        />

        {/* Bell Rating */}
        <RatingDemo 
          title="Bell Rating"
          type="bell"
          rating={ratings.bell}
          tintColor="#9C27B0"
          onRate={(val) => setRatings({...ratings, bell: val})}
          allowHalf
        />

        {/* Rocket Rating */}
        <RatingDemo 
          title="Rocket Rating" 
          type="rocket"
          rating={ratings.rocket}
          tintColor="#FF9800"
          onRate={(val) => setRatings({...ratings, rocket: val})}
        />

        {/* Airbnb-style Rating */}
        <RatingDemo 
          title="Airbnb-style"
          type="airbnb"
          rating={ratings.airbnb}
          tintColor="#FF5A5F"
          onRate={(val) => setRatings({...ratings, airbnb: val})}
        />

        {/* Airbnb-style Rating */}
        <RatingDemo 
          title="Airbnb-style"
          type="airbnb"
          rating={ratings.airbnb}
          tintColor="#FF5A5F"
          onRate={(val) => setRatings({...ratings, airbnb: val})}
          readonly
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export interface RatingDemoProps {
  title: string;
  type: 'star' | 'heart' | 'bell' | 'rocket' | 'airbnb';
  rating: number;
  tintColor: string;
  unselectedColor?: string;
  onRate: (rating: number) => void;
  allowHalf?: boolean;
  readonly?: boolean;
  showLabels?: boolean;
  labels?: string[];
}

// Reusable rating component
const RatingDemo = ({
  title,
  type,
  rating,
  tintColor,
  unselectedColor = '#BDC3C7',
  onRate,
  allowHalf = false,
  readonly = false,
  showLabels = false,
  labels = []
}: RatingDemoProps) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <StarRating
      count={5}
      defaultRating={rating}
      size={40}
      selectedColor={tintColor}
      allowHalfRating={allowHalf}
      readonly={readonly}
      onFinishRating={onRate}
      RatingImage={(props) => (
        <RatingImage
          {...props}
          type={type}
          unselectedColor={unselectedColor}
        />
      )}
    />
    {showLabels && (
      <View style={styles.labels}>
        {labels.map((label, i) => (
          <Text key={i} style={styles.labelText}>
            {label}
          </Text>
        ))}
      </View>
    )}
    <Text style={styles.ratingText}>
      Current: {rating} {readonly && '(Readonly)'}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  container: {
    padding: 16,
  },
  section: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  labelText: {
    fontSize: 12,
    color: '#7F8C8D',
  },
  ratingText: {
    marginTop: 8,
    color: '#34495E',
    textAlign: 'center',
  },
});

export default App;