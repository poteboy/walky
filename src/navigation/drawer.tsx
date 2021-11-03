import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Button} from 'native-base';

function NotificationsScreen({navigation}) {
  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
