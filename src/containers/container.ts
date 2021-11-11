import React, {ReactNode} from 'react';
import {Container as UnstatedNextContainer} from 'unstated-next';
import {UserContainer} from './user-container';
import {createContainer} from 'unstated-next';

// const combine = (
//     containers: Array<UnstatedNextContainer<any, any>>,
//     children: JSX.Element,
//   ) => {
//     return containers.reduce((acc, Container) => {
//       return<Container.Provider>{acc}</Container.Provider>
//     }, children);
//   };

//   export const Container = (props: any): JSX.Element => {
//     return combine(
//       [UserContainer],
//       props.children,
//     );
//   };
