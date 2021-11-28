import * as Types from '../types/graphql.gen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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

export type getExamplesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type getExamplesQuery = { __typename?: 'Query', examples: Array<{ __typename?: 'Example', id: string, name: string, message: string } | null | undefined> | null | undefined };


export const getExamplesDocument = gql`
    query getExamples {
  examples {
    id
    name
    message
  }
}
    `;

/**
 * __usegetExamplesQuery__
 *
 * To run a query within a React component, call `usegetExamplesQuery` and pass it any options that fit your needs.
 * When your component renders, `usegetExamplesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usegetExamplesQuery({
 *   variables: {
 *   },
 * });
 */
export function usegetExamplesQuery(baseOptions?: Apollo.QueryHookOptions<getExamplesQuery, getExamplesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<getExamplesQuery, getExamplesQueryVariables>(getExamplesDocument, options);
      }
export function usegetExamplesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<getExamplesQuery, getExamplesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<getExamplesQuery, getExamplesQueryVariables>(getExamplesDocument, options);
        }
export type getExamplesQueryHookResult = ReturnType<typeof usegetExamplesQuery>;
export type getExamplesLazyQueryHookResult = ReturnType<typeof usegetExamplesLazyQuery>;
export type getExamplesQueryResult = Apollo.QueryResult<getExamplesQuery, getExamplesQueryVariables>;