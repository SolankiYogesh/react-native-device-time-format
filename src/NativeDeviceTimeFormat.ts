import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  is24HourFormat: () => boolean;
}

export default TurboModuleRegistry.getEnforcing<Spec>('DeviceTimeFormat');
