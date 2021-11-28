import * as Types from '../../types/graphql.gen';

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

export type Example = {
  __typename?: 'Example';
  id: Scalars['ID'];
  message: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  examples: Maybe<Array<Maybe<Example>>>;
  samples: Maybe<Array<Maybe<Sample>>>;
};

export type Sample = {
  __typename?: 'Sample';
  id: Scalars['ID'];
  status: Scalars['String'];
  title: Scalars['String'];
};

export type ExampleUnitFragment = { __typename?: 'Example', id: string, name: string, message: string };

export const ExampleUnitFragmentDoc = gql`
    fragment ExampleUnit on Example {
  id
  name
  message
}
    `;