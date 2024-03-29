import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground  } from 'react-native';
import { styles } from './HomeScreenStyle';


const HomeScreen: React.FC = ({ navigation }) => {
  return (
      <ImageBackground source={require('../../assets/background.png')} style={styles.background}>

        <View style={styles.container}>
          <Text style={styles.title}>Fruit Catcher</Text>

          <TouchableOpacity
            style={styles.optionsButton}
            onPress={() => navigation.navigate('Parametres')}
          >
            <Text style={styles.buttonText}>Options</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.freeModeButton}
            onPress={() => navigation.navigate('Mode Libre')}
          >
            <Text style={styles.buttonText}>Mode Libre</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.livesModeButton}
            onPress={() => navigation.navigate('Mode Arcade')}
          >
            <Text style={styles.buttonText}>Mode avec Vies</Text>
          </TouchableOpacity>

          {/* Ajoute d'autres boutons ou sections selon nos besoins */}
        </View>
      </ImageBackground>
  );
};

export default HomeScreen;