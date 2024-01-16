import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './ParametresStyle';

const Parametres: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paramètres</Text>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Option 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Option 2</Text>
      </TouchableOpacity>

      {/* Ajoutez d'autres options selon vos besoins */}
    </View>
  );
};

export default Parametres;