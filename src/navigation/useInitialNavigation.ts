import {InitialParamList} from './route';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const useInitialNavigation = () =>
  useNavigation<NativeStackNavigationProp<InitialParamList>>();
