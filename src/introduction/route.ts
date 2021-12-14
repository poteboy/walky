import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const IntroductionRouteKey = {
  First: 'First',
  Second: 'Second',
  Third: 'Third',
} as const;

export type IntroductionParamList = {
  [IntroductionRouteKey.First]: undefined;
  [IntroductionRouteKey.Second]: undefined;
  [IntroductionRouteKey.Third]: undefined;
};
