import { TurboModule, TurboModuleRegistry } from "react-native";

// Define the interface for your module
export interface Spec extends TurboModule {
    // A function that takes no arguments and returns a Promise resolving to a string
    getMessage(): Promise<string>;
}

// Register the module. 
// 'HelloKocherla' is the name that will link to the native implementations.
export default TurboModuleRegistry.get<Spec>('HelloKocherla')