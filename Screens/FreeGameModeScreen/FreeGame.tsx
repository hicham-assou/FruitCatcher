import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const window = Dimensions.get('window');

const GameScreen = () => {
  const fruits = ['🍎', '🍌', '🍇', '🍓', '🍊', '🍒', '🍉', '🥝'];
  const [fruitArray, setFruitArray] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newFruit = {
        fruit: fruits[Math.floor(Math.random() * fruits.length)],
        yPosition: 0,
        xPosition: Math.random() * window.width,
        speed: Math.random() * 5 + 1, // Adjust the speed as needed
      };

      setFruitArray((prevArray) => [...prevArray, newFruit]);
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updatePositions = () => {
      setFruitArray((prevArray) => {
        return prevArray.map((item) => {
          const newPosition = item.yPosition + item.speed;

          if (newPosition > window.height) {
            return {
              ...item,
              yPosition: 0,
              xPosition: Math.random() * window.width,
            };
          }

          return { ...item, yPosition: newPosition };
        });
      });
    };

    const positionInterval = setInterval(updatePositions, 10);

    return () => clearInterval(positionInterval);
  }, []);

  return (
    <View style={styles.container}>
      {fruitArray.map((item, index) => (
        <Text key={index} style={{ ...styles.fruit, top: item.yPosition, left: item.xPosition }}>
          {item.fruit}
        </Text>
      ))}
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