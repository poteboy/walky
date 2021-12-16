import {HomeParamList} from './route';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const useHomeNavigation = () =>
  useNavigation<NativeStackNavigationProp<HomeParamList>>();
