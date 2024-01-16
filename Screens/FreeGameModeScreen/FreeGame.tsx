import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, PanResponder, Animated, StyleSheet, Dimensions } from 'react-native';
import { styles } from './FreeGameStyle';

const { width, height } = Dimensions.get('window');

const FreeGame: React.FC = () => {
  const [fruits, setFruits] = useState([]);
  const [bombs, setBombs] = useState([]);
  const [basketPosition, setBasketPosition] = useState(new Animated.Value(width / 2 - 50));

  useEffect(() => {
    const fruitGenerationInterval = setInterval(() => {
      const randomX = Math.floor(Math.random() * width);
      setFruits(prevFruits => [...prevFruits, { type: 'fruit', id: Math.random(), x: randomX }]);
    }, 2000);

    const bombGenerationInterval = setInterval(() => {
      const randomX = Math.floor(Math.random() * width);
      setBombs(prevBombs => [...prevBombs, { type: 'bomb', id: Math.random(), x: randomX }]);
    }, 4000);

    return () => {
      clearInterval(fruitGenerationInterval);
      clearInterval(bombGenerationInterval);
    };
  }, []);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      Animated.timing(basketPosition, {
        toValue: gesture.moveX - 50,
        duration: 0,
        useNativeDriver: false,
      }).start();
    },
  });

  const handleCollision = (item) => {
    if (item.type === 'fruit') {
      setFruits(prevFruits => prevFruits.filter(fruit => fruit.id !== item.id));
    } else if (item.type === 'bomb') {
      setBombs(prevBombs => prevBombs.filter(bomb => bomb.id !== item.id));
    }
  };

  const renderItems = (items, itemType) => {
    return items.map((item) => (
      <Animated.View
        key={item.id}
        style={[
          styles.item,
          itemType === 'fruit' ? styles.fruit : styles.bomb,
          { left: item.x, top: basketPosition },
        ]}
        onTouchStart={() => handleCollision(item)}
      />
    ));
  };

  return (
    <ImageBackground source={require('../../assets/background.png')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Free Mode</Text>
        <Animated.View {...panResponder.panHandlers} style={[styles.basket, { left: basketPosition }]} />

        {renderItems(fruits, 'fruit')}
        {renderItems(bombs, 'bomb')}
      </View>
    </ImageBackground>
  );
};

export default FreeGame;