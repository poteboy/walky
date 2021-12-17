export const MyPageRouteKeys = {
  InitialPage: 'MyPage/InitialPage',
} as const;

export type MyPageParamList = {
  [MyPageRouteKeys.InitialPage]: undefined;
};
