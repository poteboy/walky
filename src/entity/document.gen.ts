import * as Types from '../types/graphql.gen';

import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  _empty: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  uid: Scalars['ID'];
};

export type UserUnitFragment = { __typename?: 'User', uid: string };

export const UserUnitFragmentDoc = gql`
    fragment UserUnit on User {
  uid
}
    `;