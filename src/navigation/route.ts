export const initialRoute = {
  AUTH: 'AUTH',
  DRAWER: 'DRAWER',
  INTRODUCTION: 'INTRODUCTION',
} as const;

export type InitialParamList = {
  [initialRoute.AUTH]: undefined;
  [initialRoute.DRAWER]: undefined;
  [initialRoute.INTRODUCTION]: undefined;
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
