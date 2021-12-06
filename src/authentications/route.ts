export const route = {
    SignUp: 'SignUp',
    Welcome: 'Welcome',
    ConfirmSMS: 'ConfirmSMS'
} as {
    SignUp: 'SignUp',
    Welcome: 'Welcome',
    ConfirmSMS: 'ConfirmSMS'
}

export type RouteName = keyof typeof route

export type AuthParamList<T> = {
    [K in RouteName]: T
}