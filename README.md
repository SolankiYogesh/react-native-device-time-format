---
# 🕒 **react-native-device-time-format**

Small lib to get the device's time format setting in React Native! 🚀

With **react-native-device-time-format**, easily detect whether the device is using a **12-hour** or **24-hour** time format. Perfect for tailoring your app’s time display based on user preferences! 🌍⏰
---

**Key Features:**

- 🌐 **Cross-Platform Compatibility**
- ⚡ **Lightweight Library**
- 🚀 **Supports New Architectures**

---

### To Do

- [ ] Windows Support
- [ ] Mac Support
- [ ] VisionOS Support
- [ ] tvOS Support

## Installation

To get started with **react-native-device-time-format**, you can easily install it using **npm** or **yarn**.

### 📦 Using npm:

```bash
npm install react-native-device-time-format
```

### 🔧 Using yarn:

```bash
yarn add react-native-device-time-format
```

Once installed, you're all set to start using **react-native-device-time-format** in your project! 🚀

## 📝 Usage / Examples

Here's a simple example of how to use **`is24HourFormat`** from **react-native-device-time-format**:

```typescript
import { is24HourFormat } from 'react-native-device-time-format';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
  const [is24, setIs24] = useState(false);

  useEffect(() => {
    // Check if the device uses 24-hour format
    is24HourFormat(setIs24);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Is 24-hour format: {String(is24)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;
```

### 🔍 Explanation:

- **`is24HourFormat(setIs24)`**: This function checks whether the device is using a 24-hour time format and updates the `is24` state accordingly.

### 🖼 Output:

The component will display whether the device is set to use the **24-hour format** for time.
