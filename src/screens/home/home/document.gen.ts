import * as Types from '../../../types/graphql.gen';

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

export type fetchSamplesAndExamplesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type fetchSamplesAndExamplesQuery = { __typename?: 'Query', examples: Array<{ __typename?: 'Example', id: string, name: string, message: string } | null | undefined> | null | undefined, samples: Array<{ __typename?: 'Sample', id: string, title: string, status: string } | null | undefined> | null | undefined };


export const fetchSamplesAndExamplesDocument = gql`
    query fetchSamplesAndExamples {
  examples {
    id
    name
    message
  }
  samples {
    id
    title
    status
  }
}
    `;

/**
 * __usefetchSamplesAndExamplesQuery__
 *
 * To run a query within a React component, call `usefetchSamplesAndExamplesQuery` and pass it any options that fit your needs.
 * When your component renders, `usefetchSamplesAndExamplesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usefetchSamplesAndExamplesQuery({
 *   variables: {
 *   },
 * });
 */
export function usefetchSamplesAndExamplesQuery(baseOptions?: Apollo.QueryHookOptions<fetchSamplesAndExamplesQuery, fetchSamplesAndExamplesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<fetchSamplesAndExamplesQuery, fetchSamplesAndExamplesQueryVariables>(fetchSamplesAndExamplesDocument, options);
      }
export function usefetchSamplesAndExamplesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<fetchSamplesAndExamplesQuery, fetchSamplesAndExamplesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<fetchSamplesAndExamplesQuery, fetchSamplesAndExamplesQueryVariables>(fetchSamplesAndExamplesDocument, options);
        }
export type fetchSamplesAndExamplesQueryHookResult = ReturnType<typeof usefetchSamplesAndExamplesQuery>;
export type fetchSamplesAndExamplesLazyQueryHookResult = ReturnType<typeof usefetchSamplesAndExamplesLazyQuery>;
export type fetchSamplesAndExamplesQueryResult = Apollo.QueryResult<fetchSamplesAndExamplesQuery, fetchSamplesAndExamplesQueryVariables>;