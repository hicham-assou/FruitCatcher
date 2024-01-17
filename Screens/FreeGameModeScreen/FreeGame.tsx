import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const window = Dimensions.get('window');

const GameScreen = () => {
  const fruits = ['🍎', '🍌', '🍇', '🍓', '🍊', '🍒', '🍉', '🥝'];
  const [fruit, setFruit] = useState(fruits[Math.floor(Math.random() * fruits.length)]);
  const [yPosition, setYPosition] = useState(0);
  const [xPosition, setXPosition] = useState(Math.random() * window.width);

  useEffect(() => {
    const interval = setInterval(() => {
      setYPosition((prevPosition) => {
        const newPosition = prevPosition + 5;
        if (newPosition > window.height) {
          setFruit(fruits[Math.floor(Math.random() * fruits.length)]);
          setXPosition(Math.random() * window.width);
          return 0;
        }
        return newPosition;
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{...styles.fruit, top: yPosition, left: xPosition}}>{fruit}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fruit: {
    position: 'absolute',
    fontSize: 50,
  },
});

export default GameScreen;
