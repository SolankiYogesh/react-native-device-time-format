---
# 🕒 **rn-date-format**

Small lib to get the device's time format setting in React Native! 🚀

With **rn-date-format**, easily detect whether the device is using a **12-hour** or **24-hour** time format. Perfect for tailoring your app’s time display based on user preferences! 🌍⏰
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

To get started with **rn-date-format**, you can easily install it using **npm** or **yarn**.

### 📦 Using npm:

### 🔧 Using npm:

_For the new architecture only, use:_

```bash
npm install rn-date-format
```

_For the old architecture, use:_

```bash
npm install rn-date-format@0.1.3
```

### 🔧 Using yarn:

_For the new architecture only, use:_

```bash
yarn add rn-date-format
```

_For the old architecture, use:_

```bash
yarn add rn-date-format@0.1.3
```

---

## 📝 Usage / Examples

Here's a simple example of how to use **`is24HourFormat`** from **rn-date-format**:

```typescript
import { is24HourFormat } from 'rn-date-format';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {

  return (
    <View style={styles.container}>
      <Text>Is 24-hour format: {is24HourFormat()}</Text>
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

- **`is24HourFormat()`**: This function checks whether the device is using a 24-hour time format and return boolean.

### 🖼 Output:

The component will display whether the device is set to use the **24-hour format** for time.
