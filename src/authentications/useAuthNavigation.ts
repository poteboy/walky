import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthParamList } from './route'

export const useAuthNavigation = () => 
useNavigation<NativeStackNavigationProp<AuthParamList>>()