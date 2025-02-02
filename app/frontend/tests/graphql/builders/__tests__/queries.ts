// Copyright (C) 2012-2024 Zammad Foundation, https://zammad-foundation.org/

import type {
  UserError,
  UserInput,
  UserSignupInput,
} from '#shared/graphql/types.ts'
import gql from 'graphql-tag'

export interface TestAvatarQuery {
  accountAvatarActive: {
    id: string
    imageFull: string
    createdAt: string
    updatedAt: string
  }
}

export interface TestUserQuery {
  user: {
    id: string
    fullname: string
  }
}

export interface TestUserAuthorizationsMutation {
  userUpdate: {
    user: {
      id: string
      fullname: string
      authorizations: {
        id: string
        provider: string
      }[]
    }
  }
}

export interface TestUserAuthorizationsVariables {
  userId: string
  input: UserInput
}

export interface TestUserQueryVariables {
  userId: string
}

export const TestAvatarDocument = gql`
  query accountAvatarActive {
    accountAvatarActive {
      id
      imageFull
      createdAt
      updatedAt
    }
  }
`

export interface TestTicketArticlesMultipleQuery {
  description: {
    edges: {
      node: {
        id: string
        bodyWithUrls: string
      }
    }[]
  }
  articles: {
    totalCount: number
    edges: {
      node: {
        id: string
        bodyWithUrls: string
      }
      cursor: string
    }[]
    pageInfo: {
      endCursor: string
      startCursor: string
      hasPreviousPage: boolean
    }
  }
}

export const TestTicketArticlesMultiple = gql`
  query ticketArticles($ticketId: ID!, $beforeCursor: String) {
    description: ticketArticles(ticket: { ticketId: $ticketId }, first: 1) {
      edges {
        node {
          id
          bodyWithUrls
        }
      }
    }
    articles: ticketArticles(
      ticket: { ticketId: $ticketId }
      before: $beforeCursor
    ) {
      totalCount
      edges {
        node {
          id
          bodyWithUrls
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasPreviousPage
      }
    }
  }
`

export const TestUserDocument = gql`
  query user($userId: ID) {
    user(user: { userId: $userId }) {
      id
      fullname
    }
  }
`

export const TestUserAutorizationsDocument = gql`
  mutation userUpdate($userId: ID, $input: UserInput!) {
    userUpdate(id: $userId, input: $input) {
      user {
        id
        fullname
        authorizations {
          id
          provider
        }
      }
    }
  }
`

export interface TestAvatarMutation {
  accountAvatarAdd: {
    avatar: {
      id: string
      imageFull: string
    }
    errors: UserError[]
  }
}

export const TestAvatarActiveMutationDocument = gql`
  mutation accountAvatarAdd($images: AvatarInput!) {
    accountAvatarAdd(images: $images) {
      avatar {
        id
        imageFull
      }
      errors {
        message
        field
      }
    }
  }
`

export interface TestUserUpdatesSubscription {
  userUpdates: {
    user: {
      id: string
      fullname: string
    }
  }
}

export const TestUserUpdatesDocument = gql`
  subscription userUpdates($userId: ID!) {
    userUpdates(userId: $userId) {
      user {
        id
        fullname
      }
    }
  }
`

export interface TestAutocompleteArrayFirstLevelQuery {
  autocompleteSearchObjectAttributeExternalDataSource: {
    value: number
    label: string
  }[]
}

export const TestAutocompleteArrayFirstLevel = gql`
  query autocompleteSearchObjectAttributeExternalDataSource(
    $input: AutocompleteSearchObjectAttributeExternalDataSourceInput!
  ) {
    autocompleteSearchObjectAttributeExternalDataSource(input: $input) {
      value
      label
    }
  }
`

export const TestUserSignupMutationDocument = gql`
  mutation userSignup($input: UserSignupInput!) {
    userSignup(input: $input) {
      success
      errors {
        ...errors
      }
    }
  }
`

export interface TestUserSignupMutationQuery {
  userSignup: {
    success: boolean
    errors: UserError[] | null
  }
}

export interface TestUserSignupArgs {
  input: UserSignupInput
}
