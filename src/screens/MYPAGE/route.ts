export const MyPageRouteKeys = {
  InitialPage: 'MyPage/InitialPage',
  FriendList: 'MyPage/FriendList',
} as const;

export type MyPageParamList = {
  [MyPageRouteKeys.InitialPage]: undefined;
  [MyPageRouteKeys.FriendList]: undefined;
};
