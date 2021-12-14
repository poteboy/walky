import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IntroductionParamList} from './route';

export const useIntroductionNavigation = () =>
  useNavigation<NativeStackNavigationProp<IntroductionParamList>>();
