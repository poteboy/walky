import { NavigationProp, StackNavigationState } from '@react-navigation/native';

export type NavigationProps<T, W> = {
  navigation: T;
  route: {
    params: W;
  };
};