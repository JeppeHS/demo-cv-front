/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar type represents a date and time. `DateTime` expects timestamps to be formatted in accordance with the [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
  DateTime: { input: any; output: any; }
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Education = {
  __typename?: 'Education';
  degree: Scalars['String']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  institution: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
};

export type Person = {
  __typename?: 'Person';
  currentJobTitle: Scalars['String']['output'];
  educations?: Maybe<Array<Education>>;
  id: Scalars['Int']['output'];
  initials: Scalars['String']['output'];
  name: Scalars['String']['output'];
  projects?: Maybe<Array<Project>>;
  skills?: Maybe<Array<Skill>>;
  workExperiences?: Maybe<Array<WorkExperience>>;
};

export type PersonsQuery = {
  __typename?: 'PersonsQuery';
  persons?: Maybe<Array<Maybe<Person>>>;
};

export type Project = {
  __typename?: 'Project';
  description: Scalars['String']['output'];
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  startDate: Scalars['DateTime']['output'];
};

export type Skill = {
  __typename?: 'Skill';
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  level: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type WorkExperience = {
  __typename?: 'WorkExperience';
  company?: Maybe<Company>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  jobTitle: Scalars['String']['output'];
  startDate: Scalars['DateTime']['output'];
};

export type GetPersonsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPersonsQuery = { __typename?: 'PersonsQuery', persons?: Array<{ __typename?: 'Person', id: number, name: string, initials: string, currentJobTitle: string, educations?: Array<{ __typename?: 'Education', id: number, institution: string, degree: string, startDate: any, endDate?: any | null }> | null, skills?: Array<{ __typename?: 'Skill', id: number, name: string, description: string, level: string }> | null, projects?: Array<{ __typename?: 'Project', id: number, description: string, startDate: any, endDate?: any | null }> | null, workExperiences?: Array<{ __typename?: 'WorkExperience', id: number, jobTitle: string, startDate: any, endDate?: any | null, company?: { __typename?: 'Company', id: number, name: string } | null }> | null } | null> | null };


export const GetPersonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPersons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"persons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"initials"}},{"kind":"Field","name":{"kind":"Name","value":"currentJobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"educations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"institution"}},{"kind":"Field","name":{"kind":"Name","value":"degree"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"skills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"workExperiences"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPersonsQuery, GetPersonsQueryVariables>;