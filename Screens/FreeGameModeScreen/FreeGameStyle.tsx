import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  basket: {
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 20,
  },
  item: {
    width: 20,
    height: 20,
    position: 'absolute',
  },
  fruit: {
    backgroundColor: 'green',
  },
  bomb: {
    backgroundColor: 'red',
  },
});