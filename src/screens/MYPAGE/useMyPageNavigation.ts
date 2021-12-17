import {MyPageParamList} from './route';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const useMyPageNavigation = () =>
  useNavigation<NativeStackNavigationProp<MyPageParamList>>();
