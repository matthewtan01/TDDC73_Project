import { StyleSheet, View } from 'react-native';
import InputContainer from './components/InputContainer';

export default function App() {

  return (
    <View style={styles.container}>
      <InputContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
