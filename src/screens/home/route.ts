export const HomeRouteKeys = {
  InitialPage: 'HOME/InitialPage',
} as const;

export type HomeParamList = {
  [HomeRouteKeys.InitialPage]: undefined;
};
