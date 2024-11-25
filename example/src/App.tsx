import { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { is24HourFormat } from 'rn-date-format';

export default function App() {
  const [is24, setIs24] = useState(false);

  useEffect(() => {
    is24HourFormat(setIs24);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Is24DateFromat: {String(is24)}</Text>
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
