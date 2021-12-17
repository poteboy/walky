export const TabRouteKeys = {
  HOME: 'HOME',
  MYPAGE: 'MYPAGE',
} as const;

export type TabParamList = {
  [TabRouteKeys.HOME]: undefined;
  [TabRouteKeys.MYPAGE]: undefined;
};
