import React from 'react';
import { ImageBackground  } from 'react-native';
import { styles } from './ArcadeGameStyle';

const ArcadeGame: React.FC = () => {
  return (
    <ImageBackground source={require('../../assets/background.png')} style={styles.background}>

    </ImageBackground>
  );
};

export default ArcadeGame;