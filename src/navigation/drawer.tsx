import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AppTab} from './tab';
import LanguageComponent from '@src/drawers/language/screen.component';
import {useTranslation} from 'react-i18next';

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
  const {t} = useTranslation();

  return (
    <Drawer.Navigator screenOptions={{swipeEnabled: true}}>
      <Drawer.Screen name={t('home')} component={AppTab} />
      <Drawer.Screen name={t('language')} component={LanguageComponent} />
    </Drawer.Navigator>
  );
};
