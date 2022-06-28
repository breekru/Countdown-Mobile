import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Countdown Timer!!!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3333ff',
    alignItems: 'center',
    justifyContent: 'center',
	fontWeight: 'bold',
	fontcolor: 'white',
	color: 'white',
  },
});
