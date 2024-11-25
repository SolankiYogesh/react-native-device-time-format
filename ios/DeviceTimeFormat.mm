#import "DeviceTimeFormat.h"

@implementation DeviceTimeFormat
RCT_EXPORT_MODULE()

RCT_REMAP_METHOD(is24HourFormat,
                 is24HourFormatWithCallback:(RCTResponseSenderBlock)callback)
{
    // Call the native method that checks if it's 24-hour format
    BOOL has24 = [self is24HourFormat].boolValue;
    
    // Call the callback with the result wrapped as an NSNumber
    callback(@[@(has24)]);
}


- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

- (NSNumber *)is24HourFormat {
    @try {
        // Get the date format for hours from the current locale
        NSString *formatStringForHours = [NSDateFormatter dateFormatFromTemplate:@"j" options:0 locale:[NSLocale currentLocale]];
        
        // Check if the format string contains the lowercase 'a', indicating AM/PM format
        NSRange containsAMPM = [formatStringForHours rangeOfString:@"a"];
        
        // Return YES (NSNumber) if 24-hour format, NO if 12-hour format
        return @(containsAMPM.location == NSNotFound);
    }
    @catch (NSException *exception) {
        // Handle error and return NO in case of exception
        return @(NO);
    }
}


#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeDeviceTimeFormatSpecJSI>(params);
}
#endif


@end
