
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNDeviceTimeFormatSpec.h"

@interface DeviceTimeFormat : NSObject <NativeDeviceTimeFormatSpec>
#else
#import <React/RCTBridgeModule.h>

@interface DeviceTimeFormat : NSObject <RCTBridgeModule>
#endif

@end
