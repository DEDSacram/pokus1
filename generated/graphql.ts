// THIS FILE IS GENERATED, DO NOT EDIT!
/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
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

export enum Locale {
  CS = 'CS',
  EN = 'EN',
  RU = 'RU'
}

export type Mutation = {
  readonly updateProfile?: Maybe<User>;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
};

export type Query = {
  readonly locales: ReadonlyArray<Locale>;
  readonly users: ReadonlyArray<User>;
};

export type UpdateProfileInput = {
  readonly locale?: InputMaybe<Locale>;
  readonly name?: InputMaybe<Scalars['String']>;
};

export type User = {
  readonly email?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly locale?: Maybe<Locale>;
  readonly name: Scalars['String'];
  readonly picture?: Maybe<Scalars['String']>;
};

export type LocalesQueryVariables = Exact<{ [key: string]: never; }>;


export type LocalesQuery = { readonly __typename: 'Query', readonly locales: ReadonlyArray<Locale> };

export type UpdateMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type UpdateMutation = { readonly __typename: 'Mutation', readonly updateProfile?: { readonly __typename: 'User', readonly name: string } | null | undefined };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { readonly __typename: 'Query', readonly users: ReadonlyArray<{ readonly __typename: 'User', readonly name: string }> };


export const LocalesDocument = gql`
    query locales {
  locales
}
    `;

/**
 * __useLocalesQuery__
 *
 * To run a query within a React component, call `useLocalesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocalesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocalesQuery({
 *   variables: {
 *   },
 * });
 */
export function useLocalesQuery(baseOptions?: Apollo.QueryHookOptions<LocalesQuery, LocalesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocalesQuery, LocalesQueryVariables>(LocalesDocument, options);
      }
export function useLocalesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocalesQuery, LocalesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocalesQuery, LocalesQueryVariables>(LocalesDocument, options);
        }
export type LocalesQueryHookResult = ReturnType<typeof useLocalesQuery>;
export type LocalesLazyQueryHookResult = ReturnType<typeof useLocalesLazyQuery>;
export type LocalesQueryResult = Apollo.QueryResult<LocalesQuery, LocalesQueryVariables>;
export const UpdateDocument = gql`
    mutation Update($name: String!) {
  updateProfile(input: {name: $name}) {
    name
  }
}
    `;
export type UpdateMutationFn = Apollo.MutationFunction<UpdateMutation, UpdateMutationVariables>;

/**
 * __useUpdateMutation__
 *
 * To run a mutation, you first call `useUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMutation, { data, loading, error }] = useUpdateMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMutation, UpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMutation, UpdateMutationVariables>(UpdateDocument, options);
      }
export type UpdateMutationHookResult = ReturnType<typeof useUpdateMutation>;
export type UpdateMutationResult = Apollo.MutationResult<UpdateMutation>;
export type UpdateMutationOptions = Apollo.BaseMutationOptions<UpdateMutation, UpdateMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    name
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;