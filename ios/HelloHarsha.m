#import "HelloHarsha.h"
#import <React/RCTLog.h>

@implementation HelloHarsha


RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(getMessage,
                  getMessageWithResolver: (RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  NSString *message = @"Hello Harsha!";
  resolve(message);
}

@end
