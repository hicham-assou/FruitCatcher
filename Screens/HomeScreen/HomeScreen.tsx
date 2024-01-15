import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './HomeScreenStyle';
const HomeScreen: React.FC = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fruit Catcher</Text>

      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('GameScreen')}
      >
        <Text style={styles.buttonText}>Démarrer le Jeu</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionsButton}
        onPress={() => navigation.navigate('OptionsScreen')}
      >
        <Text style={styles.buttonText}>Options</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.freeModeButton}
        onPress={() => navigation.navigate('FreeModeScreen')}
      >
        <Text style={styles.buttonText}>Mode Libre</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.livesModeButton}
        onPress={() => navigation.navigate('LivesModeScreen')}
      >
        <Text style={styles.buttonText}>Mode avec Vies</Text>
      </TouchableOpacity>

      {/* Ajoute d'autres boutons ou sections selon les besoins */}
    </View>
  );
};

export default HomeScreen;