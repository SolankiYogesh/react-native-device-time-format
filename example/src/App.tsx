import { StyleSheet, View, Text } from 'react-native';
import { is24HourFormat } from 'rn-date-format';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Is24DateFormat: {is24HourFormat()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
