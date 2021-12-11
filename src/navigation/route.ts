export const initialRoute = {
  AUTH: 'AUTH',
  DRAWER: 'DRAWER',
} as const;

export type InitialParamList = {
  [initialRoute.AUTH]: undefined;
  [initialRoute.DRAWER]: undefined;
};

export const drawerRoute = {
  home: 'home',
  language: 'language',
};

export const route = {
  HOME: 'HOME/home',
  MAP: 'MAP',
  AUTH: 'AUTH',
};
