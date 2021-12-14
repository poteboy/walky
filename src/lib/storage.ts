import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';

export const storage = new Storage({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
});

export const storageKeys = {
  hasSeenIntroduction: 'hasSeenIntroduction',
};
