import { NativeModules } from 'react-native';

const { HelloHarsha } = NativeModules;

export function getMessage(): Promise<string> {
  return HelloHarsha.getMessage();
}